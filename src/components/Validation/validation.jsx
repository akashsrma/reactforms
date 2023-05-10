 const Validation = (values)=>{
        let error = {}
        const email_pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.email === ''){
            error.email = "Email should not be empty"
        }
        if(email_pattern.test(values.email)){
            error.email = "Email Didn't Match"
        }
        if(values.password === ''){
            error.password = "Password should not be empty"
        }
        if(password_pattern.test(values.password)){
            error.password = "Password Didn't Match"
        }
        
        return error;
 }

 export default Validation;