import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Navbar /><Outlet /></>}></Route>
    </Routes>
  );
};

export default App;
