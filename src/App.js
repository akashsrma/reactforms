import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './Routes/about/about';
import ContactUs from './Routes/ContactForm/contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Navbar /><Outlet /></>}>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<ContactUs />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
