
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import type { View, Product, CartItem } from './components/types';
import type { Currency } from './components/currency';
import { blogPosts } from './components/blogData';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ShopPage from './components/ShopPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartSidebar from './components/CartSidebar';
import OfertasPage from './components/OfertasPage';
import AsistenteIAPage from './components/AsistenteIAPage';
import CatalogPage from './components/CatalogPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import QuickViewModal from './components/QuickViewModal';
import CheckoutPage from './components/CheckoutPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BottomNavBar from './components/BottomNavBar';

type AppView = {
    current: View;
    payload?: any;
};

const App: React.FC = () => {
    const [view, setView] = useState<AppView>({ current: 'home' });
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [currency, setCurrency] = useState<Currency>('EUR');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('vellaperfumeria_cart');
            if (storedCart) setCartItems(JSON.parse(storedCart));
        } catch (e) { console.error("Error loading cart", e); }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('vellaperfumeria_cart', JSON.stringify(cartItems));
        } catch (e) { console.error("Error saving cart", e); }
    }, [cartItems]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const handleNavigate = useCallback((newView: View, payload?: any) => {
        setView({ current: newView, payload });
    }, []);

    const handleProductSelect = (product: Product) => {
        handleNavigate('productDetail', product);
    };

    const handleAddToCart = (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => {
        const cartItemId = selectedVariant 
            ? `${product.id}-${Object.values(selectedVariant).join('-')}`
            : `${product.id}`;
            
        const existingItem = cartItems.find(item => item.id === cartItemId);

        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { id: cartItemId, product, quantity: 1, selectedVariant }]);
        }
        setIsCartOpen(true);
    };
    
    const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems(cartItems.filter(item => item.id !== cartItemId));
        } else {
            setCartItems(cartItems.map(item =>
                item.id === cartItemId ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const handleRemoveItem = (cartItemId: string) => {
        setCartItems(cartItems.filter(item => item.id !== cartItemId));
    };

    const renderView = () => {
        try {
            switch (view.current) {
                case 'home':
                    return <ProductList onNavigate={handleNavigate} onProductSelect={handleProductSelect} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} currency={currency} onQuickView={setQuickViewProduct} />;
                case 'products':
                    return <ShopPage currency={currency} initialCategory={view.payload || 'all'} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
                case 'productDetail':
                    return <ProductDetailPage product={view.payload} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
                case 'ofertas':
                    return <OfertasPage onNavigate={handleNavigate} currency={currency} onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} />;
                case 'ia':
                    return <AsistenteIAPage />;
                case 'catalog':
                    return <CatalogPage onAddToCart={handleAddToCart} onQuickAddToCart={handleAddToCart} onProductSelect={handleProductSelect} onQuickView={setQuickViewProduct} currency={currency} />;
                case 'blog':
                    return <BlogPage posts={blogPosts} onSelectPost={(post) => handleNavigate('blogPost', post)} />;
                case 'blogPost':
                    return <BlogPostPage post={view.payload} allPosts={blogPosts} onSelectPost={(post) => handleNavigate('blogPost', post)} onBack={() => handleNavigate('blog')} />;
                case 'checkout':
                    return <CheckoutPage cartItems={cartItems} currency={currency} onClearCart={() => setCartItems([])} onNavigate={handleNavigate} />;
                default:
                    return <div className="flex items-center justify-center min-h-[50vh] bg-white font-black uppercase text-gray-400">Página no disponible</div>;
            }
        } catch (error) {
            console.error("Render Error:", error);
            return <div className="flex items-center justify-center min-h-[50vh] bg-white font-black uppercase text-red-500">Error al cargar</div>;
        }
    };

    return (
        <div className="relative min-h-screen bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
            <Header 
                onNavigate={handleNavigate} 
                currency={currency}
                onCurrencyChange={setCurrency}
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />
            
            <main className="w-full bg-white relative">
                <Suspense fallback={<div className="h-96 flex items-center justify-center font-black uppercase tracking-widest text-gray-300">Cargando...</div>}>
                    {renderView()}
                </Suspense>
            </main>

            {isCartOpen && (
                <CartSidebar 
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    cartItems={cartItems}
                    currency={currency}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={() => { setIsCartOpen(false); handleNavigate('checkout'); }}
                    isCheckingOut={false}
                    checkoutError={null}
                    onNavigate={handleNavigate}
                />
            )}

            {quickViewProduct && (
                <QuickViewModal 
                    product={quickViewProduct}
                    currency={currency}
                    onClose={() => setQuickViewProduct(null)}
                    onAddToCart={handleAddToCart}
                    onProductSelect={handleProductSelect}
                />
            )}

            <Footer onNavigate={handleNavigate} />
            <FloatingWhatsApp />
            <BottomNavBar onNavigate={handleNavigate} currentView={view.current} currentCategory={view.payload || 'all'} />

            <style>{`
                :root {
                    --color-vella-pink-light: #FBCFE8;
                    --color-vella-pink-ultra: #FDF2F8;
                }
                body {
                    margin: 0;
                    padding: 0;
                    background-color: white !important;
                }
            `}</style>
        </div>
    );
};

export default App;
