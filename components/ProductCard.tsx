
import React, { useRef, useState } from 'react';
import { type Currency, formatCurrency } from './currency';
import type { Product } from './types';

const HeartIcon = ({ isFilled }: { isFilled: boolean }) => (
    <svg className={`h-6 w-6 transition-colors ${isFilled ? 'text-black fill-current' : 'text-gray-900 fill-transparent hover:text-gray-600'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-4 h-4 ${className}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const QuickBuyOverlayIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.434 9H4.5a1.5 1.5 0 0 0-1.486 1.703l1.227 9A1.5 1.5 0 0 0 5.728 21h12.254a1.5 1.5 0 0 0 1.486-1.297l1.227-9A1.5 1.5 0 0 0 19.21 9h-1.933c-.087-2.548-.848-4.078-1.933-4.96C14.208 3.118-12.826 3 11.855 3c-.975 0-2.355.126-3.49 1.051C7.282 4.936 6.521 6.464 6.434 9m1 0c.086-2.329.778-3.533 1.564-4.174.858-.7 1.942-.826 2.857-.826.917 0 2 .12 2.857.817.785.637 1.477 1.84 1.563 4.183zm8.868 1 .053 1.448a.5.5 0 0 0 1-.018c0-.528-.013-.987-.037-1.43h1.891a.5.5 0 0 1 .495.568l-1.227 9a.5.5 0 0 1-.495.432H5.728a.5.5 0 0 1-.496-.432l-1.227-9A.5.5 0 0 1 4.5 10h1.905q-.001.372.01.756.009.333.01.674a.5.5 0 1 0 1 0c0-.285-.006-.535-.012-.766-.005-.236-.01-.452-.008-.664z"></path>
    </svg>
);

export const ProductCard: React.FC<{
    product: Product;
    currency: Currency;
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
}> = ({ product, currency, onAddToCart, onQuickAddToCart, onProductSelect, onQuickView }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const isDiscounted = product.regularPrice && product.regularPrice > product.price;

    const handleToggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsWishlisted(prev => !prev);
    };

    const handleQuickBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onQuickAddToCart(product, btnRef.current, null);
    };

    const renderStars = () => {
        const fullStars = Math.round(product.rating || 0);
        return (
            <div className="flex items-center gap-0.5 text-black">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={i < fullStars ? "text-black" : "text-gray-300"} />
                ))}
            </div>
        );
    };

    return (
        <div 
            className="group flex flex-col h-full bg-white cursor-pointer"
            onClick={() => onProductSelect(product)}
        >
            <div className="relative aspect-square overflow-hidden mb-3">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-2 mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                />

                <div className="absolute top-0 left-0 p-2 z-10">
                    {product.tag && (
                        <span className="bg-[#FBCFE8] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                            {product.tag}
                        </span>
                    )}
                </div>

                <div className="absolute top-2 right-2 z-20">
                    <button 
                        onClick={handleToggleWishlist}
                        className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors border border-gray-100"
                    >
                        <HeartIcon isFilled={isWishlisted} />
                    </button>
                </div>

                <div className="absolute bottom-2 right-2 z-20">
                    <button
                        ref={btnRef}
                        onClick={handleQuickBuy}
                        className="bg-black text-white rounded-full p-2.5 shadow-md hover:bg-[#FBCFE8] hover:text-black transition-colors"
                    >
                        <QuickBuyOverlayIcon />
                    </button>
                </div>
            </div>

            <div className="flex flex-col flex-grow px-1">
                <div className="flex items-center gap-1 mb-1">
                    {renderStars()}
                </div>

                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                    {product.brand}
                </span>

                <h3 className="text-sm font-bold text-black leading-snug mb-2 line-clamp-2">
                    {product.name}
                </h3>

                <div className="mt-auto flex flex-col">
                    <span className={`text-lg font-black ${isDiscounted ? 'text-[#e91e63]' : 'text-black'}`}>
                        {formatCurrency(product.price, currency)}
                    </span>
                    {isDiscounted && (
                        <span className="text-sm text-gray-400 line-through font-medium">
                            {formatCurrency(product.regularPrice!, currency)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
