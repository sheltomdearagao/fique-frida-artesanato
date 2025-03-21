
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import OrderInfoSection from '../components/OrderInfoSection';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductsSection />
      <OrderInfoSection />
      <AboutSection />
      <div className="py-16 bg-frida-soft-yellow bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-frida-red text-white rounded-full flex items-center justify-center">
                "
              </div>
              <p className="mt-4 text-gray-600 italic">
                "As bolsas da Fique Frida são simplesmente maravilhosas! A qualidade do material e o acabamento são impecáveis. Já comprei três e sempre recebo muitos elogios."
              </p>
              <div className="mt-6">
                <p className="font-medium">Ana Luiza</p>
                <p className="text-sm text-gray-500">Cliente desde 2022</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-frida-red text-white rounded-full flex items-center justify-center">
                "
              </div>
              <p className="mt-4 text-gray-600 italic">
                "Além de lindas, as peças contam histórias! Adoro como cada estampa tem significado e como a Mili consegue transmitir a essência de Frida em cada detalhe."
              </p>
              <div className="mt-6">
                <p className="font-medium">Carolina Santos</p>
                <p className="text-sm text-gray-500">Cliente desde 2021</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-frida-red text-white rounded-full flex items-center justify-center">
                "
              </div>
              <p className="mt-4 text-gray-600 italic">
                "Presenteei minha mãe com uma carteira da Fique Frida e ela adorou! O atendimento foi excelente e o produto chegou muito bem embalado. Recomendo demais!"
              </p>
              <div className="mt-6">
                <p className="font-medium">Mariana Costa</p>
                <p className="text-sm text-gray-500">Cliente desde 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <div id="newsletter">
        <NewsletterForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
