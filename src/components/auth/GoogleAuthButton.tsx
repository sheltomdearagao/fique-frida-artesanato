
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
