import Navbar from "./components/NavBar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./app.css";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";


function App() {
  return (
    <Router>
        <Navbar />
        <div className="container">
          <SideBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="/newuser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:product_id">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
            
          </Switch>
         
        </div>
    </Router>
  );
}

export default App;
