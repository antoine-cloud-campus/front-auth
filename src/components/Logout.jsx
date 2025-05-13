import { useEffect } from 'react';


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
      localStorage.removeItem('auth');

      // (2) Suppression du token côté frontend

      // (3) Redirection vers la page de login
    };

    handleLogout();
  }, []);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
