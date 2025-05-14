import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      // (1) Appel API pour notifier la déconnexion
      await fetch('/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`,
        },
      });
      // (2) Suppression du token côté frontend
      localStorage.removeItem('auth');
      // (3) Redirection vers la page de login
      useNavigate('/')
    };

    handleLogout();
  }, []);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
