import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-info  d-flex flex-row justify-content-around gap-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {!this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link "
                      activeClassName="active"
                      exact={true}
                    >
                      Login
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {!this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link "
                      activeClassName="active"
                      exact={true}
                    >
                      Registration
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/dashboard"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Dahboard
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/list"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Customers
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/cart"
                      className="nav-link"
                      activeClassName="active"
                    >
                      ShoppingCart
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}

                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link pull-right"
                      onClick={this.onLogoutClick}
                    >
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  onLogoutClick = (event) => {
    window.alert("Are you want to Logout?");
    event.preventDefault();
    this.props.updateIsLoggedInStatus(false);
    document.location.hash = "/";
  };
}
export default Navbar;
