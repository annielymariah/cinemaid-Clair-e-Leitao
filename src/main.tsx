import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MoviesList from './components/MoviesList/MoviesList';
import "./app/global.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <MoviesList/>
  </StrictMode>,
)
