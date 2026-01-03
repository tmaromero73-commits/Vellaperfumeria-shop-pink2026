
import React from 'react';
import type { View } from './types';
import type { Currency } from './currency';

const CartIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const MenuLink: React.FC<{ onClick?: () => void, children: React.ReactNode, className?: string }> = ({ onClick, children, className = "" }) => (
    <button 
        onClick={onClick} 
        className={`text-[11px] font-black text-white hover:text-[#FBCFE8] transition-all duration-300 uppercase tracking-[0.2em] whitespace-nowrap px-6 h-full flex items-center relative group/link ${className}`}
    >
        {children}
        <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#FBCFE8] transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
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
        <header className="relative z-[100] w-full flex flex-col bg-white">
            {/* 1. BARRA DE PROMO SUPERIOR */}
            <div className="bg-[#FBCFE8] py-2 text-black text-[10px] font-black text-center uppercase tracking-[0.3em] w-full">
                ENVÍO GRATIS DESDE 35€ • CATÁLOGO HAZLO 2026
            </div>

            {/* 2. BARRA DE LOGOTIPO */}
            <div className="bg-white py-4 w-full border-b border-gray-100 flex justify-between items-center px-6 md:px-12">
                <div className="w-24 hidden md:block"></div>
                
                <button onClick={() => onNavigate('home')} className="hover:scale-105 transition-transform duration-500">
                    <img 
                        src="https://i0.wp.com/vellaperfumeria.com/wp-content/uploads/2025/06/1000003724-removebg-preview.png" 
                        alt="Vellaperfumeria" 
                        className="h-14 md:h-16 object-contain" 
                    />
                </button>
                
                <div className="flex items-center gap-4">
                    <button onClick={onCartClick} className="relative p-2 text-black hover:text-[#FBCFE8] transition-colors group">
                        <CartIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-[#FBCFE8] text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* 3. NAVEGACIÓN NEGRA DE ANCHURA COMPLETA */}
            <nav className="bg-black w-full h-14 flex justify-center shadow-lg sticky top-0">
                <div className="flex h-full items-center max-w-screen-xl">
                    <MenuLink onClick={() => onNavigate('home')}>Inicio</MenuLink>
                    
                    {/* MEGA MENU TRIGGER */}
                    <div className="group h-full">
                        <MenuLink className="flex items-center gap-2">
                            Colecciones <ChevronDownIcon />
                        </MenuLink>
                        
                        {/* MEGA MENU DESPLEGABLE (FONDO NEGRO COMPLETO) */}
                        <div className="fixed top-[138px] left-0 right-0 bg-black border-t border-[#FBCFE8]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl z-[150] w-full">
                            <div className="max-w-screen-xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
                                <div className="space-y-4">
                                    <h4 className="text-[#FBCFE8] font-black text-xs uppercase tracking-widest border-b border-[#FBCFE8]/30 pb-2">Maquillaje</h4>
                                    <ul className="space-y-2">
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Labios OnColor</button></li>
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Bases THE ONE</button></li>
                                        <li><button onClick={() => onNavigate('products', 'makeup')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Ojos Giordani Gold</button></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[#FBCFE8] font-black text-xs uppercase tracking-widest border-b border-[#FBCFE8]/30 pb-2">Cuidado Facial</h4>
                                    <ul className="space-y-2">
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">NovAge+ Tratamiento</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Royal Velvet</button></li>
                                        <li><button onClick={() => onNavigate('products', 'skincare')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Optimals Serum</button></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[#FBCFE8] font-black text-xs uppercase tracking-widest border-b border-[#FBCFE8]/30 pb-2">Fragancias</h4>
                                    <ul className="space-y-2">
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Perfumes Mujer</button></li>
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Fragancias Hombre</button></li>
                                        <li><button onClick={() => onNavigate('products', 'perfume')} className="text-gray-400 hover:text-white text-[10px] font-bold uppercase transition-colors block py-1">Sets de Regalo</button></li>
                                    </ul>
                                </div>
                                <div className="bg-[#111] p-6 rounded-xl border border-[#FBCFE8]/10 flex flex-col justify-center text-center">
                                    <p className="text-[#FBCFE8] font-black text-[9px] uppercase mb-2 tracking-[0.3em]">Novedad 2026</p>
                                    <h5 className="text-white text-lg font-black uppercase mb-4 leading-tight font-serif italic">Hazlo Realidad</h5>
                                    <button onClick={() => onNavigate('products', 'all')} className="bg-[#FBCFE8] text-black font-black py-3 px-6 rounded-full text-[9px] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105">Explorar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MenuLink onClick={() => onNavigate('catalog')}>Catálogo</MenuLink>
                    <MenuLink onClick={() => onNavigate('ofertas')}>Ofertas</MenuLink>
                    <MenuLink onClick={() => onNavigate('blog')}>Blog</MenuLink>
                    <button 
                        onClick={() => onNavigate('ia')}
                        className="ml-6 bg-[#FBCFE8] text-black font-black px-6 py-2 rounded-full text-[9px] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
                    >
                        IA Beauty
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
