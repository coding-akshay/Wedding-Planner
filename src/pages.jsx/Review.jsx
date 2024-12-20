import React from "react";

function Review() {
  return (
    <div className="bg-gray-100">
      {/* Top Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Wedding Venue"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className="max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              <span className="text-pink-500">Orange-Events.com</span>
              <br />
              India's Largest Wedding Venue Booking Platform with 40,000+ venues
            </h1>
           
<button
  type="submit"
  class="  bg-[rgb(239,799,107)] px-6 py-3 flex justify-center gap-2 items-center mx-auto shadow-xl 
  text-lg  backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute
   before:w-full before:transition-all before:duration-700
   before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500
    hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 
    relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  Explore
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border  group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>

          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-purple-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
            Our vendors have generated 100 Crore business last month!
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Here are some of our vendor testimonials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "When I registered here as a verified vendor, I did not know that my business would improve vastly within a short period. Understanding the requirements of the customers and serving them has helped develop my business widely. My sincere thanks to the WeddingBazaar team for providing me with leads and support consistently.",
                name: "Varun",
                location: "Caterers, Chennai",
              },
              {
                text: "I took the most popular package on WeddingBazaar and it is totally useful. For beginners like me, it would be very helpful to have a support like WeddingBazaar to get more clients. I would recommend this platform to everyone looking to grow their business quickly.",
                name: "Hemavathy",
                location: "Makeup Artist, Hyderabad",
              },
              {
                text: "Grateful to the WeddingBazaar team. As a registered vendor, I connected with a lot of new clients. Doubling the business as a Mehndi artist with the help of WeddingBazaar was so easy. Not only as a vendor, I also used WeddingBazaar as a customer and was highly satisfied with their personalized vendor suggestions.",
                name: "Parvathy",
                location: "Mehndi Artist, Chennai",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More Vendors Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">More Vendors in Jaipur</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
              {[
                "Wedding Photographers in Jaipur",
                "Bridal Wear in Jaipur",
                "Wedding Jewellery in Jaipur",
                "Bridal Makeup Artists in Jaipur",
                "Wedding Decorators in Jaipur",
                "Groom Wear in Jaipur",
                "Wedding Catering in Jaipur",
                "Wedding Cards in Jaipur",
                "Wedding Venues in Jaipur",
                "Wedding Videography in Jaipur",
                "Trousseau Packers in Jaipur",
                "Sangeet Choreographers in Jaipur",
                "Wedding Planners in Jaipur",
                "Wedding Accessories in Jaipur",
                "DJ in Jaipur",
                "Wedding Pandits / Priests in Jaipur",
                "Family Makeup in Jaipur",
                "Wedding Cakes in Jaipur",
                "Bartenders in Jaipur",
                "Pre Wedding Shoot Locations in Jaipur",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Top Articles Section */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Top Articles To Read</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                "Wedding Songs",
                "Best Bridal Entry Songs",
                "2023 Marriage Dates",
                "Best Bridal Hairstyles",
                "Best Mehendi Designs",
                "Latest Sabyasachi Lehengas",
                "Chandani Chowk Lehengas",
                "Wittiest Wedding Hashtags",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-blue-500 hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-300 pt-8">
            <h3 className="text-lg font-semibold mb-4">
              Orange-Events - Your Personal Wedding Planner
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Plan your wedding with Us. Orange-Events is your personal wedding
              planning site. Browse through the site to find vendors for your
              wedding. Explore wedding inspiration & ideas and our very popular
              wedding blog to prepare for your wedding following latest trends.
              Contact us for more details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Contact us to get best deals</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <strong>For Vendors:</strong> vendors@Orange-Events.com | 0124-6812346
                  </li>
                  <li>
                    <strong>For Users:</strong> info@Orange-Events.com | 0124-6812345
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Registered Address:</strong> Second Floor, Ocus
                  Technopolis, Sector 54 Golf Course Road, Gurgaon, Haryana,
                  India, 122002
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Follow us on</h4>
                <div className="flex space-x-4 text-blue-500">
                  {["Facebook", "Twitter", "Pinterest", "Instagram", "YouTube"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="hover:underline"
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Get Latest Blog Alerts</h4>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                  Submit
                </button>
              </form>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                Register as a Vendor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
