export default function Footer() {
  return (
    <footer className="footer mt-auto py-5 bg-dark text-white border-top border-primary-subtle">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <img 
              width={80} 
              src="src/assets/logo_cinermaid.png" 
              alt="Logotipo Cinermaid" 
              className="mb-3"
            />
            <p className="lead mb-2">
              Cinermaid │ Mergulhando no mundo do cinema, onde cada filme é uma nova aventura.
            </p>
            <p className="mb-0">
              © {new Date().getFullYear()} Cinermaid. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}