
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { ArrowLeft } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário já está logado
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/home');
      }
    };
    
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center text-gray-700 hover:text-frida-red transition-colors">
          <ArrowLeft size={20} className="mr-1" />
          Voltar para a página inicial
        </Link>
      </div>
      
      <AuthCard 
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default Auth;
