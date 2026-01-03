import React from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const CartIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const MenuLink: React.FC<{ onClick?: () => void, children: React.ReactNode, className?: string }> = ({ onClick, children, className = "" }) => (
    <button 
        onClick={onClick} 
        className={`text-[11px] font-black text-white hover:text-[#f472b6] transition-all duration-300 uppercase tracking-[0.2em] whitespace-nowrap px-8 h-12 flex items-center border-b-2 border-transparent hover:border-[#f472b6] ${className}`}
    >
        {children}
    </button>
);

interface HeaderProps {
    onNavigate: (view: View, payload?: any) => void;
    currency: Currency;
    onCurrencyChange: (currency: Currency) => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onCartClick }) => {
    return (
        <header className="sticky top-0 z-50 flex flex-col w-full bg-white shadow-md">
            {/* 1. BARRA DE PROMO (Negra) */}
            <div className="bg-black py-1.5 text-[#f472b6] text-[8px] font-bold text-center uppercase tracking-[0.3em] w-full">
                Exclusivo Catálogo 1 - 2026 | Envío gratuito desde 35€
            </div>

            {/* 2. LOGOTIPO (Fondo Blanco) */}
            <div className="bg-white py-2 w-full border-b border-gray-50">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex-1 hidden md:block"></div>
                    
                    <div className="flex-shrink-0">
                        <button onClick={() => onNavigate('home')} className="hover:scale-105 transition-transform duration-500 block">
                            <img 
                                src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                                alt="Vellaperfumeria" 
                                className="h-20 md:h-28 object-contain" 
                            />
                        </button>
                    </div>

                    <div className="flex-1 flex justify-end items-center gap-6">
                        <button onClick={onCartClick} className="relative p-2 text-black hover:text-[#f472b6] transition-colors group">
                            <CartIcon />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#f472b6] text-black text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. MENÚ (Negro, Ancho Completo) */}
            <div className="bg-black w-full overflow-visible">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-center h-12">
                        <MenuLink onClick={() => onNavigate('home')}>Inicio</MenuLink>
                        
                        {/* DROPDOWN OFERTAS CON FONDO NEGRO */}
                        <div className="group relative h-full">
                            <MenuLink className="flex items-center gap-2 h-full">
                                Ofertas Exclusivas <ChevronDownIcon />
                            </MenuLink>
                            
                            {/* CONTENIDO DEL DROPDOWN - FONDO NEGRO VISIBLE */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-2xl bg-black text-white shadow-[0_30px_60px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-10 grid grid-cols-2 gap-12 border-t border-[#f472b6]/30 z-50">
                                
                                {/* Sección OnColor */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                                        <div className="w-2 h-2 bg-[#f472b6] rounded-full animate-pulse"></div>
                                        <h4 className="font-black text-[12px] uppercase tracking-widest text-[#f472b6]">Ofertas OnColor</h4>
                                    </div>
                                    <ul className="text-[10px] space-y-4 text-gray-400 font-bold tracking-widest">
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-[#f472b6] transition-colors">Labiales Creamy -50%</button></li>
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-[#f472b6] transition-colors">Máscaras de Pestañas OnColor</button></li>
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-[#f472b6] transition-colors">Esmaltes Vibrantes</button></li>
                                    </ul>
                                </div>

                                {/* Sección De-M */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <h4 className="font-black text-[12px] uppercase tracking-widest text-[#f472b6]">Ofertas De-M</h4>
                                    </div>
                                    <ul className="text-[10px] space-y-4 text-gray-400 font-bold tracking-widest">
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-[#f472b6] transition-colors">Serums Regeneradores De-M</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-[#f472b6] transition-colors">Cuidado Facial Avanzado</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-[#f472b6] transition-colors">Novedades Campaña 1</button></li>
                                    </ul>
                                </div>

                                <div className="col-span-2 pt-6 border-t border-gray-800 text-center">
                                    <button onClick={() => onNavigate('ofertas')} className="text-[10px] text-[#f472b6] font-black uppercase tracking-[0.3em] hover:underline">
                                        Ver todas las ofertas del catálogo digital
                                    </button>
                                </div>
                            </div>
                        </div>

                        <MenuLink onClick={() => onNavigate('catalog')}>Catálogo</MenuLink>
                        <MenuLink onClick={() => onNavigate('ofertas')}>Mejores Ofertas</MenuLink>
                        <MenuLink onClick={() => onNavigate('ia')} className="text-[#f472b6] border border-[#f472b6] rounded-full h-8 my-auto px-6 ml-4">Vella IA</MenuLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;