
import React, { useState, useEffect, useCallback } from 'react';
import type { View } from './types';

interface HeroCarouselProps {
    onNavigate: (view: View) => void;
}

const slides = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1619014161955-46f890666014?q=80&w=2000&auto=format&fit=crop', 
        title: 'Colección Platinum 2026',
        subtitle: 'Luz y pureza para tu rutina de belleza. Descubre el nuevo Catálogo 1.',
        buttonText: 'DESCUBRE EL LOOK',
        view: 'products' as View,
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80',
        title: 'Maquillaje Profesional',
        subtitle: 'Tendencias de pasarela adaptadas a tu estilo diario.',
        buttonText: 'VER MAQUILLAJE',
        view: 'products' as View,
    },
];

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="w-full h-[65vh] max-h-[550px] m-auto relative group rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center justify-start p-10 md:p-16">
                            <div className="max-w-2xl text-left text-white">
                                <span className="bg-[#fbcfe8] text-black text-[10px] font-black px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em] uppercase">Exclusivo 2026</span>
                                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">{slide.title}</h2>
                                <p className="text-lg md:text-xl opacity-90 mb-10 font-light leading-relaxed">{slide.subtitle}</p>
                                <button
                                    onClick={() => onNavigate(slide.view)}
                                    className="bg-white text-black font-black py-4 px-12 rounded-full shadow-2xl hover:bg-[#fbcfe8] transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-[11px]"
                                >
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-6 text-white cursor-pointer p-2 bg-black/10 rounded-full hover:bg-black/30 transition-all">
                    <button onClick={prevSlide} aria-label="Anterior"><ChevronLeftIcon /></button>
                </div>
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-6 text-white cursor-pointer p-2 bg-black/10 rounded-full hover:bg-black/30 transition-all">
                    <button onClick={nextSlide} aria-label="Siguiente"><ChevronRightIcon /></button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#fbcfe8] w-8' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
