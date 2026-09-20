import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main style={{ padding: "24px", textAlign: "center" }}>
      <h1>404 - Página Não Encontrada</h1>
      <p style={{ margin: "12px 0" }}>A página que você procurou não existe.</p>
      <Link to="/" style={{ color: "#1e90ff", fontWeight: "bold" }}>
        Voltar para a Página Inicial
      </Link>
    </main>
  );
}

export default NotFound;