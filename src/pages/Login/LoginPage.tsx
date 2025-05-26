import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tokenResponse = await api.get("/authentication/token/new");
      const { success, request_token } = tokenResponse.data;

      if (!success || !request_token) {
        setError("Erro ao obter token de autenticação.");
        setLoading(false);
        return;
      }

      const validateResponse = await api.post("/authentication/token/validate_with_login", {
        request_token,
        username,
        password,
      });
    
      console.log("validateResponse", validateResponse.data);

      if (validateResponse.data.success) {
        localStorage.setItem("auth_token", request_token);
        navigate("/"); 
      } else {
        setError("Usuário ou senha inválidos.");
      }
    } catch {
      setError("Erro ao autenticar. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
          <div className="card-body">
            <h2 className="text-center mb-4 display-5">Login</h2>

            {error && (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Nome de usuário
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control form-control-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <button
                className="btn btn-primary w-100 mb-3"
                type="submit"
                disabled={loading || !username || !password}
              >
                {loading ? "Autenticando..." : "Login"}
              </button>
              <span className="text-center d-block mb-3">
                Não possui uma conta? Cadastre-se por meio do <a href="https://www.themoviedb.org/signup" target="_blank">TMDB</a>.    
              </span>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}