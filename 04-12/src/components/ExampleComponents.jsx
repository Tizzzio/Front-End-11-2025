import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const ExampleComponents = () => {
  const { currentTheme, currentFontSize } = useTheme();
  const { user, addNotification } = useUser();

  const examples = [
    {
      title: "📊 Dashboard Card",
      content: "Questa card usa automaticamente il tema corrente!",
    },
    {
      title: "🎯 Task Manager",
      content: "Tutti i componenti si adattano al tema scelto",
    },
    {
      title: "💬 Chat Component",
      content: "Context API rende tutto consistente",
    },
  ];

  const handleCardClick = (title) => {
    if (user) {
      addNotification(`Hai cliccato su: ${title} 🔥`);
    }
  };

  return (
    <div className="examples-section">
      <h3>🎪 Componenti di Esempio</h3>
      <p>Questi componenti dimostrano come tutti gli elementi usano automaticamente il tema globale:</p>

      <div className="examples-grid">
        {examples.map((example, index) => (
          <div
            key={index}
            className="example-card"
            onClick={() => handleCardClick(example.title)}
            style={{
              backgroundColor: currentTheme.cardBackground,
              borderColor: currentTheme.borderColor,
              color: currentTheme.color,
              fontSize: currentFontSize,
            }}
          >
            <h4>{example.title}</h4>
            <p>{example.content}</p>
            <div className="card-footer">
              <small>Tema: {currentTheme.backgroundColor}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="context-info">
        <h4>🔍 Info Context Corrente</h4>
        <div className="context-details">
          <div className="detail-item">
            <strong>🎨 Tema:</strong>
            <span className="color-preview" style={{ backgroundColor: currentTheme.backgroundColor }}>
              {currentTheme.backgroundColor}
            </span>
          </div>
          <div className="detail-item">
            <strong>📝 Font Size:</strong>
            <span>{currentFontSize}</span>
          </div>
          <div className="detail-item">
            <strong>👤 Utente:</strong>
            <span>{user ? user.name : "Non loggato"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponents;
