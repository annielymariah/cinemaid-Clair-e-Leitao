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

  const handleCreateSessionWithLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const tokenResponse = await api.get("authentication/token/new");
      if (!tokenResponse.data.success) {
        throw new Error("Falha ao criar token");
      }

      const requestToken = tokenResponse.data.request_token;

      const validationResponse = await api.post(
        "authentication/token/validate_with_login",
        {
          username,
          password,
          request_token: requestToken,
        }
      );

      console.log("Validation Response:", validationResponse.data);

      if (!validationResponse.data.success) {
        throw new Error("Credênciais inválidas");
      }
      localStorage.setItem("token_id", validationResponse.data.session_id);
      navigate("/");
    } catch (err) {
      const error = err as Error;
      setError(error.message || "Autenticação falhou. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

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

            <form onSubmit={handleCreateSessionWithLogin}>
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
                className="btn btn-primary w-100"
                type="submit"
                disabled={loading || !username || !password}
              >
                {loading ? "Autenticando..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
