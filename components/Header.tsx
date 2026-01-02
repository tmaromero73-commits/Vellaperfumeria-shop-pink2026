
import React from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const CartIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const MenuLink: React.FC<{ onClick?: () => void, children: React.ReactNode, className?: string }> = ({ onClick, children, className = "" }) => (
    <button onClick={onClick} className={`text-[10px] font-bold text-white hover:text-[#f9a8d4] transition-colors duration-200 uppercase tracking-widest whitespace-nowrap px-4 ${className}`}>
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
    const handleHomeClick = () => {
        window.location.href = 'https://vellaperfumeria.com';
    };

    return (
        <header className="sticky top-0 z-40 flex flex-col w-full shadow-sm bg-white">
            {/* Promo Bar - Rosa un poco más profundo */}
            <div className="bg-[#fce7f3] py-2.5 text-black text-[9px] font-bold text-center uppercase tracking-[0.25em] border-b border-pink-200 w-full">
                Catálogo 1 - 2026 | Envío GRATIS a partir de 35€
            </div>

            {/* Main Header Area (Logo & Cart) */}
            <div className="bg-white py-4 w-full border-b border-gray-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex-1"></div>
                    
                    <div className="flex-shrink-0">
                        <button onClick={handleHomeClick} className="hover:opacity-85 transition-opacity">
                            <img src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" alt="Vellaperfumeria" className="h-10 md:h-16" />
                        </button>
                    </div>

                    <div className="flex-1 flex justify-end items-center gap-4">
                        <button onClick={onCartClick} className="relative p-2 text-black hover:text-[#f9a8d4] transition-colors">
                            <CartIcon />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 bg-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-Width Black Nav Bar */}
            <div className="bg-black w-full overflow-x-auto no-scrollbar">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-start md:justify-center gap-2 md:gap-8 h-12 min-w-max">
                        <MenuLink onClick={handleHomeClick}>Inicio</MenuLink>
                        
                        {/* Dropdown Tienda */}
                        <div className="group h-full flex items-center relative">
                            <MenuLink className="flex items-center gap-1.5 h-full">
                                Tienda <ChevronDownIcon />
                            </MenuLink>
                            
                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 w-[95vw] md:w-[900px] bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-10 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-800 z-50">
                                <div className="space-y-5 text-left">
                                    <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#f9a8d4] border-b border-gray-800 pb-3">Maquillaje</h4>
                                    <ul className="text-[10px] space-y-3 text-gray-400">
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-white transition-colors">Rostro: Bases e Iluminadores</button></li>
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-white transition-colors">Ojos: Sombras y Máscaras</button></li>
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="hover:text-white transition-colors">Labios: Colour Stylist</button></li>
                                    </ul>
                                </div>
                                <div className="space-y-5 text-left">
                                    <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#f9a8d4] border-b border-gray-800 pb-3">Cuidado Facial</h4>
                                    <ul className="text-[10px] space-y-3 text-gray-400">
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Ritual Novage+ Pro</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Limpieza Profunda</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="hover:text-white transition-colors">Tratamientos Específicos</button></li>
                                    </ul>
                                </div>
                                <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
                                    <div className="relative overflow-hidden rounded-xl group/card cursor-pointer" onClick={() => onNavigate('catalog')}>
                                        <img src="https://media-cdn.oriflame.com/contentImage?externalMediaId=eb8edbeb-1ff0-427f-878c-8b23062b1aa6&name=Promo_split_single_1&inputFormat=jpg" className="w-full h-32 object-cover opacity-70 group-hover/card:scale-110 transition-transform duration-500" alt="Catálogo" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <span className="text-[9px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2 bg-black/40">Ver Catálogo 1</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900/40 p-5 rounded-xl border border-gray-800 flex flex-col justify-center text-left">
                                        <h5 className="font-bold text-[10px] uppercase text-[#f9a8d4] mb-2 tracking-widest">Novedad IA</h5>
                                        <p className="text-[9px] text-gray-500 leading-relaxed mb-4">Pruébate el maquillaje del Catálogo 1 con nuestro espejo virtual.</p>
                                        <button onClick={() => onNavigate('ia')} className="text-[10px] font-black underline text-white hover:text-[#f9a8d4]">PROBAR VIRTUALMENTE</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MenuLink onClick={() => onNavigate('catalog')}>Catálogo</MenuLink>
                        <MenuLink onClick={() => onNavigate('ofertas')}>Ofertas</MenuLink>
                        
                        {/* Botón IA Vella IA transparente con contorno rosa claro */}
                        <button 
                            onClick={() => onNavigate('ia')} 
                            className="text-[9px] font-bold uppercase tracking-widest text-white border border-[#f9a8d4] px-6 py-2.5 rounded-full hover:bg-[#f9a8d4] hover:text-black transition-all duration-300 ml-4 whitespace-nowrap"
                        >
                            Vella IA
                        </button>
                    </nav>
                </div>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    scroll-behavior: smooth;
                }
            `}</style>
        </header>
    );
};

export default Header;
