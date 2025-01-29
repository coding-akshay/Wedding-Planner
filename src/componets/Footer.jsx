import React from 'react';

function Footer() {
  return (
    <div>
      {/* footer section start */}
      <footer id="footer" className="bg-gray-100 pt-28 pb-20 bg-cover bg-center" style={{ backgroundImage: "url('https://arena.km.ua/wp-content/uploads/3538533.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <a href="index.html">
                <img
                  src="src\assets\Images\Screenshot_2025-01-28_114805-removebg-preview.png"
                  alt=""
                  className="w-full max-w-xs"
                />
              </a>
              <p className="mt-4 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-4">Useful Links</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="mb-4" />
              <ul className="space-y-2">
                <li>
                  <a href="/home" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-solid fa-angles-right pr-2"></i> Home
                  </a>
                </li>
                <li>
                  <a href="/AboutUs" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-solid fa-angles-right pr-2"></i> About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-solid fa-angles-right pr-2"></i> Services
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-solid fa-angles-right pr-2"></i> Contact
                  </a>
                </li>
                <li>
                  <a href="/Vendor" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-solid fa-angles-right pr-2"></i> Vendor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-4">Follow Us</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="mb-4" />
              <ul className="space-y-2">
                <li>
                  <a href="" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-brands fa-facebook-f pr-2"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-brands fa-instagram pr-2"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center text-gray-500 hover:text-black">
                    <i className="fa-brands fa-linkedin-in pr-2"></i> Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold pb-4">Address</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="mb-4" />
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <i className="fa-solid fa-location-dot text-purple-700 pr-2"></i>
                  Kolathur ramankulam- Malappuram Dt, Kerala 679338
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-phone text-purple-700 pr-2"></i>
                  <a href="">+91 90904500112</a>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope text-purple-700 pr-2"></i>
                  <a href="">mail@1234567.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* footer copy right section start */}
      <section id="copy-right" className="bg-pink-600 text-white text-center py-4">
        <div>
          <i className="fa-solid fa-copyright"></i> lorem ispum lorem ispum 2022 Powered By{' '}
          <a href="/home" className="text-yellow-400 font-medium">weddding planner</a>
        </div>
      </section>
      {/* footer copy right section end */}
    </div>
  );
}

export default Footer;