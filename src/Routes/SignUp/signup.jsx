import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import Typed from "react-typed";
import Validation from "../../components/Validation/validation";

const SignUp = () => {

  const [values, setValues]= useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    confirm_password:''
  });

  const [errors,setErrors] = useState({});
  
    const handleChange = (e)=>{
          setValues({...values, [e.target.name]: [e.target.value]})
    }

    function handleSubmit(e){
      e.preventDefault();
      setErrors(Validation(values))
    }




  return (
    <div className="flex justify-center bg-cyan-500 items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-center text-black font-bold text-2xl mb-4">
          Create An <Typed strings={["Account"]} typeSpeed={40} />
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="first_name"
            type="text"
            placeholder="Enter your name"
            // value={name}
            onChange={handleChange}
            // required
          />
          {errors.first_name && <p style={{color:"red"}}> {errors.first_name} </p> }

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="last_name"
            type="text"
            placeholder="Enter your name"
            // value={name}
            onChange={handleChange}
            // required
          />
          {errors.last_name && <p style={{color:"red"}}> {errors.last_name} </p> }

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            // value={email}
            onChange={handleChange}
            // required
          />
          {errors.email && <p style={{color:"red"}}> {errors.email} </p> }

        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            // value={password}
            onChange={handleChange}
            // required
          />
          {errors.password && <p style={{color:"red"}}> {errors.password} </p> }
          
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            // value={password}
            onChange={handleChange}
            // required
          />
          {errors.password && <p style={{color:"red"}}> {errors.password} </p> }
          
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>
          <Link
            to="/login"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Already have an account? Log in.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
