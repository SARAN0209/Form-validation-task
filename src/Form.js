import React from "react";
import  "./Form.css"
const Form =()=>{

    return(
        <div className='Form'>
        <div className='card'>
        <h2>FORM VALIDATION</h2>
        <form >
            <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input id="name" className="form-control" name='name' type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input id="email" className="form-control" name='email' type="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input id="password" className="form-control" name='password' type="password" />
            </div>
            <div className="form-group">
                <label htmlFor="mobileNumber">MOBILENUMBER</label>
                <input id="mobileNumber" className="form-control" name='mobilenumber' type="number"/>
            </div>
            
            <div className="form-group">
                <input className='btn btn-primary mt-2' type='submit' value='VALIDATION' />
            </div>
        </form>
        </div>
    </div>
    )
}

export default Form;