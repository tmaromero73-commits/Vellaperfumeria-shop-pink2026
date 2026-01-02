
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
    
    const makeupNovedad = allProducts.filter(p => p.category === 'makeup' && p.tag === 'NOVEDAD').slice(0, 4);

    return (
        <div className="space-y-16 pb-20 bg-white">
            
            {/* HERO PRINCIPAL */}
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN NOVEDADES CATÁLOGO 1 */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-5">
                    <div className="flex flex-col">
                        <span className="text-[#fbcfe8] text-[11px] font-black uppercase tracking-[0.3em] mb-1">Catálogo 1 - 2026</span>
                        <h3 className="text-3xl font-black text-black uppercase tracking-tighter">Esenciales de Temporada</h3>
                    </div>
                    <button onClick={() => onNavigate('products', 'all')} className="text-black font-bold uppercase text-[10px] tracking-widest hover:text-[#fbcfe8] transition-colors border-b-2 border-black pb-1">Ver Todo</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {makeupNovedad.map(product => (
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

            {/* SECCIÓN IMAGEN ARTÍSTICA - ESPACIO BLANCO (Platinum Collection) */}
            <div className="w-full bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-[40px] border border-gray-50 shadow-sm">
                        <div className="w-full md:w-3/5">
                            <img 
                                src="https://images.unsplash.com/photo-1619014161955-46f890666014?q=80&w=2000&auto=format&fit=crop" 
                                className="w-full h-auto rounded-3xl object-cover shadow-2xl" 
                                alt="Platinum Beauty" 
                            />
                        </div>
                        <div className="w-full md:w-2/5 space-y-6">
                            <span className="text-[#fbcfe8] font-black uppercase text-[12px] tracking-[0.6em] block">Pureza y Luz</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-black">Look Platinum 2026</h2>
                            <p className="text-gray-400 font-light text-lg leading-relaxed">
                                Redescubre tu belleza bajo una nueva luz. Nuestra colección Platinum está diseñada para aquellas que buscan la sofisticación minimalista.
                            </p>
                            <div className="pt-4">
                                <button 
                                    onClick={() => onNavigate('products', 'skincare')}
                                    className="bg-black text-white font-black py-4 px-12 rounded-full shadow-lg transition-all transform hover:scale-105 uppercase tracking-widest text-[10px] hover:bg-[#fbcfe8] hover:text-black"
                                >
                                    EXPLORAR CATÁLOGO 1
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BANNERS SECUNDARIOS - ELIMINADO PERFUME/CHANEL */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-sm" onClick={() => onNavigate('products', 'makeup')}>
                        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Maquillaje" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fbcfe8] mb-3">Maquillaje</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Color y Precisión</h3>
                            <button className="bg-white text-black font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest w-fit hover:bg-[#fbcfe8] transition-all">Ver Colección</button>
                        </div>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-sm" onClick={() => onNavigate('products', 'skincare')}>
                        <img src="https://images.unsplash.com/photo-1556228852-6d45a7d8a341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cuidado Facial" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fbcfe8] mb-3">Cuidado de la Piel</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Ritual Novage+</h3>
                            <button className="bg-white text-black font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest w-fit hover:bg-[#fbcfe8] transition-all">Ver Tratamientos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
