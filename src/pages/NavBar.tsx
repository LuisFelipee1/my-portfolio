import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="divAll">
      <div className="navBar">
        <div className="divBtn">
          <button
            className="btnAnimal"
            onClick={ () => navigate('/cat') }
          >
            Ver Gatinhos!
          </button>
        </div>
        <div className="divBtn">
          <button
            className="btnAnimal"
            onClick={ () => navigate('/dog') }
          >
            Ver Doguinhos!
          </button>
        </div>
        <div className="divBtn">
          <button
            className="btnAnimal"
            onClick={ () => navigate('/cars') }
          >
            Ver Carros!
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
