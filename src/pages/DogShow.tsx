import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import FixedBar from '../components/fixed';

function ShowDog() {
  const [req, setRequest]: any = useState(null);
  const [loading, setLoading]: any = useState(false);

  async function renderAPI() {
    try {
      setLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setRequest(data);
      setLoading(false);
      console.log(data.message);
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
          <h2 className="lyric">ALGUNS DOGUINHOS!</h2>
          <div className="imgs">
            <img src={ req.message } className="imagem" alt="doguinho" />
          </div>
          <div className="button">
            <button
              onClick={ () => updateRequest() }
              className="buttons"
            >
              Novo Doguinho!
            </button>
          </div>
        </div>
      )}
      <FixedBar />
    </div>
  );
}

export default ShowDog;
