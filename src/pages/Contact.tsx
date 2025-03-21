
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center">Fale Conosco</h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Estamos à disposição para atender você e responder suas dúvidas.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-playfair font-semibold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-frida-red bg-opacity-10 p-3 rounded-full mr-4">
                      <MapPin className="text-frida-red h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Endereço</h4>
                      <p className="text-gray-600">Salvador, Bahia - Brasil</p>
                      <p className="text-gray-600">CEP: 40000-000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-frida-yellow bg-opacity-20 p-3 rounded-full mr-4">
                      <Phone className="text-frida-red h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telefone</h4>
                      <p className="text-gray-600">(71) 99999-9999</p>
                      <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-frida-green bg-opacity-10 p-3 rounded-full mr-4">
                      <Mail className="text-frida-red h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">contato@fiquefrida.com.br</p>
                      <p className="text-gray-600">Responderemos em até 24h úteis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-frida-red p-8 text-white">
                <h3 className="text-xl font-medium mb-4">Nossas Redes Sociais</h3>
                <p className="mb-6 text-white text-opacity-90">
                  Siga-nos para ficar por dentro das novidades, lançamentos e promoções especiais.
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/fiquefrida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://facebook.com/fiquefrida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/b2e124f6-e408-4d71-9872-7e4bcfe5a5a7.png" 
                alt="Fique Frida Agradecimento" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-playfair font-semibold mb-6">Envie-nos uma mensagem</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-frida-red bg-opacity-10 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-frida-red" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-600">
                    Agradecemos seu contato. Responderemos o mais breve possível.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome <span className="text-frida-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-frida-red">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem <span className="text-frida-red">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-frida-red focus:border-transparent transition-all"
                      placeholder="Sua mensagem"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
