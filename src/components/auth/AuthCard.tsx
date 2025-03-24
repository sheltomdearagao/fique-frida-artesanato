
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import GoogleAuthButton from './GoogleAuthButton';
import EmailAuthForm from './EmailAuthForm';

type AuthCardProps = {
  isSignUp: boolean;
  setIsSignUp: (isSignUp: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
};

const AuthCard: React.FC<AuthCardProps> = ({ 
  isSignUp, 
  setIsSignUp, 
  loading, 
  setLoading, 
  error, 
  setError 
}) => {
  return (
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
        <GoogleAuthButton 
          isSignUp={isSignUp} 
          loading={loading} 
          setLoading={setLoading} 
          setError={setError} 
        />
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Ou continue com email</span>
          </div>
        </div>
        
        <EmailAuthForm 
          isSignUp={isSignUp} 
          loading={loading} 
          setLoading={setLoading} 
          setError={setError} 
        />
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
  );
};

export default AuthCard;
