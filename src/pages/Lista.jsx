import { useState } from "react";

function Lista() {
  const [pessoas, setPessoas] = useState([
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Beto" },
    { id: 3, nome: "Carla" },
  ]);
  const [novoNome, setNovoNome] = useState("");

  function adicionarPessoa() {
    if (novoNome.trim() === "") return;
    const novaPessoa = { id: Date.now(), nome: novoNome }; // Date.now() evita IDs duplicados
    setPessoas([...pessoas, novaPessoa]);
    setNovoNome("");
  }

  // Função para remover pessoa pelo ID
  function removerPessoa(id) {
    setPessoas(pessoas.filter((pessoa) => pessoa.id !== id));
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>Lista de Pessoas</h1>
      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        <input
          type="text"
          placeholder="Digite um nome"
          value={novoNome}
          onChange={(evento) => setNovoNome(evento.target.value)}
          style={{ padding: "8px" }}
        />
        <button onClick={adicionarPessoa} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Adicionar
        </button>
      </div>

      <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id} style={{ marginBottom: "8px" }}>
            <span style={{ marginRight: "12px" }}>{pessoa.nome}</span>
            <button
              onClick={() => removerPessoa(pessoa.id)}
              style={{
                padding: "2px 8px",
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Lista;