import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h4>Dahboard</h4>
      </div>
    );
  }

  componentDidMount() {
    document.title = "Dahboard-eCommerce";
  }
}
export default Dashboard;
