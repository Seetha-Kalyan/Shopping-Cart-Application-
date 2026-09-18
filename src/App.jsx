import React, { Component } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFount";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";
import SideBar from "./SideBar";
import ProductById from "./ProductById";
import NewCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Register from "./Registration";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <HashRouter>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ? <SideBar></SideBar> : ""}
            </div>

            <div className="col-lg-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/list" exact component={CustomerList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductById} />
                <Route path="/new-customer" exact component={NewCustomer} />
                <Route
                  path="/edit-customer/:id"
                  exact
                  component={UpdateCustomer}
                />
                <Route path="/register" exact component={Register} />
                <Route path="*" exact component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
export default App;
