
import React from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import HeroBanner from './HeroCarousel';
import type { Currency } from './currency';

const ProductList: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}> = ({ onNavigate, onProductSelect, onAddToCart, onQuickAddToCart, currency, onQuickView }) => {
    
    const catalogNovedades = allProducts.filter(p => p.tag === 'NOVEDAD').slice(0, 4);
    const hairCareProducts = allProducts.filter(p => p.category === 'hair').slice(0, 4);

    return (
        <div className="space-y-16 pb-20 bg-white">
            
            {/* HERO PRINCIPAL CON IMAGEN ARTÍSTICA */}
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN NOVEDADES CATÁLOGO 1 - 2026 */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-10 border-b border-gray-100 pb-6">
                    <div className="flex flex-col">
                        <span className="text-[#fbcfe8] text-[12px] font-black uppercase tracking-[0.4em] mb-1">Platinum Selection</span>
                        <h3 className="text-3xl font-black text-black uppercase tracking-tighter">Esenciales Catálogo 1</h3>
                    </div>
                    <button onClick={() => onNavigate('products', 'all')} className="mt-4 md:mt-0 text-black font-bold uppercase text-[10px] tracking-widest hover:text-[#fbcfe8] transition-colors border-b-2 border-black pb-1">Descubrir Campaña</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {catalogNovedades.map(product => (
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

            {/* BANNER IMAGEN ARTÍSTICA (Platinum Collection) - LIMPIO */}
            <div className="w-full bg-white py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 bg-white p-10 md:p-14 rounded-[50px] border border-pink-50 shadow-sm">
                        <div className="w-full md:w-3/5">
                            <img 
                                src="https://images.unsplash.com/photo-1619014161955-46f890666014?q=80&w=2000&auto=format&fit=crop" 
                                className="w-full h-auto rounded-[30px] object-cover shadow-2xl" 
                                alt="Platinum Collection" 
                            />
                        </div>
                        <div className="w-full md:w-2/5 space-y-8">
                            <div className="space-y-4">
                                <span className="text-[#fbcfe8] font-black uppercase text-[13px] tracking-[0.6em] block">Sutil & Radiante</span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-black">La Luz de 2026</h2>
                                <p className="text-gray-400 font-light text-xl leading-relaxed">
                                    Celebramos el inicio del Catálogo 1 con fórmulas que capturan la luz. Desde el cuidado facial con diamantes hasta fragancias que evocan pureza.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button 
                                    onClick={() => onNavigate('products', 'skincare')}
                                    className="bg-black text-white font-black py-5 px-14 rounded-full shadow-2xl transition-all transform hover:scale-105 uppercase tracking-widest text-[11px] hover:bg-[#fbcfe8] hover:text-black"
                                >
                                    VER CATÁLOGO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN CABELLO (DUOLOGI) */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-5">
                    <div className="flex flex-col">
                        <span className="text-[#fbcfe8] text-[11px] font-black uppercase tracking-[0.3em] mb-1">Cuidado Capilar Avanzado</span>
                        <h3 className="text-3xl font-black text-black uppercase tracking-tighter">Gama Duologi</h3>
                    </div>
                    <button onClick={() => onNavigate('products', 'hair')} className="text-black font-bold uppercase text-[10px] tracking-widest hover:text-[#fbcfe8] transition-colors border-b-2 border-black pb-1">Ver Todo Cabello</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {hairCareProducts.map(product => (
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

            {/* DOBLE BANNER INFERIOR - FOCO EN CUIDADO PERSONAL Y OFERTAS */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative h-96 rounded-[30px] overflow-hidden group cursor-pointer shadow-lg" onClick={() => onNavigate('products', 'personal-care')}>
                        <img src="https://images.unsplash.com/photo-1556228852-6d45a7d8a341?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Activelle" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#fbcfe8] mb-3">Protección Activa</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Activelle Actiboost</h3>
                            <button className="bg-white text-black font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest w-fit hover:bg-[#fbcfe8] transition-all">Comprar Oferta</button>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-[30px] overflow-hidden group cursor-pointer shadow-lg" onClick={() => onNavigate('ofertas')}>
                        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Ofertas" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#fbcfe8] mb-3">Oportunidad</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Últimas Unidades C1</h3>
                            <button className="bg-white text-black font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest w-fit hover:bg-[#fbcfe8] transition-all">Ver Promociones</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
