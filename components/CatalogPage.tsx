
import React, { useState, useRef } from 'react';
import { allProducts } from './products';
import { ProductCard } from './ProductCard';
import type { Product } from './types';
import type { Currency } from './currency';

// URL del Catálogo Actualizado
const INTERACTIVE_CATALOG_URL = 'https://es-catalogue.oriflame.com/oriflame/es/2025017-brp?HideStandardUI=true&Page=1';

interface CatalogPageProps {
    onAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onQuickAddToCart: (product: Product, buttonElement: HTMLButtonElement | null, selectedVariant: Record<string, string> | null) => void;
    onProductSelect: (product: Product) => void;
    onQuickView: (product: Product) => void;
    currency: Currency;
}

const CatalogPage: React.FC<CatalogPageProps> = ({ onAddToCart, onQuickAddToCart, onProductSelect, onQuickView, currency }) => {
    const [quickAddCode, setQuickAddCode] = useState('');
    const [addStatus, setAddStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleQuickAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!quickAddCode.trim()) return;

        const code = parseInt(quickAddCode.trim());
        const product = allProducts.find(p => p.id === code);

        if (product) {
            onAddToCart(product, buttonRef.current, null);
            setAddStatus('success');
            setStatusMessage(`¡${product.name} añadido!`);
            setQuickAddCode('');
            setTimeout(() => setAddStatus('idle'), 3000);
        } else {
            setAddStatus('error');
            setStatusMessage('Código no disponible. Intenta otro.');
            setTimeout(() => setAddStatus('idle'), 3000);
        }
    };

    return (
        <div className="w-full px-2 sm:px-4 py-6 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-6 h-full">
                
                {/* Catalog Viewer */}
                <div className="flex-grow flex flex-col min-w-0">
                    <div className="mb-4 flex items-center gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
                        <img 
                            src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                            alt="Logo de Vellaperfumeria" 
                            className="h-20 w-auto object-contain" 
                        />
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight font-serif">Catálogo Hazlo 2026</h1>
                            <p className="text-sm text-gray-600 mt-1">
                                Explora la nueva temporada 2026 y descubre las mejores ofertas.
                            </p>
                        </div>
                    </div>
                    
                    <div 
                        className="relative w-full flex-grow bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200" 
                        style={{ minHeight: '80vh' }} 
                    >
                        <iframe
                            src={INTERACTIVE_CATALOG_URL}
                            title="Catálogo Digital Vellaperfumeria"
                            className="w-full h-full absolute inset-0"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-80 lg:w-96 flex-shrink-0 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 sticky top-24">
                        <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Pedido Rápido
                        </h2>
                        
                        <div className="bg-[#FBCFE8]/20 p-4 rounded-md mb-6 border border-[#FBCFE8]/40">
                            <p className="text-sm font-bold text-gray-800 mb-2">Compra desde el catálogo:</p>
                            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                                <li>Busca el <strong>Código</strong> en las páginas.</li>
                                <li>Ingrésalo aquí.</li>
                                <li>Añade a tu cesta al instante.</li>
                            </ol>
                        </div>

                        <form onSubmit={handleQuickAdd} className="space-y-3">
                            <input
                                type="number"
                                placeholder="Código (ej: 48082)"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg focus:ring-2 focus:ring-[#FBCFE8] outline-none"
                                value={quickAddCode}
                                onChange={(e) => setQuickAddCode(e.target.value)}
                            />
                            <button
                                ref={buttonRef}
                                type="submit"
                                disabled={!quickAddCode}
                                className="w-full bg-black text-white font-bold py-3 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-300"
                            >
                                Añadir a la cesta
                            </button>
                        </form>

                        {addStatus !== 'idle' && (
                            <div className={`mt-4 p-3 rounded-md text-sm font-medium ${
                                addStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                            }`}>
                                {statusMessage}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;
