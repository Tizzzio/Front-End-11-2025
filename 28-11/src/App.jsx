import "./App.css";
import { users } from "./data/users";
import UserList from "./components/organisms/UserList";

function App() {
  console.log(users);
  return <UserList users={users} />;
}

export default App;
