
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const depth = parseFloat(htmlEl.getAttribute('data-depth') || '0.05');
        const translateX = x * depth * 50;
        const translateY = y * depth * 50;
        htmlEl.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow">
      {/* Decorative elements */}
      <div className="parallax absolute -top-20 left-10 w-48 h-48 rounded-full bg-frida-yellow opacity-10" data-depth="0.08"></div>
      <div className="parallax absolute top-40 right-20 w-32 h-32 rounded-full bg-frida-pink opacity-10" data-depth="0.12"></div>
      <div className="parallax absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-frida-green opacity-10" data-depth="0.04"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-frida-red bg-opacity-10 text-frida-red font-medium text-sm mb-4">Moda artesanal inspirada</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
            Arte & Artesanato<br />
            <span className="text-frida-red">Inspirada em Frida</span>
          </h1>
          <p className="text-gray-700 mb-8 text-lg max-w-lg">
            Bolsas, mochilas e acessórios exclusivos, confeccionados com tecidos de alta qualidade e estampas originais que celebram a tradição e o empoderamento feminino.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">
              Explorar Coleção
            </Link>
            <Link to="/about" className="btn-secondary">
              Nossa História
            </Link>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative perspective-hover">
          <div className="relative z-10 animate-float">
            <img 
              src="/lovable-uploads/824c25d5-0b7c-470e-9dc1-216f207b345b.png" 
              alt="Fique Frida" 
              className="max-w-full mx-auto"
            />
          </div>
          <div className="parallax absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-frida-yellow opacity-20" data-depth="0.02"></div>
        </div>
      </div>

      {/* Flowing shapes at bottom */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#FFDEE2" fillOpacity="0.6" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
