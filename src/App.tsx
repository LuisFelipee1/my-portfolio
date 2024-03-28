import { Route, Routes } from 'react-router-dom';
import CatShow from './pages/CatShow';
import './App.css';
import NavBar from './pages/NavBar';
import ShowDog from './pages/DogShow';
import Pictures from './pages/Cars';
import CarsDetails from './pages/CarsDetails';

function App() {
  return (
    <Routes>
      <Route path="/cat" element={ <CatShow /> } />
      <Route path="/Dog" element={ <ShowDog /> } />
      <Route path="/cars" element={ <Pictures /> } />
      <Route path="/" element={ <NavBar /> } />
      <Route path="/cars/:id" element={ <CarsDetails /> } />
    </Routes>
  );
}

export default App;
