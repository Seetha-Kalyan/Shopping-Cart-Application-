import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomerList extends Component {
  state = {
    title: "Customers",
    customerCount: 5,
    Customers: [],
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="border bottom p-2">{this.state.title}</h1>

        <Link to="/new-customer" className="btn btn-primary ">
          New Customer
        </Link>

        <table className="table table-br-2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Images</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{this.showTable()}</tbody>
        </table>
      </React.Fragment>
    );
  }
  componentDidMount = async () => {
    document.title = "Customers-eCommerce";

    let response = await fetch("http://localhost:5000/Customers", {
      method: "GET",
    });

    if (response.ok) {
      let customers = await response.json();
      if (customers) this.setState({ Customers: customers });
    } else {
      console.log("Error" + response.status);
    }
  };

  showSalary = (salary) => {
    if (salary !== undefined && salary !== null && salary !== "") {
      return salary;
    }
    return <div className="bg-primary b-danger p-2">disclosed</div>;
  };

  showTable = () => {
    return this.state.Customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.image} alt="Images" />
            <div>
              <button
                className="btn btn-secondry"
                onClick={() => {
                  this.changeImage(cust, index);
                }}
              >
                change image
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{cust.gender}</td>
          <td>{cust.mobile}</td>
          <td>{this.showSalary(cust.email)}</td>
          <td>{cust.location?.city}</td>
          <td>
            <Link
              to={`/edit-customer/${cust.id}`}
              className="btn btn-secondary"
            >
              edit
            </Link>
            <button
              type="button"
              className="btn btn-danger p-2 mr-2"
              onClick={() => this.onClickDelete(cust.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  changeImage = (cust, index) => {
    var customerArr = this.state.Customers;
    customerArr[index].image = "https://picsum.photos/id/1010/50";

    this.setState({ Customers: customerArr });
  };

  onClickDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    let response = await fetch(`http://localhost:5000/Customers/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      let allCustomers = this.state.Customers.filter((cust) => {
        return cust.id !== id;
      });
      this.setState({
        Customers: allCustomers,
        customerCount: allCustomers.length,
      });
    } else {
      console.error("Delete failed", response.status);
    }
  };
}

export default CustomerList;
