
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor, informe seu email.');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Obrigado por se inscrever!');
      setEmail('');
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-frida-red relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1619873150497-5df1b9c00897?auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <Mail className="h-8 w-8 text-frida-red" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Fique por dentro das novidades
          </h2>
          
          <p className="text-white text-opacity-90 mb-8 max-w-xl mx-auto">
            Inscreva-se em nossa newsletter e receba em primeira mão novidades sobre lançamentos, promoções e conteúdos exclusivos.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-frida-yellow focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-frida-yellow hover:bg-opacity-90 text-gray-800 font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Inscrever-se'}
            </button>
          </form>
          
          <p className="text-white text-opacity-70 text-sm mt-4">
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
