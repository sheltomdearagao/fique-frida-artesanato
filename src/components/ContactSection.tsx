
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title centered">Entre em Contato</h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Estamos sempre à disposição para atender você. Fale conosco através dos nossos canais de atendimento.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-frida-pink opacity-10"></div>
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <h3 className="text-xl font-playfair font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-frida-red bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="text-frida-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Endereço</h4>
                    <p className="text-gray-600">Salvador, Bahia - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-frida-yellow bg-opacity-20 p-3 rounded-full mr-4">
                    <Phone className="text-frida-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <p className="text-gray-600">(71) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-frida-green bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="text-frida-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contato@fiquefrida.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-frida-purple bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="text-frida-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-playfair font-semibold mb-6">Redes Sociais</h3>
            
            <div className="space-y-4">
              <a href="https://instagram.com/fiquefrida" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-frida-red hover:shadow-md transition-all">
                <Instagram className="h-6 w-6 text-frida-red mr-3" />
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-gray-600">@fiquefrida</p>
                </div>
              </a>
              
              <a href="https://facebook.com/fiquefrida" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-frida-red hover:shadow-md transition-all">
                <Facebook className="h-6 w-6 text-frida-red mr-3" />
                <div>
                  <h4 className="font-medium">Facebook</h4>
                  <p className="text-gray-600">@fiquefrida</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
