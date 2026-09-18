import React, { Component } from "react";
import history from "./history";

export default class NewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      image: "",
      gender: "",
      mobile: "",
      email: "",
    };
  }

  render() {
    return (
      <div className="row">
        <div className=" col-lg-6 mx-auto">
          <h4 className="p-2 border-top ">New Customer</h4>
          <form>
            <div className="form=group from-row">
              <label className="col-lg-4">Customer Name:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row ">
              <label className="col-lg-4">City:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4"> Image:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.image}
                  onChange={(event) => {
                    this.setState({ image: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4"> Job:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.job}
                  onChange={(event) => {
                    this.setState({ job: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4"> Gender:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.gender}
                  onChange={(event) => {
                    this.setState({ gender: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4"> Salary:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.salary}
                  onChange={(event) => {
                    this.setState({ salary: event.target.value });
                  }}
                ></input>
              </div>
              <div className="  mx-auto p-3">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onSaveClick}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    document.title = "Edit-eCommerce";
    let id = this.props.match.params.id;

    let response = await fetch(`http://localhost:5000/Customers/${id}`, {
      method: "GET",
    });

    let body = await response.json();
    if (response.ok) {
      this.setState({
        name: body.name,
        city: body.location?.city || "",
        image: body.image,
        gender: body.gender,
        mobile: body.mobile,
        email: body.email,
      });
    } else {
      console.log(`Error` + response.status);
    }
  };
  onSaveClick = async (event) => {
    event.preventDefault();

    var customer = {
      name: this.state.name,
      location: { city: this.state.city },
      image: this.state.image,
      gender: this.state.gender,
      mobile: this.state.mobile,
      email: this.state.email,
    };
    let id = this.props.match.params.id;
    var res = await fetch(`http://localhost:5000/Customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(customer),
      headers: { "Content-type": "application/json" },
    });
    if (!res.ok) {
      console.error(`Update failed: ${res.status}`);
      return;
    }
    var cust = await res.json();
    console.log(cust);

    if (cust) {
      this.props.history.replace("/list");
    }
  };
}
