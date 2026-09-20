function Card({ titulo, texto }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "250px",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  );
}

export default Card;