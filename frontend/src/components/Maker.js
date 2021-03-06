import React, { Component } from "react";
import { Formik } from "formik";
import axios from "axios";

class Maker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleCreatePost(values) {
    console.log(values);

    this.fileUpload(this.state.file, values).then((response) => {
      console.log(response.data);
    });
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  fileUpload(file, values) {
    setTimeout(
      () => alert("You file wii be uploaded soon and Naya studio welcomes you"),
      500
    );
    const url = "http://localhost:5000/upload";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("material", values.material);
    formData.append("mcapacity", values.mcapacity);
    formData.append("location", values.location);
    const config = {
      headers: {
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
    };
    return axios.post(url, formData, config);
  }

  handleClick() {
    const fileInput = document.getElementById("fileInput");

    if (fileInput) {
      fileInput.click();
    }
  }

  handleFileInput(event) {
    if (event.target.files[0] !== undefined) {
      this.setState({ file: event.target.files[0].name });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <Formik
            initialValues={{
              email: "",
              password: "",
              mcapacity: 1,
              material: "",
              location: "",
              image: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, ...rest) =>
              this.handleCreatePost(values, ...rest)
            }
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="section">
                  <input
                    style={{ borderRadius: "10px" }}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    style={{ borderRadius: "10px" }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <div className="section">
                  <h5>
                   How many projects on average do you work on every month?
                  </h5>

                  <p className="range-field">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      id="test5"
                      name="mcapacity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mcapacity}
                    />
                    <span>{values.mcapacity}</span>
                  </p>
                </div>
                <div className="section">
                  <h5>What kind of materials can you work with?</h5>
                  <div className="input-field col s12">
                    <select
                      name="material"
                      value={values.material}
                      style={{ borderRadius: "10px", display: "block" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" label="Choose a option" />
                      <option
                        value="Wood"
                        label="Wood"
                      />
                      <option
                        value="Metal"
                        label="Metal"
                      />
                      <option
                        value="Glass"
                        label="Glass"
                      />
                      <option value="Concrete" label="Concrete" />
                      <option value="Plastic" label="Plastic" />
                      <option value="Other" label="Other" />
                    </select>
                  </div>
                </div>
                <div className="section">
                  <h5> Where are your based out of?</h5>
                  <input
                    style={{ borderRadius: "10px" }}
                    type="text"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />
                </div>
                <div className="section">
                  <div className="file-field input-field">
                    <div className="btn">
                      <span>File</span>
                      <input
                        style={{ borderRadius: "10px" }}
                        type="file"
                        name="image"
                        onChange={(e) => this.onChange(e)}
                      />
                    </div>
                    <div className="file-path-wrapper">
                      <input
                        className="file-path validate"
                        type="text"
                        placeholder="Upload one image"
                      />
                    </div>
                  </div>
                </div>
                <div className="u-btn">
                  <button
                    style={{ borderRadius: "10px" }}
                    className="btn waves-effect waves-light"
                    type="submit"
                  >
                    Upload
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Maker;
