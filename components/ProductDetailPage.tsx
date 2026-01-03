
import React, { useRef, useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import { type Currency, formatCurrency } from './currency';
import { allProducts } from './products';
import ImageLightbox from './ImageLightbox';

interface ProductDetailPageProps {
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, currency, onAddToCart, onProductSelect, onQuickView }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:grid md:grid-cols-5 md:gap-12 p-4 md:p-12 border border-gray-100">
                <div className="md:col-span-3">
                    <div 
                        className="relative group cursor-pointer p-4 flex justify-center items-center bg-white border border-gray-50 rounded-xl"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="max-h-[500px] object-contain transition-all duration-300 mix-blend-multiply"
                        />
                    </div>
                </div>

                <div className="p-4 flex flex-col md:col-span-2">
                    <span className="text-xs text-gray-400 uppercase tracking-[0.3em] font-black mb-2">{product.brand}</span>
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-black">{product.name}</h1>
                    
                    <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1 mb-6">
                        <p className={`text-4xl font-black ${isDiscounted ? 'text-[#e91e63]' : 'text-black'}`}>{formatCurrency(product.price, currency)}</p>
                        {isDiscounted && (
                            <p className="text-xl text-gray-400 line-through font-bold">{formatCurrency(product.regularPrice!, currency)}</p>
                        )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
                    
                    <button
                        ref={btnRef}
                        onClick={() => onAddToCart(product, btnRef.current, null)}
                        className="w-full bg-black text-white font-black py-5 px-8 rounded-full shadow-xl transition-all hover:bg-[#FBCFE8] hover:text-black uppercase tracking-[0.2em] text-[11px]"
                    >
                        Añadir a mi cesta
                    </button>
                </div>
            </div>

            {isLightboxOpen && (
                <ImageLightbox
                    imageUrl={product.imageUrl}
                    altText={product.name}
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
        </div>
    );
};

export default ProductDetailPage;
