
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
        <div className="space-y-20 pb-20 bg-white">
            
            {/* HERO PRINCIPAL CON LOOK PLATINUM */}
            <HeroBanner onNavigate={onNavigate} />

            {/* SECCIÓN: RITUAL DE ESTILISMO FACIAL (BEAUTY TIMELINE) */}
            <div className="w-full bg-white py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#f9a8d4] text-[13px] font-black uppercase tracking-[0.6em] mb-4 block">Timeline de Estilismo</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">Tu Ritual Platinum Paso a Paso</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {/* Line connector for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
                        
                        {[
                            { step: "01", name: "Limpiar", icon: "✨" },
                            { step: "02", name: "Tratar", icon: "👁️" },
                            { step: "03", name: "Potenciar", icon: "💧" },
                            { step: "04", name: "Hidratar", icon: "🧴" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-4xl mb-4">{item.icon}</span>
                                <span className="bg-[#f9a8d4] text-black text-[10px] font-black px-3 py-1 rounded-full mb-2">{item.step}</span>
                                <h4 className="font-bold text-lg uppercase tracking-tight">{item.name}</h4>
                            </div>
                        ))}
                    </div>

                    {/* Banner Look Final - FOTO SOLICITADA CON FONDO ROSA AJUSTADO */}
                    <div className="mt-16 flex flex-col md:flex-row items-center gap-12 bg-[#fce7f3]/60 p-8 md:p-12 rounded-[50px] border border-pink-100">
                        <div className="w-full md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1619014161955-46f890666014?q=80&w=2000&auto=format&fit=crop" 
                                className="w-full h-auto rounded-[40px] shadow-2xl" 
                                alt="El Look Platinum 2026" 
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">El Resultado:<br/>Luz Pura</h3>
                            <p className="text-gray-600 text-lg font-light leading-relaxed italic">
                                "La belleza no es solo lo que aplicas, es cómo haces brillar tu propia esencia bajo la luz adecuada."
                            </p>
                            <button 
                                onClick={() => onNavigate('products', 'skincare')}
                                className="bg-black text-white font-black py-5 px-14 rounded-full shadow-xl transition-all transform hover:scale-105 uppercase tracking-widest text-[11px] hover:bg-[#f9a8d4] hover:text-black"
                            >
                                COMPRAR RITUAL COMPLETO
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN CABELLO (DUOLOGI) */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-5">
                    <div className="flex flex-col">
                        <span className="text-[#f9a8d4] text-[11px] font-black uppercase tracking-[0.3em] mb-1">Cuidado Capilar de Vanguardia</span>
                        <h3 className="text-3xl font-black text-black uppercase tracking-tighter">Estilismo Duologi</h3>
                    </div>
                    <button onClick={() => onNavigate('products', 'hair')} className="text-black font-bold uppercase text-[10px] tracking-widest hover:text-[#f9a8d4] transition-colors border-b-2 border-black pb-1">Ver Todo</button>
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

            {/* SECCIÓN NOVEDADES CATÁLOGO 1 */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Favoritos de Campaña</h3>
                    <div className="w-20 h-1 bg-[#f9a8d4] mx-auto"></div>
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

            {/* DOBLE BANNER INFERIOR - FOCO EN HOMBRE Y HIGIENE */}
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative h-96 rounded-[40px] overflow-hidden group cursor-pointer shadow-lg" onClick={() => onNavigate('products', 'men')}>
                        <img src="https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866155.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Fragancias Hombre" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#f9a8d4] mb-3">Esencia Masculina</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Eclat Homme 2026</h3>
                            <button className="bg-white text-black font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest w-fit hover:bg-[#f9a8d4] transition-all">Ver Colección</button>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-[40px] overflow-hidden group cursor-pointer shadow-lg" onClick={() => onNavigate('products', 'personal-care')}>
                        <img src="https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20900001/20866153.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Activelle Protection" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#f9a8d4] mb-3">Protección Activa</span>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Cuidado Personal</h3>
                            <button className="bg-white text-black font-black py-3 px-8 rounded-full text-[10px] uppercase tracking-widest w-fit hover:bg-[#f9a8d4] transition-all">Ver Ofertas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
