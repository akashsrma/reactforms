import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Routes/about/about";
import Home from "./Routes/Home/home";
// import SignIn from "./Routes/SignIn/signin";
import Login from "./Routes/Login/login";
import Profile from "./Routes/Profile/profile";
import SignUp from "./Routes/SignUp/signup";
import { AuthContextProvider } from "./context/authContext";
<<<<<<< HEAD
=======

>>>>>>> f738cf88f5142e5f2fb14ca7642e7a8c592aa104
function App() {
  return (
    <AuthContextProvider>
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
        <Route path="/signup" element={<SignUp  name="John Doe"
        image="https://example.com/profile.jpg"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus velit vitae quam lobortis, at semper libero commodo."
      />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
