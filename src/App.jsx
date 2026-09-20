import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Lista from "./pages/Lista";
import NotFound from "./pages/NotFound"; // 1. Importar a página

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="*" element={<NotFound />} /> {/* 2. Rota 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;