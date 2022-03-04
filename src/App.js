import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/LoginAndRegister/Login/Login';
import Register from './components/LoginAndRegister/Register/Register';
import AddItem from './components/Admin/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/addItem" element={<AddItem />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
