import React from 'react';
import teamMember from '../images/Roshanbhai.jpeg'; // Replace with your image

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-gray-50 min-h-screen py-8 px-4 md:px-10 lg:px-16">
      {/* Company Background */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
          Discover Who We Are
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mx-auto max-w-4xl">
          Welcome to <span className="font-bold text-blue-600">Shree Gajanan Loan Services</span>, your premier destination for customized loan solutions. With a proven track record in the financial industry, we specialize in offering tailored solutions for home loans, business financing, and personal loans. Our expertise and commitment to customer satisfaction set us apart as leaders in providing efficient and trustworthy financial services.
        </p>
      </section>

      {/* Single Team Member */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-16">
        <div className="flex-1 transform transition-transform duration-500 hover:scale-105">
          <img
            src={teamMember}
            alt="Our Financial Expert"
            className="w-full h-auto rounded-lg shadow-xl transform hover:rotate-1 hover:shadow-2xl"
          />
        </div>
        <div className="flex-1 text-left space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-800">
            Meet Our Financial Expert
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Mr. Roshan Chavan
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Mr. Roshan Chavan is an accomplished financial expert with extensive experience in the loan sector. Specializing in home, business, and personal loans, he offers unparalleled expertise and personalized service to help you achieve your financial goals. Known for his commitment to excellence and client satisfaction, he ensures that every loan process is seamless and tailored to your specific needs.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            With a focus on integrity and transparency, Mr. Chavan is dedicated to providing clear, actionable advice and comprehensive support throughout your financial journey. Trust us to guide you through every step of securing the best loan options for your unique situation.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
          Our Mission at Shree Gajanan Loan Services
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mx-auto max-w-3xl">
          At Shree Gajanan Loan Services, our mission is to simplify the loan application process and provide you with the best possible options to meet your financial needs. We are committed to delivering exceptional service, transparent advice, and reliable support every step of the way. Our goal is to ensure that your experience with us is smooth, efficient, and highly satisfying.
        </p>
      </section>

      {/* Values Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
          Our Core Values
        </h2>
        <ul className="list-disc text-lg md:text-xl lg:text-2xl text-gray-700 mx-auto max-w-4xl space-y-6">
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Integrity:</span> We uphold the highest standards of honesty and transparency in all our financial dealings.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Customer-Centric Approach:</span> Your financial goals are at the core of our service, and we tailor our solutions to meet your needs.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Excellence:</span> We strive to deliver the highest quality of service and professionalism in the loan industry.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
            <span className="font-bold">Commitment:</span> We are dedicated to providing timely and reliable loan solutions that surpass your expectations.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
