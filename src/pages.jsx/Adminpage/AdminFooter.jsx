import React from "react";

function AdminFooter() {
  return (
    <div>
      <footer className="bg-gray-900 relative">
        <div className="container mx-auto">
          <div className="border-b border-gray-700 pt-5 pb-5">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 mb-6">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-orange-500 text-2xl mr-4"></i>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">Find us</h4>
                    <span className="text-gray-500">1010 Avenue, sw 54321, Chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-6">
                <div className="flex items-center">
                  <i className="fas fa-phone text-orange-500 text-2xl mr-4"></i>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">Call us</h4>
                    <span className="text-gray-500">1234567890</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-6">
                <div className="flex items-center">
                  <i className="far fa-envelope-open text-orange-500 text-2xl mr-4"></i>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">Mail us</h4>
                    <span className="text-gray-500">mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 pb-5">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-6">
                <div>
                  <div className="mb-6">
                    <a href="index.html">
                      <img
                        src="src\assets\Images\Screenshot_2025-01-28_110216-removebg-preview.png"
                        alt="logo"
                        className="max-w-[200px]"
                      />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div>
                    <span className="text-white text-lg font-bold block mb-4">Follow us</span>
                    <a href="#" className="inline-block text-white text-lg bg-blue-600 p-3 rounded-full mr-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="inline-block text-white text-lg bg-blue-400 p-3 rounded-full mr-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="inline-block text-white text-lg bg-red-600 p-3 rounded-full">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mb-6">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-12 after:h-[2px] after:bg-orange-500">
                    Useful Links
                  </h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>
                      <a href="/home" className="hover:text-orange-500">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/AboutUs" className="hover:text-orange-500">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="hover:text-orange-500">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/Portfolio" className="hover:text-orange-500">
                       Add profile
                      </a>
                    </li>
                    <li>
                      <a href="/Contact" className="hover:text-orange-500">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-12 after:h-[2px] after:bg-orange-500">
                    Subscribe
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Don’t miss to subscribe to our new feeds, kindly fill the form below.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <p className="text-gray-500 text-sm text-center lg:text-left">
              Copyright &copy; 2018, All Rights Reserved{" "}
              <a href="https://codepen.io/anupkumar92/" className="text-orange-500">
                Anup
              </a>
            </p>
            <ul className="text-gray-500 text-sm flex space-x-6">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminFooter;
