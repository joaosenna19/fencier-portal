'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'; // Changed import from 'next/router' to 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Correct hook from 'next/navigation'

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email: any, password: any) => {
    try {
      console.log('Sending login request with email:', email, 'and password:', password); // Debug log
      const response = await fetch('https://fencier-api.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include cookies in the request
      });
  
      console.log('Response status:', response.status); // Debug log
      const responseData = await response.json();
      console.log('Response data:', responseData); // Debug log
  
      if (response.ok) {
        if (responseData.token) {
          Cookies.set('auth_token', responseData.token); // Store the token in a cookie
          setIsAuthenticated(true);
          router.push('/dashboard/maindashboard');
        } else {
          console.error('Token missing in response:', responseData);
          alert('Login successful, but the authentication token is missing. Please contact support.');
        }
      } else {
        console.error('Server response error:', responseData);
        alert('Invalid credentials or missing token');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Error logging in');
    }
  };  

  const logout = () => {
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside um AuthProvider');
  }
  return context;
};
