import { useEffect, useState } from 'react';
import '../styles/Counter.css';
import NavBar from './NavBar';
import FixedBar from '../components/fixed';

function CatShow() {
  const [req, setRequest]: any = useState(null);
  const [loading, setLoading]: any = useState(false);

  async function renderAPI() {
    try {
      setLoading(true);
      const response = await fetch('https://api.thecatapi.com/v1/images/search?');
      const data = await response.json();
      setRequest(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }

  useEffect(() => {
    const storedAdvice = localStorage.getItem('advice');
    if (storedAdvice) {
      setRequest(JSON.parse(storedAdvice));
    } else {
      renderAPI();
    }
  }, []);

  function updateRequest() {
    renderAPI();
  }

  if (loading) {
    <h1>Loading...</h1>;
  }

  return (
    <div>
      <NavBar />
      {req && (
        <div>
          <h2 className="lyric">ALGUNS GATINHOS!</h2>
          <div className="imgs">
            <img src={ req[0].url } className="imagem" alt="gatinho" />
          </div>
          <div className="button">
            <button
              onClick={ () => updateRequest() }
              className="buttons"
            >
              Novo Gatinho!
            </button>
          </div>
        </div>
      )}
      <FixedBar />
    </div>
  );
}

export default CatShow;
