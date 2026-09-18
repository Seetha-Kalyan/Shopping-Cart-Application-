import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <span className="p-2 m-3 border-bottom  text-color">Login</span>
          <div className="form-group form-row mx-auto">
            <label className="col-lg-4">Email:</label>
            <input
              type="text"
              className="form-control "
              value={this.state.email}
              placeholder="enter your email"
              onChange={(event) => {
                this.setState({
                  email: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="form-group form-row">
            <label className="col-lg-4">Password:</label>
            <input
              type="password"
              className="form-control "
              value={this.state.password}
              placeholder="enter your password"
              onChange={(event) => {
                this.setState({
                  password: event.target.value,
                });
              }}
            ></input>
          </div>
        </div>
        <div className=" d-flex flex-row justify-content-center">
          <span>{this.state.message}</span>
          <button
            className="btn btn-primary border-rounded pills p-2 m-3 text-center "
            onClick={this.onClickLogin}
          >
            Login
          </button>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    document.title = "Login-eCommerce";
  }

  onClickLogin = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/Credentials?email=${encodeURIComponent(this.state.email)}&password=${encodeURIComponent(this.state.password)}`,
        { method: "GET" },
      );

      const credential = await response.json();
      console.log(credential);

      if (credential.length > 0) {
        this.setState({
          message: (
            <span className="text-success fs-3 p-2">Login successfully</span>
          ),
        });

        this.props.updateIsLoggedInStatus(true);
        this.props.history.replace("/Dashboard");
      } else {
        this.setState({
          message: <span className="text-danger fs-3 p-2">invalid Login</span>,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        message: (
          <span className="text-danger fs-3 p-2">
            Unable to connect to server
          </span>
        ),
      });
    }
  };
}

export default Login;
