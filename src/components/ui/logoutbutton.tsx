
import { useState } from 'react';
import { useRouter } from 'next/router';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  const [logoutMessage, setLogoutMessage] = useState('');
  const router = useRouter();

  const handleLogout = () => {
    // Realizar lógica de logout
    // Por exemplo, limpar tokens de autenticação ou cookies

    // Definir mensagem de logout
    setLogoutMessage('You have successfully logged out!');

    // Redirecionar para a página de login
    router.push('/login');
  };

  return (
    <div>
      {logoutMessage && <p>{logoutMessage}</p>}
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
        onClick={handleLogout}
      >
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
