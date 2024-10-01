import React from 'react';
import teamMember from '../images/Roshanbhai.jpeg'; // Replace with your image

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-gray-50 min-h-screen py-8 px-4 md:px-8 lg:px-16">
      {/* Company Background */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900">
          Discover Who We Are
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mx-auto max-w-3xl lg:max-w-4xl">
          Welcome to <span className="font-bold text-blue-600">Shree Gajanan Loan Services</span>, your premier destination for customized loan solutions. With a proven track record in the financial industry, we specialize in offering tailored solutions for home loans, business financing, and personal loans.
        </p>
      </section>

      {/* Single Team Member */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-12">
        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center transform transition-transform duration-500 hover:scale-105">
          <img
            src={teamMember}
            alt="Our Financial Expert"
            className="w-4/5 h-auto rounded-lg shadow-xl transform hover:rotate-1 hover:shadow-2xl lg:w-3/4"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 text-left space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
            Meet Our Financial Expert
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Mr. Roshan Chavan
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Mr. Roshan Chavan is an accomplished financial expert with extensive experience in the loan sector. Specializing in home, business, and personal loans, he offers unparalleled expertise and personalized service to help you achieve your financial goals.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Trust us to guide you through every step of securing the best loan options for your unique situation.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
          Our Mission at Shree Gajanan Loan Services
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mx-auto max-w-3xl lg:max-w-4xl">
          Our mission is to simplify the loan application process and provide you with the best possible options to meet your financial needs. We are committed to delivering exceptional service, transparent advice, and reliable support.
        </p>
      </section>

      {/* Values Section */}
      <section className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
          Our Core Values
        </h2>
        <ul className="list-disc text-left text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mx-auto max-w-3xl lg:max-w-4xl space-y-4 px-4">
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Integrity:</span> We uphold the highest standards of honesty and transparency.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Customer-Centric Approach:</span> Your financial goals are at the core of our service.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Excellence:</span> We strive to deliver the highest quality of service and professionalism.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Commitment:</span> We are dedicated to providing timely and reliable loan solutions.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
