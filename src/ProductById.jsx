import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }
  render() {
    // console.log("render- product");
    return (
      <React.Fragment>
        <div className="row">
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

                <div className="float-right">{this.props.children}</div>
                <Link
                  to="/cart"
                  className="btn btn-secondary p-1 border-primary "
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount = async () => {
    document.title = `${this.state.product.productName}-eCommerce`;

    try {
      const id = this.props.match.params.id;
      const response = await fetch(`http://localhost:5000/Products/${id}`, {
        method: "GET",
      });
      const body = await response.json();

      if (body) {
        this.setState({ product: body });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default ProductById;
