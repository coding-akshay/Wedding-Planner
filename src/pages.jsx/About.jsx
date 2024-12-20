import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="bg-[rgb(250,245,255)] text-center h-[250px] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">We are ORANGE-EVENTS</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">We are bringing dream weddings to life!</h2>
      </div>

      <section className="mb-12 text-center">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">About Us</h3>
        <p className="text-gray-700 mb-4">
          Orange-events is an Indian online wedding planning platform and a wedding media publisher, enabling couples
          to plan their weddings in a convenient & cost-effective manner.
        </p>
        <p className="text-gray-700 mb-4">
          Orange-events is on a spree to make wedding planning in India exciting and hassle-free. With a millennial army
          of wedding fanatics, Orange-events aims to aid wedding blues of every new-age couple across the country.
        </p>
        <p className="text-gray-700">
          We’re a driven team of wedding enthusiasts working to build a new way of wedding planning through delightful
          products and amazing customer service. We’re proud to have been the official wedding planner of celebrities
          like Yuvraj Singh & Bhuvneshwar Kumar. We love what we do, and that’s how we help you plan your wedding like
          a loved one!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 bg-[rgb(250,245,255)] text-center h-[150px]">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-4xl font-bold text-gray-900 mb-2">60,000</h4>
          <p className="text-gray-700">Wedding Vendors</p>
        </div>
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-4xl font-bold text-gray-900 mb-2">10,000</h4>
          <p className="text-gray-700">Annual Weddings</p>
        </div>
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-4xl font-bold text-gray-900 mb-2">2.5M</h4>
          <p className="text-gray-700">Monthly Media Followers</p>
        </div>
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-4xl font-bold text-gray-900 mb-2">20M</h4>
          <p className="text-gray-700">Monthly Reach</p>
        </div>
      </section>

      <section className="text-center ">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">What do we offer?</h3>
        <p className="text-gray-700 mb-4">
          Orange-events offers an end-to-end wedding planning solution for couples to ideate & realize their dream
          wedding conveniently & reliably. <br /> Orange-events is the only wedding planning startup in India that offers
          assisted wedding planning through personal wedding manager for <br /> all your needs of booking the perfect service
          provider. Orange-events is also an encyclopedia of latest trends, expert opinions and practical <br /> advice on
          wedding planning - from choosing wedding theme, best lehenga designs, sangeet ideas, photo poses, etc.
        </p>
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Trusted Wedding Vendors</h4>
        <p className="text-gray-700 mb-4">
          Orange-events offers an end-to-end wedding planning solution for couples to ideate & realize <br /> their dream
          wedding conveniently & reliably. Orange-events is the only wedding planning <br />startup in India that offers
          assisted wedding planning through personal wedding manager for <br /> all your needs of booking the perfect service
          provider. Orange-events is also an encyclopedia <br /> of latest trends, expert opinions and practical advice on
          wedding planning - from choosing <br /> wedding theme, best lehenga designs, sangeet ideas, photo poses, etc.
        </p>
        
        <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Wedding Ideas, Inspiration & Advice</h4>
        <p className="text-gray-700">
          It all starts with discovering the right idea to look that you make your wedding unique and fun! <br /> We host a
          tremendous collection of ideas and inspiration that are directly sourced <br /> from real weddings and our own
          content team is <br />an expert in bringing you the latest trends that are followed and loved by millions.
        </p>
      </section>
    </div>
  );
}

export default About;
