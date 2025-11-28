const DarkLight = ({ children, theme }) => {
  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "10px",
    borderRadius: "5px",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };
  return <div style={style}>{children}</div>;
};

export default DarkLight;
