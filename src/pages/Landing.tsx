
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

const Landing = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
    
    if (error) {
      toast.error('Erro ao conectar com Google');
      console.error('Erro de login:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src="/lovable-uploads/824c25d5-0b7c-470e-9dc1-216f207b345b.png" 
            alt="Fique Frida Logo" 
            className="h-28 animate-float"
          />
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
            Fique Frida
          </h1>
          
          <p className="text-gray-600 max-w-sm">
            Artesanato exclusivo feito à mão, com inspiração em Frida Kahlo e cultura mexicana.
          </p>
          
          <div className="w-full pt-6 space-y-4">
            <div className="space-y-3">
              <Button 
                onClick={() => navigate('/auth')}
                className="w-full bg-frida-red hover:bg-opacity-90 py-6 text-base"
              >
                Acessar sua conta
              </Button>
              
              <Button
                onClick={handleGoogleLogin}
                variant="outline"
                className="w-full border-2 py-6 text-base flex items-center justify-center gap-2"
              >
                <FcGoogle size={20} />
                Entrar com Google
              </Button>
            </div>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>
            
            <Button
              onClick={() => navigate('/home')}
              variant="secondary"
              className="w-full py-6 text-base bg-frida-yellow text-gray-800 hover:bg-opacity-90"
            >
              Entrar como visitante
            </Button>
          </div>
        </div>
        
        <div className="pt-4">
          <p className="text-sm text-gray-500">
            Ao entrar, você concorda com nossos{' '}
            <Link to="/terms" className="text-frida-red hover:underline">
              Termos de Serviço
            </Link>{' '}
            e{' '}
            <Link to="/privacy" className="text-frida-red hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-4 flex flex-col items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Fique Frida. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Landing;
