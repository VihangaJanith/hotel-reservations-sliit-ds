import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Orders from "./screens/Orders";
import Adminscreen from "./screens/Adminscreen";
import Taxy from "./screens/Taxy";
import OrderedTaxi from "./screens/OrderedTaxi";
import HotelAdminScreen from "./screens/HotelAdminScreen";
import Orderslist from "./screens/Orderslist";
import Userslist from "./screens/Userslist";
import Taxilist from "./screens/Taxilist";
import Addpackage from "./screens/Addpackage";
import HomeScreenPkg from "./screens/HomeScreenPkg";
import Packageslist from "./screens/Packageslist";
import Editpackage from "./screens/Editpackage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navibar />
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/homepkg" />
        </Route>
        {/* 
    <Route path="/" exact component={Homescreen}/> */}
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/ord" exact component={Orders} />
        <Route path="/admin" component={Adminscreen} />
        {/* <Route path="/taxy/:orderid?/:orderamount?"   exact component={Taxy}/> */}
        <Route path="/taxy/:orderid" exact component={Taxy} />
        <Route path="/taxiord" exact component={OrderedTaxi} />
        <Route path="/hoteladmin" component={HotelAdminScreen} />
        <Route path="/admin/userslist" component={Userslist} />
        <Route path="/admin/orderslist" component={Orderslist} />
        <Route path="/admin/taxilist" component={Taxilist} />
        <Route path="/admin/addpackage" component={Addpackage} />
        <Route path="/homepkg" component={HomeScreenPkg} />
        <Route path="/admin/packageslist" component={Packageslist} />
        <Route path="/admin/editpackage/:packageid" component={Editpackage} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
