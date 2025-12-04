import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";

const UserProfile = () => {
  const {
    user,
    isLoggedIn,
    login,
    logout,
    updateProfile,
    notifications,
    unreadCount,
    markNotificationAsRead,
    clearAllNotifications,
    preferences,
    updatePreferences,
  } = useUser();

  const { currentTheme } = useTheme();

  const [showLogin, setShowLogin] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [loginForm, setLoginForm] = useState({
    name: "",
    email: "",
    role: "user",
  });

  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginForm);
    setShowLogin(false);
    setLoginForm({ name: "", email: "", role: "user" });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const handlePreferencesChange = (key, value) => {
    updatePreferences({ [key]: value });
  };

  if (!isLoggedIn) {
    return (
      <div className="user-section">
        <h3>👤 Area Utente</h3>

        {!showLogin ? (
          <button onClick={() => setShowLogin(true)} className="btn primary">
            🚪 Accedi
          </button>
        ) : (
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Nome:</label>
              <input type="text" value={loginForm.name} onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })} required />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} required />
            </div>

            <div className="form-group">
              <label>Ruolo:</label>
              <select value={loginForm.role} onChange={(e) => setLoginForm({ ...loginForm, role: e.target.value })}>
                <option value="user">Utente</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderatore</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn primary">
                Accedi
              </button>
              <button type="button" onClick={() => setShowLogin(false)} className="btn secondary">
                Annulla
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="user-section">
      <div className="user-header">
        <h3>👤 Ciao, {user.name}!</h3>
        <button onClick={logout} className="btn danger">
          🚪 Logout
        </button>
      </div>

      <div className="user-info">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Ruolo:</strong> {user.role}
        </p>
        <p>
          <strong>Login:</strong> {new Date(user.loginTime).toLocaleString("it-IT")}
        </p>
      </div>

      {/* Notifiche */}
      <div className="notifications-section">
        <button onClick={() => setShowNotifications(!showNotifications)} className="btn secondary">
          🔔 Notifiche {unreadCount > 0 && `(${unreadCount})`}
        </button>

        {showNotifications && (
          <div className="notifications-panel">
            <div className="notifications-header">
              <h4>Notifiche</h4>
              {notifications.length > 0 && (
                <button onClick={clearAllNotifications} className="btn small danger">
                  Cancella tutto
                </button>
              )}
            </div>

            {notifications.length === 0 ? (
              <p>Nessuna notifica</p>
            ) : (
              <div className="notifications-list">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`notification ${notif.read ? "read" : "unread"}`} onClick={() => markNotificationAsRead(notif.id)}>
                    <p>{notif.message}</p>
                    <small>{new Date(notif.timestamp).toLocaleString("it-IT")}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Form aggiorna profilo */}
      <form onSubmit={handleUpdateProfile} className="profile-form">
        <h4>📝 Aggiorna Profilo</h4>

        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={profileForm.name} onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={profileForm.email} onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })} />
        </div>

        <div className="form-group">
          <label>Bio:</label>
          <textarea
            value={profileForm.bio}
            onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
            placeholder="Raccontaci qualcosa di te..."
          />
        </div>

        <button type="submit" className="btn primary">
          💾 Salva Profilo
        </button>
      </form>

      {/* Preferenze */}
      <div className="preferences-section">
        <button onClick={() => setShowPreferences(!showPreferences)} className="btn secondary">
          ⚙️ Preferenze
        </button>

        {showPreferences && (
          <div className="preferences-panel">
            <h4>⚙️ Preferenze</h4>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.emailNotifications}
                  onChange={(e) => handlePreferencesChange("emailNotifications", e.target.checked)}
                />
                📧 Notifiche email
              </label>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.pushNotifications}
                  onChange={(e) => handlePreferencesChange("pushNotifications", e.target.checked)}
                />
                🔔 Notifiche push
              </label>
            </div>

            <div className="form-group">
              <label>Lingua:</label>
              <select value={preferences.language} onChange={(e) => handlePreferencesChange("language", e.target.value)}>
                <option value="it">🇮🇹 Italiano</option>
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
