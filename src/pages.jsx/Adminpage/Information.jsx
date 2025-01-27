import React from "react";
import AdminNavbar from "./AdminNavbar";

function Information() {
  return (
    <>
      <AdminNavbar />
      <div className="p-6 font-sans bg-gray-50">
        {/* Header Section */}
        <div className="text-center py-8 bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 text-white rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold">Admin Dashboard</h1>
          <p className="text-xl mt-2 font-light">
            Efficiently manage your wedding planning platform with our tools and insights.
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-white p-8 rounded-lg shadow-md my-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Platform Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to your admin dashboard! Here, you can monitor platform performance, manage events and vendors, and ensure seamless operations for both clients and planners. Utilize our tools to provide an exceptional experience for all users.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Monitor ongoing and upcoming wedding events.</li>
            <li>Oversee vendor collaborations and contracts.</li>
            <li>Analyze user engagement and feedback.</li>
            <li>Manage platform-wide settings and configurations.</li>
          </ul>
        </div>

        {/* Metrics Section */}
        <div className="my-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1,200", label: "Active Users" },
              { value: "85", label: "Ongoing Events" },
              { value: "150+", label: "Vendors Onboarded" },
              { value: "$120K", label: "Monthly Revenue" },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-gray-800">{metric.value}</h3>
                <p className="text-gray-600 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Management Section */}
        <div className="bg-white p-8 rounded-lg shadow-md my-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Event Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Upcoming Events",
                description:
                  "Track and manage all upcoming weddings, including schedules and deadlines.",
              },
              {
                title: "Event Analytics",
                description:
                  "View detailed reports on event performance, feedback, and client satisfaction.",
              },
              {
                title: "Resource Allocation",
                description:
                  "Assign vendors and resources to specific events to ensure smooth execution.",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Collaboration Section */}
        <div className="my-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Vendor Collaboration
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Manage partnerships with trusted vendors to ensure high-quality services for every wedding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vendor Directory",
                description: "Maintain a comprehensive list of all vendors with contact details and ratings.",
              },
              {
                title: "Contract Management",
                description: "Oversee vendor contracts and renewals with automated reminders.",
              },
              {
                title: "Performance Tracking",
                description: "Analyze vendor performance through client feedback and metrics.",
              },
            ].map((vendor, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {vendor.title}
                </h3>
                <p className="text-gray-600">{vendor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Platform Optimization: 80%</span>
            <span className="text-sm text-gray-500">On Track!</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4 shadow-inner">
            <div
              className="bg-gradient-to-r from-green-500 to-red-500 h-4 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Take the Lead?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Leverage the full potential of your admin tools to deliver exceptional experiences for clients and planners.
          </p>
          {/* <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all">
            Access Full Admin Tools
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Information;
