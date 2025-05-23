import { useState, useEffect } from "react";
import api from "../../services/api";
import { useSearchParams } from "react-router-dom";

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [sessionCreated, setSessionCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const approved = searchParams.get("approved");
    const requestToken = localStorage.getItem("tmdb_request_token");
    
    if (approved === "true" && requestToken) {
      handleTokenApproval(requestToken);
    }
  }, [searchParams]);

  const handleTokenApproval = async (token: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await api.post("/authentication/session/new", {
        request_token: token
      });

      if (response.data.success) {
        localStorage.setItem("tmdb_session_id", response.data.session_id);
        localStorage.removeItem("tmdb_request_token");
        setSessionCreated(true);
      } else {
        throw new Error("Falha ao criar sessão: Resposta inesperada da API");
      }
    } catch (error) {
      console.error("Erro detalhado:", error);
      setError(
        "Erro ao criar sessão. Por favor, tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSession = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get("/authentication/token/new");
      
      if (response.data.success) {
        const requestToken = response.data.request_token;
        localStorage.setItem("tmdb_request_token", requestToken);
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}`;
      } else {
        throw new Error("Falha ao obter token: Resposta inesperada da API");
      }
    } catch (error) {
      console.error("Erro ao obter token:", error);
      setError(
        "Erro ao iniciar autenticação. Tente novamente."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center gap-2">
      {error && <span className="text-danger small">{error}</span>}
      <button
        className="btn btn-outline-primary"
        onClick={handleCreateSession}
        disabled={isLoading || sessionCreated}
      >
        {isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
            Processando...
          </>
        ) : sessionCreated ? (
          "Sessão Ativa"
        ) : (
          "Iniciar Sessão"
        )}
      </button>
    </div>
  );
}