import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fullname: "",
      mobile: "",
      gender: "",
      DOB: "",
      country: "",
      password: "",
      confirm_password: "",
      receiveNewsLetters: "",

      controls: [
        "email",
        "fullname",
        "mobile",
        "gender",
        "DOB",
        "country",
        "password",
        "confirm_password",
        "receiveNewsLetters",
      ],
      errors: {
        email: [],
        fullname: [],
        mobile: [],
        gender: [],
        DOB: [],
        country: [],
        password: [],
        confirm_password: [],
        receiveNewsLetters: [],
      },
      message: "",

      dirty: {
        email: false,
        fullname: false,
        mobile: false,
        gender: false,
        DOB: false,
        country: false,
        password: false,
        confirm_password: false,
        receiveNewsLetters: false,
      },
    };
  }

  render() {
    return (
      <div className="row  mt-3">
        <div className="col-lg-8 mx-auto">
          <h1 className="text-center">Register</h1>
          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label" htmlFor="email">
              Email:
            </label>
            <div className="col-lg-9 ">
              <input
                type="email"
                id="email"
                className="form-control"
                autoFocus="autofocus"
                value={this.state.email}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.email = true;
                  this.setState(
                    { email: event.target.value, dirty: dirty },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.email = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.email[0] && this.state.dirty.email
                  ? this.state.errors.email
                  : ""}
              </div>
            </div>
          </div>

          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label" htmlFor="name">
              FullName:
            </label>
            <div className="col-lg-9 ">
              <input
                type="text"
                id="name"
                className="form-control"
                value={this.state.fullname}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.fullname = true;
                  this.setState(
                    { fullname: event.target.value, dirty: dirty },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.fullname = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.fullname[0] && this.state.dirty.fullname
                  ? this.state.errors.fullname
                  : ""}
              </div>
            </div>
          </div>

          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label" htmlFor="mobile">
              Mobile:
            </label>
            <div className="col-lg-9 ">
              <input
                type="text"
                id="mobile"
                className="form-control"
                value={this.state.mobile}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.mobile = true;
                  this.setState(
                    { mobile: event.target.value, dirty: dirty },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.mobile = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.mobile[0] && this.state.dirty.mobile
                  ? this.state.errors.mobile
                  : ""}
              </div>
            </div>
          </div>

          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label">Gender:</label>
            <div className="col-lg-9">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="genderMale"
                  name="gender"
                  className="form-check-input"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={(event) => {
                    let dirty = { ...this.state.dirty };
                    dirty.gender = true;
                    this.setState(
                      { gender: event.target.value, dirty: dirty },
                      this.validate,
                    );
                  }}
                  onBlur={() => {
                    let dirty = { ...this.state.dirty };
                    dirty.gender = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                />
                <label className="form-check-label" htmlFor="genderMale">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="genderFemale"
                  name="gender"
                  className="form-check-input"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={(event) => {
                    let dirty = { ...this.state.dirty };
                    dirty.gender = true;
                    this.setState(
                      { gender: event.target.value, dirty: dirty },
                      this.validate,
                    );
                  }}
                  onBlur={() => {
                    let dirty = { ...this.state.dirty };
                    dirty.gender = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                />
                <label className="form-check-label" htmlFor="genderFemale">
                  Female
                </label>
              </div>
              <div className="text-danger">
                {this.state.errors.gender[0] && this.state.dirty.gender
                  ? this.state.errors.gender
                  : ""}
              </div>
            </div>
          </div>
          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label" htmlFor="dob">
              Date_of_Birth:
            </label>
            <div className="col-lg-9 ">
              <input
                type="date"
                id="dob"
                className="form-control"
                value={this.state.DOB}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.DOB = true;
                  this.setState(
                    { DOB: event.target.value, dirty: dirty },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.DOB = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.DOB[0] && this.state.dirty.DOB
                  ? this.state.errors.DOB
                  : ""}
              </div>
            </div>
          </div>
          <div className="from-group form-row row mb-2">
            <label className="col-lg-3  col-form-label" htmlFor="country">
              Country
            </label>
            <div className="col-lg-9">
              <select
                id="country"
                className="form-control"
                value={this.state.country}
                onChange={(events) => {
                  let dirty = this.state.dirty;
                  dirty.country = true;
                  this.setState(
                    {
                      country: events.target.value,
                      dirty: dirty,
                    },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.country = "true";
                }}
              >
                <option value="please select">please select</option>
                <option value="India">India</option>
                <option value="Russia">Russia</option>
                <option value="New zealand">New zealand</option>
                <option value="Japan">Japan</option>
                <option value="Italy">Italy</option>
                <option value="South Africa">South Africa</option>
                <option value="Austrlia">Australia</option>
              </select>
              <div className="text-danger">
                {this.state.errors.country[0] && this.state.dirty.country
                  ? this.state.errors.country
                  : ""}
              </div>
            </div>
          </div>

          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label" htmlFor="password">
              Password:
            </label>
            <div className="col-lg-9 ">
              <input
                type="password"
                id="password"
                className="form-control"
                value={this.state.password}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.password = true;
                  this.setState(
                    { password: event.target.value, dirty: dirty },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.password = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.password[0] && this.state.dirty.password
                  ? this.state.errors.password
                  : ""}
              </div>
            </div>
          </div>
          <div className="form-group form row mb-2">
            <label className="col-lg-3 col-form-label" htmlFor="password">
              Confirm Password:
            </label>
            <div className="col-lg-9 ">
              <input
                type="password"
                id="password"
                className="form-control"
                value={this.state.confirm_password}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.confirm_password = true;
                  this.setState(
                    { confirm_password: event.target.value, dirty: dirty },
                    this.validate,
                  );
                }}
                onBlur={() => {
                  let dirty = this.state.dirty;
                  dirty.confirm_password = true;
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.confirm_password[0] &&
                this.state.dirty.confirm_password
                  ? this.state.errors.confirm_password
                  : ""}
              </div>
            </div>
          </div>

          <div className="form-group form-row mb-2">
            <div className="col-lg-9 offset-lg-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="receiveNewsLetters"
                  className="form-check-input"
                  checked={this.state.receiveNewsLetters}
                  onChange={(event) => {
                    let dirty = { ...this.state.dirty };
                    dirty.receiveNewsLetters = true;
                    this.setState(
                      {
                        receiveNewsLetters: event.target.checked,
                        dirty: dirty,
                      },
                      this.validate,
                    );
                  }}
                  onBlur={() => {
                    let dirty = { ...this.state.dirty };
                    dirty.receiveNewsLetters = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="receiveNewsLetters"
                >
                  Receive NewsLetters
                </label>
                <div className="text-danger">
                  {this.state.errors.receiveNewsLetters[0] &&
                  this.state.dirty.receiveNewsLetters
                    ? this.state.errors.receiveNewsLetters
                    : ""}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="text-right ">{this.state.message}</div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  className="btn btn-success"
                  onClick={this.onClickRegister}
                >
                  Register
                </button>
              </div>

              <ul className="text-danger">
                {Object.keys(this.state.errors).map((control) => {
                  if (this.state.dirty[control]) {
                    return this.state.errors[control].map((err) => {
                      return <li key={err}>{err}</li>;
                    });
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  validate = () => {
    const nameRegex = /^[A-Za-z ]{3,30}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mobileRegex = /^[6-9]\d{9}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let errors = {};
    this.state.controls.forEach((control) => {
      errors[control] = [];
      switch (control) {
        case "email":
          if (!this.state[control]) {
            errors[control].push(" Email can't be blank");
          }
          if (this.state.email) {
            if (!emailRegex.test(this.state[control])) {
              errors[control].push("Proper email should be added ");
            }
          }

          break;
        case "fullname":
          if (!this.state[control]) {
            errors[control].push(" Name can't be blank");
          }
          if (this.state.fullname) {
            if (!nameRegex.test(this.state[control])) {
              errors[control].push(
                "Name can contain uppercase,lowercase, atleast 3 characters ,atmost 30 characters ",
              );
            }
          }
          break;

        case "mobile":
          if (!this.state[control]) {
            errors[control].push(" Mobile can't be blank");
          }
          if (this.state.mobile) {
            if (!mobileRegex.test(this.state[control])) {
              errors[control].push("Mobile Number should be 10  in digits ");
            }
          }
          break;
        case "gender":
          if (!this.state[control]) {
            errors[control].push(" please select the gender");
          }
          break;
        case "DOB":
          if (!this.state[control]) {
            errors[control].push(" DOB can't be blank");
          }
          if (this.state.DOB) {
            const dob = new Date(this.state[control]).getTime();
            const today = new Date().getTime();
            const eighteenYears = 18 * 365.25 * 24 * 60 * 60 * 1000;

            if (Number.isNaN(dob)) {
              errors[control].push("Please select a valid date.");
            } else if (today - eighteenYears < dob) {
              errors[control].push("Age must be atleast 18 years old");
            }
          }
          break;

        case "country":
          if (!this.state[control]) {
            errors[control].push("Please select the country");
          }
          break;
        case "password":
          if (!this.state[control]) {
            errors[control].push(" password can't be blank");
          }
          if (this.state.password) {
            if (!passwordRegex.test(this.state[control])) {
              errors[control].push(
                "Password must be one uppercase, atleast one lowercase,atleast one digit,one special symbol, must be atleast 8 characters ",
              );
            }
          }
          break;
        case "confirm_password":
          if (!this.state[control]) {
            errors[control].push(" confirm password can't be blank");
          }
          if (this.state.confirm_password) {
            if (this.state.password !== this.state.confirm_password) {
              errors[control].push(
                "confirm password doesnot match with password",
              );
            }
          }
          break;
        case "receiveNewsLetters":
          if (!this.state[control]) {
            errors[control].push("Please tick the box to receive mails");
          }
          break;
        default:
      }
    });

    this.setState({ errors });
    return errors;
  };

  isValid = (errors) => {
    let valid = true;
    for (let control in errors) {
      if (errors[control].length > 0) {
        valid = false;
      }
    }
    return valid;
  };

  onClickRegister = async () => {
    var dirty = { ...this.state.dirty };
    Object.keys(dirty).forEach((control) => {
      dirty[control] = true;
    });
    this.setState({ dirty: dirty }, async () => {
      const errors = this.validate();
      const valid = this.isValid(errors);

      if (valid) {
        let user = {
          id: nextId.toString(),
          email: this.state.email,
          fullname: this.state.fullname,
          mobile: this.state.mobile,
          gender: this.state.gender,
          DOB: this.state.DOB,
          country: this.state.country,
          password: this.state.password,
          confirm_password: this.state.confirm_password,
          receiveNewsLetters: this.state.receiveNewsLetters,
        };

        try {
          let response = await fetch("http://localhost:5000/Credentials", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" },
          });
          let body = await response.json();

          if (response.ok) {
            this.setState({
              message: (
                <span className="text-success">Registration Successful</span>
              ),
            });
          } else {
            console.log(response.status, body);
            this.setState({ message: "Registration failed" });
          }
        } catch (error) {
          console.error("Fetch error:", error);
          this.setState({ message: "Unable to reach the API" });
        }
      } else {
        this.setState({ message: "Invalid" });
      }
    });
  };
}
