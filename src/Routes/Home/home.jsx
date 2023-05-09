import React from "react";
import Footer from "../Footer/footer";
import { GrLinkNext } from "react-icons/gr";
import resume from "../../assets/images/resume.jfif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "react-typed";

function Home() {
  return (
    <div className="bg-black relative">
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
        <div>
          <img src={resume} alt="resume" className="my-3" />
        </div>
        <div className="w-full h-96 flex justify-between p-1">
          <motion.div 
          whileHover={{
            scale:1.1,
            
          }}
          transition={{
            duration:1
          }}
          className="w-96 h-96 opacity-50" style={{
            backgroundImage:`url("https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600")`
          }}>
            <button className="bg-white text-black p-2 rounded-full ">Internet of things</button>
          </motion.div>
          <motion.div
          whileHover={{
            scale:1.1,
            
          }}
          transition={{
            duration:1
          }}
          className="w-96 h-96 bg-center opacity-50" style={{
            backgroundImage:`url("https://images.pexels.com/photos/1251841/pexels-photo-1251841.jpeg?auto=compress&cs=tinysrgb&w=600")`
          }}>
            <button className="bg-white text-black p-2 rounded-full">Sustainability</button>
          </motion.div>
          <motion.div 
          whileHover={{
            scale:1.1,
            
          }}
          transition={{
            duration:1
          }}
          className="w-96 h-96 bg-center opacity-50" style={{
            backgroundImage:`url("https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=600")`
          }}>
            <button className="bg-white text-black p-2 rounded-full">Metaverse</button>
          </motion.div>
        </div>
        <div className="w-full h-screen  flex justify-center">
          <div className="w-[70%] text-left h-screen flex justify-center flex-col gap-10">
            <p className="text-2xl font-bold text-gray-500">Building Collective Knowledge</p>
            <h2 className="text-white text-5xl">Answer a few questions to discover a trove of insights customized for you.</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-96 h-96 bg-gray-900 rounded-md">
            <h3 className="text-center text-5xl p-10 text-white">Are you committed to transitioning your business to hybrid work?</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <button className="p-4 px-20 text-2xl rounded-full bg-white">Contact Us</button> */}
    </div>
  );
}

export default Home;
