import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>

       <Route path="/login" element={<Login />}></Route>

       <Route path="/register" element={<Register />}></Route>
 

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
