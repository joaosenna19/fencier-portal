import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log('Enviando solicitação de login com email:', email, 'e senha:', password); // Log para debugging
      const response = await fetch('https://fencier-api.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Inclui cookies na solicitação
      });

      console.log('Status da resposta:', response.status); // Log para debugging
      const responseData = await response.json();
      console.log('Dados da resposta:', responseData); // Log para debugging

      if (response.ok && responseData.token) { // Verificar se o token está presente na resposta
        Cookies.set('auth_token', responseData.token); // Armazena o token no cookie
        setIsAuthenticated(true);
        router.push('/dashboard/maindashboard');
      } else {
        alert('Credenciais inválidas ou token ausente');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    }
  };

  const logout = () => {
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
