
import React, { useState } from 'react';
import { Mail, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

type EmailAuthFormProps = {
  isSignUp: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

const EmailAuthForm: React.FC<EmailAuthFormProps> = ({ 
  isSignUp, 
  loading, 
  setLoading,
  setError 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
        navigate('/home');
      }
    } catch (error: any) {
      setError(error.message);
      toast.error('Erro na autenticação');
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default EmailAuthForm;
