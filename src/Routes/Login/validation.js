import { useState } from "react"


const Validation = ()=>{
    const [values,] = useState([])
    let errors ={} 
    if(!values.email === ""){
        errors.email="Invalid Email Address"
    }
    else if(values.email.length < 5){
        errors.email = "Email must be more than 5 char"
    }

    if(values.password){
        errors.password = "password Required"
    }else if(values.password.length < 9){
        errors.password="password must be more than 5"
    }

        return errors;
}

export default Validation;