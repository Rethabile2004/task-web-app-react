//
// Rethabile Eric Siase
// github.com/rethabile2004
//

function TaskCard({ name, description, onRemove }) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ margin: 0, color: "#555" }}>{description}</p>
      <button
        onClick={onRemove}
        style={{
          alignSelf: "flex-end",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#e74c3c",
          color: "#fff",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
