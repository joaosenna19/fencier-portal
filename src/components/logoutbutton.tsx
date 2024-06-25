import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <div>
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
        onClick={logout}
      >
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
