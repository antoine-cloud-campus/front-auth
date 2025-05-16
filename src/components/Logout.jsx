import { useEffect } from 'react';
import { useNavigate } from 'react-router';




const Logout = () => {
  const navigate = useNavigate()

  const baseAPI = "https://offers-api.digistos.com/api"
  useEffect(() => {
    const handleLogout = async () => {
      // (1) Appel API pour notifier la déconnexion
      await fetch(baseAPI + '/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`,
        },
      });
      // (2) Suppression du token côté frontend
      localStorage.removeItem('auth');
      // (3) Redirection vers la page de login
      navigate('/')
    };

    handleLogout();
  }, []);

  return null; // Pas besoin d'afficher quoi que ce soit
};

export default Logout;
