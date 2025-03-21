
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-frida-soft-pink bg-opacity-30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1619873150497-5df1b9c00897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')] bg-cover opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 rounded-full bg-frida-yellow opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-frida-red bg-opacity-10 text-frida-red font-medium text-sm mb-4">Nossa História</span>
            <h2 className="section-title">Arte, Tradição e<br />Empoderamento</h2>
            <p className="my-6 text-gray-700">
              A Fique Frida nasceu da paixão pelo artesanato e da inspiração de duas mulheres extraordinárias: minha avó Dona Raimunda e a icônica artista Frida Kahlo. Fundada por Mili em Salvador, Bahia, nossa marca celebra a tradição familiar e o espírito livre que Frida representava.
            </p>
            <p className="mb-8 text-gray-700">
              Cada peça que criamos é única, confeccionada com tecidos de alta qualidade e estampas originais que contam histórias. Nosso objetivo é trazer cor, arte e significado para o dia a dia das mulheres, honrando nossa herança cultural e promovendo o empoderamento feminino.
            </p>
            <Link to="/about" className="btn-primary">
              Conheça Nossa Jornada
            </Link>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-8 animate-float" style={{animationDelay: '0.1s'}}>
                  <img 
                    src="https://images.unsplash.com/photo-1534885320675-b08996541c4e?auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Artesanato tradicional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg animate-float" style={{animationDelay: '0.4s'}}>
                  <img 
                    src="https://images.unsplash.com/photo-1621570071349-aa0812395735?auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Tecidos e materiais" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg animate-float" style={{animationDelay: '0.2s'}}>
                  <img 
                    src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Artesã trabalhando" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-8 animate-float" style={{animationDelay: '0.3s'}}>
                  <img 
                    src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=400&h=300&q=80" 
                    alt="Tradição mexicana" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-8 border-frida-soft-yellow z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
