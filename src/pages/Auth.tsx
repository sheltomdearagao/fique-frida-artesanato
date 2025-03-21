
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { FcGoogle } from 'react-icons/fc';
import { Mail, Key, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário já está logado
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        // Cadastro
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Conta criada com sucesso! Verifique seu email para confirmar o cadastro.');
      } else {
        // Login
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Login realizado com sucesso!');
        navigate('/');
      }
    } catch (error: any) {
      setError(error.message);
      toast.error('Erro na autenticação');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      setError(error.message);
      toast.error('Erro ao conectar com Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-frida-soft-pink via-white to-frida-soft-yellow py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center text-gray-700 hover:text-frida-red transition-colors">
          <ArrowLeft size={20} className="mr-1" />
          Voltar para a página inicial
        </Link>
      </div>
      
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          <img 
            src="/lovable-uploads/824c25d5-0b7c-470e-9dc1-216f207b345b.png" 
            alt="Fique Frida Logo" 
            className="h-16 mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold font-playfair text-gray-900">
            {isSignUp ? 'Criar uma conta' : 'Entrar na sua conta'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp 
              ? 'Crie sua conta para fazer encomendas e acompanhar seus pedidos' 
              : 'Entre para acessar sua conta e acompanhar seus pedidos'}
          </p>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="mt-8 space-y-6">
          <Button
            onClick={handleGoogleAuth}
            disabled={loading}
            variant="outline"
            size="lg"
            className="w-full flex items-center justify-center gap-2 border-2"
          >
            <FcGoogle size={20} />
            {isSignUp ? 'Cadastrar com Google' : 'Entrar com Google'}
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Ou continue com email</span>
            </div>
          </div>
          
          <form className="space-y-4" onSubmit={handleEmailAuth}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="mt-1 relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-sm text-frida-red hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
            )}
            
            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-frida-red hover:bg-opacity-90"
              >
                {loading ? 'Processando...' : isSignUp ? 'Criar conta' : 'Entrar'}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-frida-red hover:underline focus:outline-none"
          >
            {isSignUp ? 'Já tem uma conta? Entre agora' : 'Não tem uma conta? Cadastre-se'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
