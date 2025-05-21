import "./app/global.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./pages/Main";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}
