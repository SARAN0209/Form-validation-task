import React, { useState } from "react";
import  "./Form.css";
import {
    validName,
    validEmail,
    validPassword,
    validMobileNumber,
  } from "./regex.js";


const Form =()=>{

    const showErrMsg = {
        color: "red",
    }

    //initialize user data
    const [userData, setUserData] = useState ({
        name:"",
        email:"",
        password:"",
        mobileNumber:"",
    });

    // get values dynamically

    const handleChange = (e)=> {
        setUserData({...userData,[e.target.name]: e.target.value});
    };

     // to store as boolean to display error msg
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [numError, setNumError] = useState(false);

    // validate using regex method
     const validate = (e) =>{
        e.preventDefault();

        !validName.test(userData.name) ? setNameErr(true) : setNameErr(false);
        !validEmail.test(userData.email) ? setEmailErr(true) : setEmailErr(false);
        !validPassword.test(userData.password) ? setPwdError(true) : setPwdError(false);
        !validMobileNumber.test(userData.mobileNumber) ? setNumError(true) : setNumError(false);
        if(nameErr===false&& emailErr===false&& pwdError===false&& numError===false  ) {
            alert("Form valid successfully")
        }else {
            alert("please fill the all data")
        }
     }
    
   

    return(
        <div className='Form'>
        <div className='card'>
        <h2>FORM VALIDATION</h2>
        <form onSubmit={validate}>
            <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input 
                id="name" 
                className="form-control" 
                placeholder="Enter Name"
                name='name' 
                value={userData.name} 
                type="text" 
                onChange={(e)=>handleChange(e)}/>
            </div>
            {nameErr ? (
            <span style={showErrMsg}>Please enter valid name*</span> 
            ) : null}

            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                 id="email" 
                 className="form-control"
                 placeholder="Enter Email"
                 name='email' 
                 value={userData.email} 
                 type="email" 
                 onChange={(e)=>handleChange(e)}/>
            </div>
            {emailErr ? (
            <span style={showErrMsg}>Please enter valid email*</span> 
            ) : null}

            <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input
                 id="password" 
                 className="form-control" 
                 placeholder="Enter Password"
                 name='password' 
                 value={userData.password} 
                 type="password" 
                 onChange={(e)=>handleChange(e)} />
               </div>
            {pwdError ? (
            <span style={showErrMsg}>password min 8 characters Atlest 1 number*</span> 
            ) : null}

            <div className="form-group">
                <label htmlFor="mobileNumber">MOBILENUMBER</label>
                <input 
                id="mobileNumber" 
                className="form-control" 
                placeholder="Enter Mobilenumber"
                name='mobileNumber' 
                value={userData.mobileNumber} 
                type="number" 
                onChange={(e)=>handleChange(e)}/>
            </div>
            {numError ? (
            <span style={showErrMsg}>Please enter valid MobileNumber*</span> 
            ) : null}

            <div className="form-group">
                <input className='btn btn-primary mt-2' type='submit' value='VALIDATION' />
            </div>
        </form>
        </div>
    </div>
    )
}

export default Form;