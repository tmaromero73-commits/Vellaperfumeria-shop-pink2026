
import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product, View } from './types';
import type { Currency } from './currency';
import { allProducts } from './products';

interface BannerOffer {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
    actionText: string;
    linkProductIds?: number[];
    isExternal?: boolean;
    linkUrl?: string;
    colSpan?: string;
}

const banners: BannerOffer[] = [
    {
        id: 1,
        title: "Novage+ Pro-Beauty",
        subtitle: "Lujo y cuidado premium para 2026",
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg",
        actionText: "VER OFERTAS",
        linkProductIds: [41070, 44098],
        colSpan: "md:col-span-2"
    },
    {
        id: 2,
        title: "Elegancia Giordani Gold",
        subtitle: "Aroma refinado Mister Giordani",
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=bda12c88-dee7-425a-9a32-8414adcf7d9f&name=Promo_split_single_2&inputFormat=jpg",
        actionText: "COMPRAR",
        linkProductIds: [47502],
    }
];

const OfertasPage: React.FC<{
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ onNavigate, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {

    const promoProducts = allProducts.filter(p => 
        p.tag === 'OFERTA' || p.tag === 'NOVEDAD' || (p.regularPrice && p.price < p.regularPrice)
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
            <div className="text-center mb-12">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#FDF2F8] text-[#e91e63] text-[10px] font-bold tracking-[0.2em] mb-4 border border-[#FBCFE8] uppercase">
                    Catálogo Hazlo 2026
                </span>
                <h1 className="text-4xl font-extrabold text-black tracking-tight font-serif">Ofertas Exclusivas</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                    Selección premium de belleza y bienestar para comenzar el año con tu mejor esencia.
                </p>
            </div>

            {/* Banners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {banners.map((banner) => (
                    <div 
                        key={banner.id} 
                        className={`relative group overflow-hidden rounded-2xl shadow-sm cursor-pointer ${banner.colSpan || ''}`}
                        onClick={() => onNavigate('products', 'all')}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300"></div>
                        <img 
                            src={banner.imageUrl} 
                            alt={banner.title} 
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full text-white">
                            <h3 className="text-2xl font-bold mb-1 leading-tight">{banner.title}</h3>
                            <p className="text-gray-200 text-sm mb-4 opacity-90">{banner.subtitle}</p>
                            <button className="bg-black text-white text-[10px] font-bold py-2 px-6 rounded-full uppercase tracking-widest hover:bg-[#FBCFE8] hover:text-black transition-colors">
                                {banner.actionText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product List */}
            <div id="promo-products" className="scroll-mt-24">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-bold text-black">Destacados Hazlo 2026</h2>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{promoProducts.length} productos</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {promoProducts.map(product => (
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
        </div>
    );
};

export default OfertasPage;
