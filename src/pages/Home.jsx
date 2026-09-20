import Card from "../components/Card";

function Home() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao projeto do Desafio da Aula 04!</p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "16px",
        }}
      >
        <Card
          titulo="Componentes"
          texto="Site dividido em partes reutilizáveis."
        />
        <Card
          titulo="Rotas"
          texto="Navegue pelo menu sem recarregar a página."
        />
        <Card
          titulo="useState + map"
          texto="Adicione nomes na página Lista."
        />
      </div>
    </main>
  );
}

export default Home;