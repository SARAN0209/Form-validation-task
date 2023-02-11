import React, { useState } from "react";
import {
    validName,
    validEmail,
    validPassword,
    validMobileNumber,
} from "./regex.js";


const Form = () => {

    const showErrMsg = {
        color: "red",
    }

    //initialize user data
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
    });

    // get values dynamically

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // to store as boolean to display error msg
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [numError, setNumError] = useState(false);

    // validate using regex method
    const validate = (e) => {
        e.preventDefault();

        !validName.test(userData.name) ? setNameErr(true) : setNameErr(false);
        !validEmail.test(userData.email) ? setEmailErr(true) : setEmailErr(false);
        !validPassword.test(userData.password) ? setPwdError(true) : setPwdError(false);
        !validMobileNumber.test(userData.mobileNumber) ? setNumError(true) : setNumError(false);
        const errKeys = Object.keys(userData).filter((key) => {
            if (userData[key] === "" && key !== "id" && key !== "error") {
              return key;
            }
          });
  if (errKeys.length >= 1) {
            alert("Please fill all Data");
          }
          else{
      alert("valid successfull")
    }
    setUserData({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    })
    }



    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px;" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">FORM VALIDATION</p>

                                        <form className="mx-1 mx-md-4" onSubmit={validate}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example1c">Your Name</label>
                                                    <input
                                                        id="name"
                                                        className="form-control"
                                                        placeholder="Enter Name"
                                                        name='name'
                                                        value={userData.name}
                                                        type="text"
                                                        onChange={(e) => handleChange(e)} />
                                                    {nameErr ? (
                                                    <span style={showErrMsg}>Please enter valid name*</span>
                                                ) : null}
                                                </div>
                                                
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                    <input
                                                        id="email"
                                                        className="form-control"
                                                        placeholder="Enter Email"
                                                        name='email'
                                                        value={userData.email}
                                                        type="email"
                                                        onChange={(e) => handleChange(e)} />
                                                     {emailErr ? (
                                                    <span style={showErrMsg}>Please enter valid email*</span>
                                                ) : null}
                                                </div>
                                               
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example4c">Password</label>
                                                    <input
                                                        id="password"
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        name='password'
                                                        value={userData.password}
                                                        type="password"
                                                        onChange={(e) => handleChange(e)} />
                                                         {pwdError ? (
                                                    <span style={showErrMsg}>Password should be 8 characters min 1 number*</span>
                                                ) : null}
                                                </div>
                                               
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example4cd">MobileNumber</label>
                                                    <input
                                                        id="mobileNumber"
                                                        className="form-control"
                                                        placeholder="Enter Mobilenumber"
                                                        name='mobileNumber'
                                                        value={userData.mobileNumber}
                                                        type="number"
                                                        onChange={(e) => handleChange(e)} />
                                                     {numError ? (
                                                    <span style={showErrMsg}>Please enter valid mobileNumber*</span>
                                                ) : null}
                                                </div>
                                               
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type='submit' value='VALIDATION' className="btn btn-primary btn-lg">VALIDATION</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://thumbs.dreamstime.com/b/man-holds-light-bulb-palm-his-hand-vector-cartoon-illustration-business-idea-concept-162845009.jpg"
                                            className="img-fluid" alt="Sample img" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;