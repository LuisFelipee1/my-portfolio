import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css';
import NavBar from './NavBar';
import FixedBar from '../components/fixed';
import { infoCars } from '../infos/infos';
import '../styles/cars.css';

type Cars = {
  id: number,
  brand: string,
  model: string,
  img: string,
  infos: string,
};

function Pictures() {
  const navigate = useNavigate();
  const [cars, setCars] = useState(infoCars);

  return (
    <div>
      <NavBar />
      <div className="namePageCar">
        <div className="carsTitle">
          <h1>Carros Esportivos!</h1>
        </div>
        <div className="carsWrapper">
          {cars.map((car: Cars) => (
            <div key={ car.id } className="imgDiv">
              <div className="content">
                <h2>{car.model}</h2>
              </div>
              <div className="imageBox">
                <button
                  className="btnCars"
                  onClick={ () => navigate(`/cars/:${car.id}`) }
                >
                  <img src={ car.img } alt="carros" className="imgsCar" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FixedBar />
    </div>
  );
}

export default Pictures;
