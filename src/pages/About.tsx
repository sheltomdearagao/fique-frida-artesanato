
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center">Nossa História</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Conheça a inspiração e a jornada da Fique Frida.
          </p>
        </div>
      </div>
      
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1534885320675-b08996541c4e?auto=format&fit=crop&w=700&h=900&q=80" 
              alt="Inspiração Frida Kahlo" 
              className="rounded-xl shadow-xl max-w-full"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full border-8 border-frida-soft-yellow -z-10"></div>
          </div>
          
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-frida-red bg-opacity-10 text-frida-red font-medium text-sm mb-4">Nossa Inspiração</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
              Frida Kahlo e Dona Raimunda
            </h2>
            <p className="text-gray-700 mb-4">
              A Fique Frida nasceu da admiração por duas mulheres extraordinárias: a icônica artista mexicana Frida Kahlo e minha avó, Dona Raimunda. Ambas representavam força, autenticidade e um profundo amor pela arte e pelo artesanato.
            </p>
            <p className="text-gray-700 mb-4">
              Frida, com sua personalidade marcante e estilo único, sempre foi uma inspiração para mim. Sua capacidade de transformar dor em arte e sua coragem em expressar sua identidade cultural são valores que ressoam profundamente em nosso trabalho.
            </p>
            <p className="text-gray-700">
              Dona Raimunda, minha avó, era uma artesã talentosa do interior da Bahia. Com suas mãos habilidosas, ela transformava tecidos simples em verdadeiras obras de arte, transmitindo amor e histórias em cada ponto. Foi com ela que aprendi o valor do trabalho manual e a importância de preservar nossas tradições.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-frida-soft-yellow bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-frida-red bg-opacity-10 text-frida-red font-medium text-sm mb-4">Nossa Jornada</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                De Salvador para o Brasil
              </h2>
              <p className="text-gray-700 mb-4">
                Fundada em 2018 por Mili em Salvador, Bahia, a Fique Frida começou como um pequeno ateliê onde eu criava bolsas para amigos e familiares. O que era apenas um hobby logo se transformou em uma paixão que precisava ser compartilhada.
              </p>
              <p className="text-gray-700 mb-4">
                Cada peça que criamos é resultado de um cuidadoso processo artesanal. Selecionamos tecidos de alta qualidade, muitos deles adquiridos de pequenos produtores locais, e desenvolvemos estampas exclusivas inspiradas na rica cultura mexicana e brasileira.
              </p>
              <p className="text-gray-700">
                Nosso objetivo é mais do que criar produtos bonitos - queremos que cada bolsa, mochila ou acessório carregue uma história e conecte quem os usa com a força e a criatividade feminina que tanto admiramos em Frida e Dona Raimunda.
              </p>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?auto=format&fit=crop&w=700&h=900&q=80" 
                alt="Processo artesanal" 
                className="rounded-xl shadow-xl max-w-full"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full border-8 border-frida-soft-pink -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-frida-red bg-opacity-10 text-frida-red font-medium text-sm mb-4">Nossos Valores</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            O que nos guia
          </h2>
          <p className="text-gray-700">
            Nossa marca é construída sobre valores sólidos que norteiam cada decisão, desde a escolha dos materiais até o relacionamento com nossos clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-frida-red bg-opacity-10 flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 rounded-full bg-frida-red"></div>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Autenticidade</h3>
            <p className="text-gray-600">
              Valorizamos a expressão genuína em todas as nossas criações, incentivando cada pessoa a abraçar sua singularidade.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-frida-yellow bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 rounded-full bg-frida-yellow"></div>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Sustentabilidade</h3>
            <p className="text-gray-600">
              Comprometemo-nos com práticas sustentáveis, desde a escolha de materiais até processos de produção que respeitam o meio ambiente.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-frida-green bg-opacity-10 flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 rounded-full bg-frida-green"></div>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Empoderamento</h3>
            <p className="text-gray-600">
              Acreditamos no poder transformador da arte e do artesanato como forma de expressão e valorização do trabalho feminino.
            </p>
          </div>
        </div>
      </section>
      
      <NewsletterForm />
      <Footer />
    </div>
  );
};

export default About;
