import React, { Component } from "react";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h4>PageNotFound</h4>
      </div>
    );
  }
  componentDidMount() {
    document.title = "404 page-eCommerce";
  }
}

export default PageNotFound;
