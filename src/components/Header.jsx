import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        padding: "16px",
        backgroundColor: "#1e90ff",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Inicio
      </Link>
      <Link to="/sobre" style={{ color: "#fff", textDecoration: "none" }}>
        Sobre
      </Link>
      <Link to="/lista" style={{ color: "#fff", textDecoration: "none" }}>
        Lista
      </Link>
    </header>
  );
}

export default Header;