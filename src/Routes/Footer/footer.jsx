import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 my-4 rounded-2xl">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="don"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="careers"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="contact"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="privacy"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="terms of service"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Product
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="Features"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="Pricing"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="Faq"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Resources
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="Blog"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="Docs"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="support"
                      className="text-base leading-
6 text-gray-300 hover:text-white"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mt-4 text-gray-300 leading-6">
              Get the latest news and updates straight to your inbox.
            </p>
            <form className="mt-4 sm:flex">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="py-3 px-4 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo sm:max-w-xs sm:text-sm sm:leading-5"
              />
              <button
                type="submit"
                className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto px-6 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            © 2023 ACME Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;