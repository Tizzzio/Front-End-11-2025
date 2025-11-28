import { useState } from "react";
import "./Dashboard.css";
import { users } from "../../data/users";

export default function Dashboard() {
  const [usersList, setUsersList] = useState([]); // << ora array!
  const [notifications, setNotifications] = useState(3);
  const [theme, setTheme] = useState("light");

  const loginFree = () => setUsersList(users.filter((u) => !u.isVip));
  const loginVip = () => setUsersList(users.filter((u) => u.isVip));

  const logout = () => {
    setUsersList([]);
    setNotifications(3);
  };

  const markAsRead = () => setNotifications(0);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`dashboard ${theme}`}>
      <button className="theme-btn" onClick={toggleTheme}>
        Tema: {theme === "light" ? "🌞 Light" : "🌙 Dark"}
      </button>

      <h1>{usersList.length > 0 ? "Utenti trovati" : "Accedi alla Dashboard"}</h1>

      {usersList.length === 0 && (
        <div className="login-container">
          <button onClick={loginFree} className="btn">
            Login Utente
          </button>
          <button onClick={loginVip} className="btn premium">
            Login VIP
          </button>
        </div>
      )}

      {usersList.length > 0 && (
        <div className="users-grid">
          {usersList.map((user) => {
            const { id, name, username, avatar, age, followers, isVip, hobbies } = user || {};

            return (
              <div key={id} className="user-card">
                <img src={avatar} className="avatar" alt={name} />
                <h3>{name}</h3>
                <p>@{username}</p>
                <p>Età: {age}</p>
                <p>Followers: {followers}</p>
                <p>Status: {isVip ? "⭐ VIP" : "Free"}</p>
                {isVip && <p>Hobby: {hobbies.join(", ")}</p>}
              </div>
            );
          })}

          <div className="footer-actions">
            <h3>🔔 Notifiche: {notifications}</h3>
            {notifications > 0 && (
              <button className="btn small" onClick={markAsRead}>
                Segna tutte lette
              </button>
            )}
            <button className="btn logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
