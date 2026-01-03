
import React, { useState, useMemo, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';

// SVG Icons for Toolbar
const FilterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.437 7a2 2 0 0 1-3.874 0H4.5a.5.5 0 0 1 0-1h1.063a2 2 0 0 1 3.874 0H19.5a.5.5 0 0 1 0 1zM6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m11.937 5H19.5a.5.5 0 0 1 0 1h-1.063a2 2 0 0 1-3.874 0H4.5a.5.5 0 0 1 0-1h10.063a2 2 0 0 1 3.874 0m-.937.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-6.063 5H19.5a.5.5 0 0 1 0 1h-8.063a2 2 0 0 1-3.874 0H4.5a.5.5 0 0 1 0-1h3.063a2 2 0 0 1 3.874 0m-.937.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"></path>
    </svg>
);

const SortIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.5 6a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM19 6.5a.5.5 0 0 0-1 0v9.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L19 16.293z"></path>
    </svg>
);

const categories = [
    { key: 'all', name: 'Todos los productos' },
    { key: 'skincare', name: 'Cuidado Facial' },
    { key: 'makeup', name: 'Maquillaje' },
    { key: 'perfume', name: 'Fragancias' },
    { key: 'wellness', name: 'Wellness' },
    { key: 'hair', name: 'Cuidado del Cabello' },
    { key: 'personal-care', name: 'Cuidado Personal' },
    { key: 'men', name: 'Hombre' },
    { key: 'accessories', name: 'Accesorios' },
];

const ShopPage: React.FC<{
    currency: Currency;
    initialCategory: string;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ currency, initialCategory, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [sortOrder, setSortOrder] = useState('menu_order');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    useEffect(() => {
        setActiveCategory(initialCategory);
    }, [initialCategory]);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = activeCategory === 'all'
            ? [...allProducts]
            : allProducts.filter(p => p.category === activeCategory);

        switch (sortOrder) {
            case 'popularity':
                filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
                break;
            case 'rating':
                filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'price':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return filtered;
    }, [activeCategory, sortOrder]);

    const currentCategoryName = categories.find(c => c.key === activeCategory)?.name || 'Tienda';

    return (
        <div className="bg-white min-h-screen">
            {/* Toolbar Principal */}
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <button 
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center gap-2 text-black font-black uppercase text-[10px] tracking-widest hover:text-[#FBCFE8] transition-colors"
                            >
                                <FilterIcon />
                                <span>Filtrar</span>
                            </button>

                            <div className="flex items-center gap-2 text-black font-black uppercase text-[10px] tracking-widest">
                                <SortIcon />
                                <select 
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className="bg-transparent outline-none cursor-pointer"
                                >
                                    <option value="menu_order">Recomendado</option>
                                    <option value="popularity">Popularidad</option>
                                    <option value="rating">Valoración</option>
                                    <option value="price">Precio: + Bajo</option>
                                    <option value="price-desc">Precio: + Alto</option>
                                </select>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                {filteredAndSortedProducts.length} Productos en {currentCategoryName}
                            </p>
                        </div>
                    </div>
                    
                    {/* Panel de Filtros */}
                    {isFilterOpen && (
                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2 animate-fade-in">
                            {categories.map(cat => (
                                <button
                                    key={cat.key}
                                    onClick={() => { setActiveCategory(cat.key); setIsFilterOpen(false); }}
                                    className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                                        activeCategory === cat.key
                                            ? 'bg-black text-white'
                                            : 'bg-gray-100 text-gray-800 hover:bg-[#FBCFE8] hover:text-black'
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Rejilla de Productos */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                    {filteredAndSortedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            currency={currency}
                            onAddToCart={onAddToCart}
                            onQuickAddToCart={onQuickAddToCart}
                            onProductSelect={onProductSelect}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ShopPage;
