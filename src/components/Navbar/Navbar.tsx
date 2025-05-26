import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    console.log("Token:", token);
    const storedUsername = localStorage.getItem("auth_username");
    setIsAuthenticated(!!token);
    setUsername(storedUsername);
  }, [location]);

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient fixed-top border-bottom border-primary-subtle">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="/logoname_cinermaid.png" alt="Cinermaid" height={30} />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" aria-current="page" to="/">
                Início
              </Link>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" to="/filmes-populares">
                Filmes Populares
              </Link>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" to="/melhores-avaliados">
                Melhores Avaliados
              </Link>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" to="/lancamentos">
                Próximos Lançamentos
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            {isAuthPage ? (
              <div></div>
            ) : isAuthenticated ? (
              <button className="btn btn-outline-secondary" type="button" disabled>
                {username ? username : "Logado"}
              </button>
            ) : (
              <Link to="/login" onClick={closeNavbar}>
                <button className="btn btn-outline-primary" type="submit">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}