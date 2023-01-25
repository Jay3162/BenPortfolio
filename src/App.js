import logo from './logo.svg';
import './App.css';
import Design1 from './pages/design 1/design1';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/design 1/d1-components/contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Design1/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
