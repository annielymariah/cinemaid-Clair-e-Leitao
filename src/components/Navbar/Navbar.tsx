import { Link } from "react-router-dom";
import { LoginButton } from "../LoginButton";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient fixed-top border-bottom border-primary-subtle">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <Link to="/" className="navbar-brand">
            <img src="/logoname_cinermaid.png" alt="Cinermaid" height={30} />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/filmes-populares">
                Filmes Populares
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/melhores-avaliados">
                Melhores Avaliados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lancamentos">
                Próximos Lançamentos
              </Link>
            </li>
          </ul>
          <LoginButton />
        </div>
      </div>
    </nav>
  );
}
