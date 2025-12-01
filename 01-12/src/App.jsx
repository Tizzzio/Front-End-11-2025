import "./App.css";
// import EventsExample from "./components/EventsExample";
// import KeyboardEvents from "./components/KeyboardEvents";
// import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      {/* <EventsExample /> */}
      {/* <KeyboardEvents /> */}
      {/* <RegistrationForm /> */}
      <div>
        <h2>Login</h2>
        <LoginForm />
        <hr />
        <h2>Register</h2>
        <RegisterForm />
      </div>
    </>
  );
}

export default App;
