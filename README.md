# **Cinemaid** 🧜🏻‍♀️  

**Cinemaid** é uma plataforma que apresenta uma coletânea de filmes, consumindo a API do **TMDB (The Movie Database)**. Desenvolvido em **React TS** com estilização em **Styled Components** e layout responsivo usando **Bootstrap**.  

## **🚀 Como Executar o Projeto**  

### **Pré-requisitos**  
- Node.js (v18+)  
- NPM ou Yarn  
- Chave de API do TMDB ([obtenha aqui](https://www.themoviedb.org/settings/api))  

### **🔧 Instalação**  

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/cinemaid.git
   cd cinemaid
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**  
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**  
   Abra o navegador no link retornado.

## **🛠️ Tecnologias Utilizadas**  
- **React TS** (Vite)  
- **React Bootstrap** (Responsividade)  
- **Styled Components** (Estilização)  
- **Axios** (Requisições HTTP)  
- **React Hooks** (useState, useEffect)  
- **TMDB API** (Dados de filmes)  

## **📌 Funcionalidades**  
✅ Listagem de filmes 
✅ Login e autenticação 

*(Requisições POST podem depender de autenticação adicional)*  

## **📂 Estrutura do Projeto**  
```  
cinemaid/  
├── src/  
│   ├── components/      # Componentes reutilizáveis  
│   ├── pages/           # Páginas da aplicação  
│   ├── routes/          # Rotas configuradas  
│   ├── services/        # Chamadas à API (Axios)  
│   └── App.tsx          # Roteamento principal  
└── vite.config.js       # Configuração do Vite  
```  