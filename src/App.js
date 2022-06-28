import './App.css';
import Navbar1 from './Common/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Signing from './Home/SignIn-Up';
import HomePage from './Home/HomePage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar1 />
    

    <Routes>
      <Route path='/signing' element={<Signing/>} />
      <Route path='/' element={<HomePage/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
