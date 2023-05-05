// import './App.css';
import {useFormik } from "formik";
import * as Yup from "yup";
// import {useRouter} from  "next/router"
// import {Route, Router, Routes} from "react-router-dom"
// import { Success } from "./pages/success/success";
// import { useRoutes } from "react-router";

function Signin() {
    // const routes = useRoutes();
      // <Router>
      //   <Routes>
      //     <Route path="/success" element={<Success />}></Route>
      //   </Routes>
      // </Router>
  // const router = Router('');
  const Formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      country:'united States',
      terms:''
    },

    validationSchema:Yup.object({
      name:Yup.string().max(20,"Name must be 20 charracters or less.")
      .required("Name is required"),
      email:Yup.string().email('Invalid email address')
      .required('Email is required'),
      terms:Yup.array().required("Terms of service must be checked"),

    }),
    handleSubmit:(values)=>{
      console.log(values);
      // router.push({Pathname:"/success", query:values});
    }
  });

  // console.log(Formik.values);

console.log(Formik.errors);



  return (
    <div className="App">
      <main className="h-screen flex items-center justify-center">
        <form
          onSubmit={Formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2 font-latoRegulat"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold">
              Lets' Get Started 👋
            </h1>
            <p className="text-lg text-gray-500">
              Join our e-learning platform today and unlock over 500+ courses
              and digital assests ready to download.
            </p>

            <div className="mt-6">
              {/* name input field */}
              <div className="pd-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    Formik.errors.name ? "text-red-400" : ""
                  }`}
                  htmlFor="name"
                >
                  {Formik.touched.name && Formik.errors.name
                    ? Formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={Formik.values.name}
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
              </div>
              {/* Email input field */}
              <div className="pd-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    Formik.errors.name ? "text-red-400" : ""
                  }`}
                  htmlFor="email"
                >
                  {Formik.touched.name && Formik.errors.email
                    ? Formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  placeholder="Enter your email"
                />
              </div>
              {/* Country input field */}
              <div className="pd-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  name="country"
                  value={Formik.values.country}
                  onChange={Formik.handleChange}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Norway</option>
                </select>
              </div>
              {/* Terms of Service*/}
              <div className="pd-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${Formik.errors.name ? "text-red-400": ""}`}
                  htmlFor="terms"
                >
                  {Formik.touched.terms && Formik.errors.terms
                    ? Formik.errors.terms
                    : "Terms of Service"}
                </label>
                <div className="flex item-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onBlur={Formik.handleBlur}
                    onChange={Formik.handleChange}
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start
              </button>
            </div>
          </div>
          {/* <div className="relative flex-1">
            <img src={Logo} alt="form-learn" fill className="h-auto rounded-lg" />
          </div> */}
        </form>
      </main>
    </div>
  );
}

export default Signin;

