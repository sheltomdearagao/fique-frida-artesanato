
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type GoogleAuthButtonProps = {
  isSignUp: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ 
  isSignUp, 
  loading, 
  setLoading, 
  setError 
}) => {
  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/home`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        },
      });
      
      if (error) throw error;
    } catch (error: any) {
      console.error('Google auth error:', error);
      setError('Erro ao conectar com Google. Por favor, tente novamente.');
      toast.error('Erro ao conectar com Google');
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default GoogleAuthButton;
