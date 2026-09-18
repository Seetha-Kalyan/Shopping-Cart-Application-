import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
    };
  }
  render() {
    // console.log("render- product");
    return (
      <React.Fragment>
        <div className="col-lg-6  col-md-*">
          <div className="card mt-2">
            <div className="card-body">
              <div className="text-muted">
                {this.state.product.id}
                <span
                  className="pull-right hand-icon"
                  onClick={() => {
                    this.props.onDelete(this.state.product);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </span>
              </div>
              <h4 className=" pt-3 border-top">
                {this.state.product.productName}
              </h4>
              <div>{this.state.product.price}</div>
            </div>
            <div className="card-footer d-flex flex-row justify-content-between">
              <div className="float-left">
                <span className="badge bg-primary border-secondry">
                  {this.state.product.quantity}
                </span>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-primary btn-warning"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 20);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-primary btn-warning"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="float-right">
                <Link
                  to={`product/${this.state.product.id}`}
                  className="mr-2  p-3"
                >
                  Details
                </Link>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount - product");
  }
}

export default Product;
