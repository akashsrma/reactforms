import React from 'react';
import Footer from '../Footer/footer';

function Home() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">Welcome to our website</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum tristique lacus, vel commodo sapien. Nullam sed urna euismod, dictum turpis eu, sagittis urna.</p>
              <div className="mt-5">
                <a href="home.jsx" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </a>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-64 object-cover object-center" src="https://images.unsplash.com/photo-1520699496252-5a810fda9667?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="A person typing on a laptop"/>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">Stay productive</h3>
                  <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum tristique lacus, vel commodo sapien.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-64 object-cover object-center" src="https://images.unsplash.com/photo-1546908981-efceda4769c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="A person working on a computer"/>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">Improve your skills</h3>
                  <p className="mt-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum tristique lacus, vel commodo sapien.</p>
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
