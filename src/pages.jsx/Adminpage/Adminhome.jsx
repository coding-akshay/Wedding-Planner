import React from "react";
import AdminbgImage from '../../assets/Images/hands-3113668_1280.jpg'
function AdminHome() {
  return (
    <div className="p-6 font-sans bg-gray-50">
      {/* Header Section */}
     <div
              className="bg-cover bg-center h-96 flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${AdminbgImage})`,
              }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Grow your business with WeddingPlanner
                </h1>
                <ul className="list-none space-y-2 text-lg">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Showcase your services on our industry-leading site!
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Reach local engaged couples and book more weddings.
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Trusted by over 76,000 professionals.
                  </li>
                </ul>
              
              </div>
            </div>

      {/* Categories Overview */}
      <div className="my-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Key Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Mehndi",
              description:
                "Oversee Mehndi artists, bookings, and client satisfaction.",
              icon: "🌿",
            },
            {
              title: "Food",
              description:
                "Manage catering services, menus, and vendor partnerships.",
              icon: "🍴",
            },
            {
              title: "Jewellery & Accessories",
              description:
                "Track inventory and coordinate with jewellery designers.",
              icon: "💎",
            },
            {
              title: "Photographers",
              description:
                "Assign photographers to events and manage portfolios.",
              icon: "📸",
            },
            {
              title: "Auditorium",
              description:
                "Monitor venue availability, bookings, and maintenance.",
              icon: "🏛️",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white p-8 rounded-lg shadow-md my-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Current Platform Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { value: "85", label: "Mehndi Bookings" },
            { value: "120", label: "Catering Assignments" },
            { value: "45", label: "Jewellery Orders" },
            { value: "68", label: "Photography Assignments" },
            { value: "15", label: "Auditoriums Reserved" },
            { value: "$75,000", label: "Monthly Revenue" },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Optimize Your Workflow?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Leverage the full suite of admin tools to deliver seamless experiences for your clients.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all">
          Explore Admin Tools
        </button>
      </div>
    </div>
  );
}

export default AdminHome;
