import React from 'react';
import Footer from '../Footer/footer';
import {GrLinkNext} from "react-icons/gr"

function Home() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            
            <div className=" w-full flex h-screen bg-cover bg-center bg-no-repeat items-center justify-center gap-[2rem] flex-col mt-5 md:mt-0 md:col-span-2" style={{
              backgroundImage:`url("https://images.pexels.com/photos/15473887/pexels-photo-15473887.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`
            }}>
              <h2 className="text-4xl font-bold text-white">Welcome to our website</h2>
              <p className=" text-center text-gray-400 text-2xl">TCS is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 50 years.</p>
              <div className="mt-5">
                <a href="home.jsx" className="inline-flex items-center justify-center w-80 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Create Your Profile       
                   <GrLinkNext className='mx-[1rem] text-white' />
                </a>
              </div>
            </div>
          <div className="mt-20 flex justify-around items-center flex-wrap">
            
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-56 object-cover"
                // src={Logo}
                alt="Team member"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">John Doe</div>
                <p className="text-gray-700 text-base">
                  John Doe was a dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-56 object-cover"
                // src={Logo}
                alt="Team member"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">John Doe</div>
                <p className="text-gray-700 text-base">
                  John Doe was a dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-56 object-cover"
                // src={Logo}
                alt="Team member"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">John Doe</div>
                <p className="text-gray-700 text-base">
                  John Doe was a dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
