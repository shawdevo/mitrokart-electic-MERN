import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.js";
import Headers from "./components/Headers.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import UserListScreen from "./screens/UserListScreen.js";
import UserEditScreen from "./screens/UserEditScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";

const App = () => {
  return (
    <Router>
      <Headers />
      <main className=" py-3">
        <Container>
          <Route path="/payment" exact component={PaymentScreen} />
          <Route path="/order/:id" exact component={OrderScreen} />
          <Route path="/admin/orderlist" exact component={OrderListScreen} />
          <Route path="/placeorder" exact component={PlaceOrderScreen} />
          <Route path="/shipping" exact component={ShippingScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route
            path="/admin/productlist"
            exact
            component={ProductListScreen}
          />
          <Route
            path="/admin/productlist/:pageNumber"
            exact
            component={ProductListScreen}
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/search/:keyword" exact component={HomeScreen} />
          <Route path="/" exact component={HomeScreen} />
          {/* this is to add the page no.   */}
          <Route path="/page/:pageNumber" exact component={HomeScreen} />
          {/* this is to add the pagination in the search products if you had search porducts that take more the one page */}
          <Route
            path="/search/:keyword/page/:pageNumber"
            exact
            component={HomeScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// for adding keyword functinality ... we goes to searchbox -> header.js -> homescreen.js-> also add route to app.js -> changes in get all product in productAction -> chnages in productController
