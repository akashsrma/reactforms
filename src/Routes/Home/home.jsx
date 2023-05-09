import React from "react";
import Footer from "../Footer/footer";
import { GrLinkNext } from "react-icons/gr";
// import resume from "../../assets/images/resume.jfif";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import Typed from "react-typed";
import design from "../../assets/images/design.jpg"

function Home() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0">
          <div className=" md:grid md:grid-cols-2 md:gap-6">
            <div
              className=" w-full flex h-screen bg-cover bg-center bg-no-repeat items-center justify-center gap-[2rem] flex-col mt-5 md:mt-0 md:col-span-2"
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/15473887/pexels-photo-15473887.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`,
              }}
            >
              <h2 className="text-4xl font-bold text-white">
                <Typed strings={["Welcome to Our Website"]} typeSpeed={40} />
              </h2>
              <p className=" text-center text-gray-400 text-2xl">
                TCS is an IT services, consulting and business solutions
                organization that has been partnering with many of the world’s
                largest businesses in their transformation journeys for over 50
                years.
              </p>
              <div
                className="mt-5"
                animate={{
                  x: 100,
                  opacity: 1,
                }}
              >
                <Link
                  to={"/profile"}
                  className="inline-flex items-center justify-center w-80 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Create Your Profile
                  <GrLinkNext className="mx-[1rem] text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={design} alt="design" className="my-3" />
          </div>
          <div className="flex flex-col  justify-center items-center">
            <p className="text-white text-3xl shadow-lg ">
              Turning Vision Into Reality With Code And Design
            </p>
            <p className="text-white mx-3 my-2">
            A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.
            </p>
            {/* <button className="text-white .rounded-2xl .border-white my-3">RESUME</button> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
