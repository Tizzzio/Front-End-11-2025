import { Route, Routes } from "react-router-dom";
//import Pagine
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contacts from "../pages/Contacts.jsx";
import User from "../components/User.jsx";
import NotFound from "../components/NotFound.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/user/:id" element={<User />} />
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
