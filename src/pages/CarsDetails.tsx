import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css';
import FixedBar from '../components/fixed';
import { infoCars } from '../infos/infos';
import '../styles/CarsDetails.css';

function CarsDetails() {
  const navigate = useNavigate();
  const back = '<- Voltar';

  return (
    <div>
      <div className="divBtnBack">
        <button
          onClick={ () => navigate('/cars') }
          className="btnBack"
        >
          { back }
        </button>
      </div>
      <div>
        {infoCars.map((cars, index: any) => (
          window.location.pathname === `/cars/:${index}`
          && (
            <div key={ cars.id }>
              <h1 className="nameModel">{ cars.model }</h1>
              <h3 className="infoCars">{ cars.infos }</h3>
              <div className="divVideo">
                <YouTube 
                  videoId={ cars.video } 
                  className="videoYT" 
                />
              </div>
            </div>
          )
        ))}
      </div>
      <FixedBar />
    </div>
  );
}

export default CarsDetails;
