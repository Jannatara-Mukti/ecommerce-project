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
import NewAdmin from './components/Admin/NewAdmin/NewAdmin';
import ManageProducts from './components/Admin/ManageProducts/ManageProducts';
import UpdateProduct from './components/Admin/UpdateProduct/UpdateProduct';
import ManageOrders from './components/Admin/ManageOrders/ManageOrders';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/addItem" element={<AddItem />}/>
        <Route exact path="/newAdmin" element={<NewAdmin />}/>
        <Route exact path="/manageProducts" element={<ManageProducts />}/>
        <Route exact path="/updateProduct" element={<UpdateProduct />}/>
        <Route exact path="/manageOrders" element={<ManageOrders />}/>
        <Route exact path="/aboutus" element={<AboutUs />}/>
        <Route exact path="/blog" element={<Blog />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
