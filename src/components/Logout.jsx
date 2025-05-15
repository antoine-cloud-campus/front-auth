import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router';

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // (1) Appel API pour notifier la déconnexion
        await fetch('https://offers-api.digistos.com/api/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
      } catch (err) {
        console.error("Erreur lors de l'appel à l'API de déconnexion :", err);
      }

      // (2) Suppression du token côté frontend
      dispatch(logout());

      // (3) Redirection vers la page d'accueil ou login
      navigate('/');
    };

    handleLogout();
  }, []);

  return null;
};


export default Logout;
