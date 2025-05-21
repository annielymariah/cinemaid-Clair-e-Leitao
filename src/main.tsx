import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MoviesList from './components/MoviesList';
import "./app/global.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MoviesList/>
  </StrictMode>,
)
