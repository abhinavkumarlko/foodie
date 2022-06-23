import { Formik } from "formik";
import React from "react";
import "./style.css";
import * as Yup from "yup";
import logo from "../images/logo.png";

import {
  Button,
  
  TextField,
} from "@mui/material";


const Register = () => {
  const handleFormSubmit = (formdata) => {
    console.log("Signup Successfull!");
    console.log(formdata);
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required field"),
    name: Yup.string().required(" Required field"), 
    address: Yup.string().required(" Required field"), 
    contact: Yup.number().required(" Required field"), 
    password: Yup.string().required(" Required field"),
  });


  return (
    <div
      className="container-fluid"
      style={{
        background:
          "linear-gradient(to right, rgba(37, 37, 37, 0.547),rgba(33, 33, 33, 0.524)),url('https://img.freepik.com/free-photo/food-background-tin-cans-canned-vegetables-beans-fish-fruits-white-wooden-background-top-view_187166-9552.jpg?w=1530') ",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container ">
        <div className="card ">
          <div className="card-body ">
            <img src={logo} alt="" className="img-logo1 " />

            <Formik
              initialValues={{
                name: "",
                email: "",
                address: "",
                contact: "",
                password: "",
                
              }}
              onSubmit={handleFormSubmit}
              validationSchema={loginSchema}

            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form onSubmit={handleSubmit}>
                   <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    label="Full Name"
                    placeholder="Name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                  />
                 
                  <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    label="Email"
                    placeholder="Email Address"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    label="Address"
                    placeholder="Address"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                    error={Boolean(errors.address)}
                    helperText={errors.address}
                  />
                  <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    type="number"
                    label="Contact"
                    placeholder="Contact Number"
                    id="contact"
                    value={values.contact}
                    onChange={handleChange}
                    error={Boolean(errors.contact)}
                    helperText={errors.contact}
                  />
                  <TextField
                        sx={{ mt: 3 }}
                        fullWidth
                        type="password"
                        label="Password"
                        placeholder="Password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                      />

                    

                 
                  <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt : 3, p:2  }}
                        color="success"
                      >
                        Submit
                      </Button>
                     
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
