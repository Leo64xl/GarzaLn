// ComponentePadre.jsx
import Mensajeria from './Mensajeria';
import { useLocation, useNavigate } from 'react-router-dom';

const ComponentePadre = () => {
  const {state} = useLocation();
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login-usuario', {
      replace:true,
    })
  }

  return (
    <div>
      <Mensajeria state={state} onLogout={onLogout} />
    </div>
  );
};