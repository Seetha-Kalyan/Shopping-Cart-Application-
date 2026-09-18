import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  constructor(props) {
    // console.log("constructor-life");
    super(props);

    this.state = {
      Products: [],
    };
  }
  render() {
    //console.log("render-life");
    // console.log(this.props);
    return (
      <React.Fragment>
        <div>
          <h2 className=" tw-b fs-1 text-center mb-2 border-bottom bg-for-head">
            Shopping Cart
          </h2>
          <div className="row">
            {this.state.Products.map((prod) => {
              return (
                <Product
                  key={prod.id}
                  product={prod}
                  onIncrement={this.onHandleIncrement}
                  onDecrement={this.onHandleDecrement}
                  onDelete={this.onHandleDelete}
                >
                  <button className="btn btn-info btn-rounded pills btn-lg text-black mt-2 p-2">
                    Buy Now
                  </button>
                </Product>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
  // executes after the constructor and render(life cycle phases of child component if any one is present)
  componentDidMount = async () => {
    document.title = "Cart-eCommerce";

    try {
      var response = await fetch("http://localhost:5000/Products");

      var prods = await response.json();

      this.setState({ Products: prods });
      console.log(prods);
    } catch (error) {
      console.log(error);
    }
  };
  // able to write https,api requests
  //console.log("componentDidMount -life");

  /**var promise = fetch("http://localhost:5000/Products");
    promise.then((res) => {
      console.log("response received");
      console.log(res);

      var promise2 = res.json();
      promise2.then((prods) => {
      console.log(prods);

        this.setState({
          Products: prods,
        });
      });
    }); */

  componentDidUpdate(prevProps, prevState) {
    {
      /*} console.log(
      "componentDisUpdate",
      prevProps,
      prevState,
      this.props,
      this.state,
    );*/
    }
  }

  componentDidCatch(error, info) {
    {
      /*} console.log("componentDidCatch--life");
    console.log(error, info);
    localStorage.lastError`${error}\n${JSON.stringify(info)}`;*/
    }
  }

  onHandleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.Products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ Products: allProducts });
    }
  };

  onHandleDecrement = (product, minValue) => {
    let allProducts = [...this.state.Products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ Products: allProducts });
    }
  };

  onHandleDelete = (product) => {
    let allProducts = [...this.state.Products];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure to delete")) {
      allProducts.splice(index, 1);
      this.setState({ Products: allProducts });
    }
  };
}
export default ShoppingCart;
