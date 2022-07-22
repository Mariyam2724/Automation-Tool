import { Formik } from 'formik';
import React from 'react';

const Register = () => {

//  1. submission function
const userSubmit = async (formdata) =>{
    console.log(formdata);
    
    //  1. reuest url
    //  2. request method- get put post delete
    //  3. request body
    //  4. data format 

    // await will execute this function synchronously

    const response= await  fetch('http://localhost:5000/user/add', {
        method: 'POST', 
        body : JSON.stringify(formdata),
        headers: {
            'Content-Type': 'application/json'
        }

    })

    // ajax asynchronous javascript n xml
//  ==== type same
     if(response.status===200)
     {console.log(' Success');
    }else{
        console.log('Failed');
    }
}

// 2. use formik in JSX


  return (
    <div className="conatiner">
        <h1 className="form-title" style={{ textAlign : 'center'}}>Register Here to Continue</h1>

        <Formik initialValues={{ name: '', email: '', age : 0, password :'' }} onSubmit={userSubmit}>
        
        { ({ values, handleChange, handleSubmit})=> (
             
             <form onSubmit={handleSubmit} >
            
             <input value={values.name} onChange={handleChange} id="name" placeholder="Name" className="form-control mt-4"/>
             <input value={values.age} onChange={handleChange} id="age" placeholder="Age" className="form-control mt-4"/>
             
             <input value={values.email} onChange={handleChange} id="email" placeholder="Enter Valid Email" className="form-control mt-4"/>
             <input value={values.password} onChange={handleChange} id="password" placeholder="Enter Secure Password" className="form-control mt-4" type="password"/>
             
             {/* type- button , submit, reset */}
             <button type='submit' className='btn btn-primary mt-5'>SUMBIT</button>
            </form>

        )}
        </Formik>

       
        </div>
  )
}

export default Register;