 const Validation = (values)=>{
        let error = {}
        const first_name_pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const Last_name_pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const email_pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.first_name === ''){
            error.first_name = "first_Name should not be empty"
        }
        if(first_name_pattern.test(values.first_name)){
            error.first_name = "first_Name Didn't Match"
        }
        if(values.last_name === ''){
            error.last_name = "last_Name should not be empty"
        }
        if(first_name_pattern.test(values.first_name)){
            error.last_name = "last_Name Didn't Match"
        }
        if(values.email === ''){
            error.email = "Email should not be empty"
        }
        if(email_pattern.test(values.email)){
            error.email = "Email Didn't Match"
        }
        if(values.password === ''){
            error.password = "Password should not be empty"
        }
        if(!password_pattern.test(values.password)){
            error.password = "Password Didn't Match"
        }
        if(String(values.confirm_password) !== String(values.password)){
            error.confirm_password ="Password not Matched"
        }
        
        return error;
 }

 export default Validation;