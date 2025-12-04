import { createContext, useContext, useState, useEffect } from "react";

// Context per gestire lo stato dell'utente
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [preferences, setPreferences] = useState({
    language: "it",
    emailNotifications: true,
    pushNotifications: false,
  });

  // Simula il caricamento dell'utente dal localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    const savedNotifications = localStorage.getItem("notifications");
    const savedPreferences = localStorage.getItem("userPreferences");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  // Funzioni per gestire l'utente
  const login = (userData) => {
    const userWithId = {
      ...userData,
      id: Date.now(),
      loginTime: new Date().toISOString(),
    };
    setUser(userWithId);
    localStorage.setItem("currentUser", JSON.stringify(userWithId));

    // Aggiungi notifica di benvenuto
    addNotification(`Benvenuto ${userData.name}! 👋`);
  };

  const logout = () => {
    setUser(null);
    setNotifications([]);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("notifications");
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    addNotification("Profilo aggiornato con successo! ✅");
  };

  // Gestione notifiche
  const addNotification = (message) => {
    const notification = {
      id: Date.now(),
      message,
      timestamp: new Date().toISOString(),
      read: false,
    };

    setNotifications((prev) => {
      const updated = [notification, ...prev];
      localStorage.setItem("notifications", JSON.stringify(updated));
      return updated;
    });
  };

  const markNotificationAsRead = (notificationId) => {
    setNotifications((prev) => {
      const updated = prev.map((notif) => (notif.id === notificationId ? { ...notif, read: true } : notif));
      localStorage.setItem("notifications", JSON.stringify(updated));
      return updated;
    });
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    localStorage.removeItem("notifications");
  };

  // Gestione preferenze
  const updatePreferences = (newPreferences) => {
    const updated = { ...preferences, ...newPreferences };
    setPreferences(updated);
    localStorage.setItem("userPreferences", JSON.stringify(updated));
    addNotification("Preferenze salvate! 💾");
  };

  const value = {
    user,
    notifications,
    preferences,
    unreadCount: notifications.filter((n) => !n.read).length,
    isLoggedIn: !!user,
    login,
    logout,
    updateProfile,
    addNotification,
    markNotificationAsRead,
    clearAllNotifications,
    updatePreferences,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser deve essere usato all'interno di un UserProvider");
  }

  return context;
};
