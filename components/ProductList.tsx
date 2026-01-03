
import React, { useState } from 'react';
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
    
    const [isWrappingModalOpen, setIsWrappingModalOpen] = useState(false);
    const destacados = allProducts.slice(0, 12);

    const packagingStyles = [
        {
            title: "Caja Premium Mint",
            desc: "Nuestra icónica caja rígida en verde menta sueco con detalles en oro.",
            img: "https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Gift_Boxes_Packaging&inputFormat=jpg"
        },
        {
            title: "Bolsa Boutique Vella",
            desc: "Elegancia minimalista con papel de seda aromático y lazo de satén.",
            img: "https://images.unsplash.com/photo-1549465220-1d8c9d9c6703?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Envoltorio Ecológico",
            desc: "Papel certificado FSC con tintas vegetales, respetando el planeta.",
            img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="space-y-0 pb-20 bg-white">
            
            {/* BANNER DESTACADO PRINCIPAL */}
            <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-black">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-[20s] hover:scale-110"
                    style={{ backgroundImage: 'url(https://media-cdn.oriflame.com/digitalPromotionsMedia/images/banner-media/ES/20899847/20866148.jpg)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                
                <div className="container mx-auto px-6 md:px-24 relative z-10 text-white">
                    <div className="max-w-2xl animate-fade-in-up">
                        <span className="text-[#FBCFE8] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block animate-pulse">Lanzamiento Hazlo 2026</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9] drop-shadow-2xl">Divine<br/>Dark Velvet.</h2>
                        <p className="text-lg md:text-xl opacity-95 mb-10 leading-relaxed font-medium max-w-lg">Siente el misterio de la noche con notas de violeta negra y sándalo. Una esencia diseñada para la mujer inolvidable.</p>
                        <button 
                            onClick={() => onNavigate('products', 'perfume')}
                            className="bg-white text-black font-black py-5 px-14 rounded-full uppercase tracking-widest text-[10px] hover:bg-[#FBCFE8] transition-all transform hover:scale-105 shadow-2xl"
                        >
                            Comprar Ahora
                        </button>
                    </div>
                </div>
            </div>

            {/* SECCIÓN ENVOLTORIOS */}
            <div className="bg-[#FDF2F8] py-32 overflow-hidden border-y border-pink-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-[#FBCFE8] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Experiencia de Regalo</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8 leading-tight">El Arte sueco de<br/>envolver.</h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">Convierte cada producto en un momento inolvidable. En Vella Estilismo cuidamos cada detalle para que la primera impresión sea mágica.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                        {packagingStyles.map((style, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative h-[450px] rounded-[40px] overflow-hidden mb-8 border-[10px] border-white shadow-xl transition-transform duration-500 group-hover:-translate-y-4">
                                    <img src={style.img} alt={style.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tighter text-black mb-3">{style.title}</h4>
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed">{style.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button 
                            onClick={() => setIsWrappingModalOpen(true)}
                            className="group flex items-center gap-4 bg-black text-white font-black py-6 px-16 rounded-full uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-all shadow-2xl"
                        >
                            Leer más sobre Packaging
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* GALERÍA DE COSMÉTICOS */}
            <div className="container mx-auto px-4 py-32">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-black mb-6">Galería de Cosméticos</h2>
                    <p className="text-xs font-black text-[#FBCFE8] uppercase tracking-[0.5em] mb-8">Catálogo Hazlo 2026</p>
                    <div className="h-1.5 w-28 bg-[#FBCFE8] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {destacados.map(product => (
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

            {/* MODAL DETALLE ENVOLTORIOS */}
            {isWrappingModalOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
                    <div className="bg-white max-w-5xl w-full rounded-[50px] overflow-hidden shadow-2xl relative">
                        <button onClick={() => setIsWrappingModalOpen(false)} className="absolute top-10 right-10 text-black hover:scale-125 transition-transform z-10 p-2">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="grid grid-cols-1 lg:grid-cols-5 h-full min-h-[600px]">
                            <div className="lg:col-span-2 bg-[#FDF2F8] p-4 flex items-center justify-center">
                                <img src="https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Gift_Boxes_Packaging&inputFormat=jpg" className="h-[90%] w-full object-cover rounded-[40px] shadow-2xl" alt="Packaging Oriflame Detalle" />
                            </div>
                            <div className="lg:col-span-3 p-12 lg:p-20 flex flex-col justify-center">
                                <span className="text-[#FBCFE8] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Sostenibilidad & Estilo</span>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.9]">Compromiso<br/>Calidad.</h3>
                                <p className="text-gray-600 mb-10 text-lg leading-relaxed font-medium">Nuestros empaques reflejan el respeto por la naturaleza. Utilizamos papel con certificación **FSC** y tintas a base de agua.</p>
                                <button onClick={() => setIsWrappingModalOpen(false)} className="w-fit bg-black text-white font-black py-5 px-12 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#FBCFE8] hover:text-black transition-all shadow-xl">Entendido</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default ProductList;
