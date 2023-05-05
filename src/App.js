import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Routes/about/about";
import Home from "./Routes/Home/home";
import SignIn from "./Routes/SignIn/signin";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
