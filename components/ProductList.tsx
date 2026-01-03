import React from 'react';
import type { View, Product } from './types';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import type { Currency } from './currency';

const ProductList: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    onProductSelect: (product: Product) => void;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    currency: Currency;
    onQuickView: (product: Product) => void;
}> = ({ onNavigate, onProductSelect, onAddToCart, onQuickAddToCart, currency, onQuickView }) => {
    
    const novedades = allProducts.filter(p => p.tag === 'NOVEDAD' || p.tag === 'SET').slice(0, 5);
    const ofertas = allProducts.filter(p => p.tag === 'OFERTA').slice(0, 5);

    return (
        <div className="space-y-16 pb-20 bg-white">
            
            {/* HERO - IMAGEN ARTÍSTICA "LUZ Y PUREZA" */}
            <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1619014161955-46f890666014?q=80&w=2000&auto=format&fit=crop)' }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-4">
                    <div className="max-w-4xl">
                        <span className="text-[#f472b6] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-4 block">Catálogo 1 - 2026 | Estilismo Platinum</span>
                        <h1 className="text-white text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">Luz y Pureza</h1>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <button 
                                onClick={() => onNavigate('products', 'all')}
                                className="bg-[#f472b6] text-black font-black py-5 px-14 rounded-full uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-2xl"
                            >
                                Descubrir Colección
                            </button>
                            <button 
                                onClick={() => onNavigate('catalog')}
                                className="bg-transparent border-2 border-white text-white font-black py-5 px-14 rounded-full uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all"
                            >
                                Ver Catálogo Digital
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN NOVEDADES / GALERÍA */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-black uppercase tracking-tight">Favoritos de Campaña</h2>
                    <button onClick={() => onNavigate('products', 'all')} className="text-[#f472b6] font-bold text-[10px] uppercase tracking-widest hover:underline">Explorar todo</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {novedades.map(product => (
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

            {/* TIMELINE DE BELLEZA - ESTILO PLATINUM */}
            <div className="w-full bg-[#fdf2f8] py-24 border-y border-pink-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Tu Ritual Platinum</h2>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Consigue una piel radiante con nuestro paso a paso guiado por expertos</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", name: "Limpiar", icon: "✨", desc: "Elimina impurezas suavemente" },
                            { step: "02", name: "Tratar", icon: "👁️", desc: "Contorno de ojos específico" },
                            { step: "03", name: "Potenciar", icon: "💧", desc: "Serum activo concentrado" },
                            { step: "04", name: "Hidratar", icon: "🧴", desc: "Sellado y protección total" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-transparent hover:border-[#f472b6] transition-all duration-500 flex flex-col items-center text-center group">
                                <span className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                                <span className="bg-black text-[#f472b6] text-[10px] font-black px-4 py-1 rounded-full mb-3">{item.step}</span>
                                <h4 className="font-black uppercase tracking-tight text-lg mb-2">{item.name}</h4>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                         <button 
                            onClick={() => onNavigate('products', 'skincare')}
                            className="text-black font-black text-[11px] uppercase tracking-widest border-b-2 border-black pb-2 hover:text-[#f472b6] hover:border-[#f472b6] transition-colors"
                        >
                            Ver productos de Skincare
                        </button>
                    </div>
                </div>
            </div>

            {/* SECCIÓN OFERTAS IMPERDIBLES */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-black uppercase tracking-tight">Ofertas Imperdibles</h2>
                    <button onClick={() => onNavigate('ofertas')} className="text-[#f472b6] font-bold text-[10px] uppercase tracking-widest hover:underline">Ver todas</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {ofertas.map(product => (
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

            {/* CTA SECCIÓN IA */}
            <div className="container mx-auto px-4">
                <div className="bg-black rounded-[50px] p-12 md:p-24 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f472b6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">Vella IA: Tu experto personal</h2>
                            <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs leading-relaxed">¿No sabes qué tono elegir? ¿Necesitas una rutina para tu tipo de piel? Nuestra Inteligencia Artificial te recomienda lo mejor.</p>
                        </div>
                        <button 
                            onClick={() => onNavigate('ia')}
                            className="bg-white text-black font-black py-6 px-16 rounded-full uppercase tracking-widest text-[11px] hover:bg-[#f472b6] transition-all whitespace-nowrap"
                        >
                            Consultar a Vella IA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;