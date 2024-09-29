import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBusinessTime, FaCar, FaMoneyCheckAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdOutlineHomeWork } from 'react-icons/md';

// Loan and Insurance types arrays
const loanTypes = [
  { id: 1, name: 'Home Loan', icon: <FaHome />, description: 'Get easy approvals with low-interest rates for your dream home.' },
  { id: 2, name: 'Personal Loan', icon: <FaMoneyCheckAlt />, description: 'Quick personal loans for your immediate needs.' },
  { id: 3, name: 'Business Loan', icon: <FaBusinessTime />, description: 'Expand your business with customized loan plans.' },
  { id: 4, name: 'Loan Against Property', icon: <MdOutlineHomeWork />, description: 'Leverage your property to get the loan you need.' },
  { id: 5, name: 'Car Loan', icon: <FaCar />, description: 'Drive your dream car with affordable car loan options.' },
  { id: 6, name: 'Resale Home Loan', icon: <FaHome />, description: 'Finance the purchase of a resale property with flexible plans.' },
  { id: 7, name: 'Bank Transfer and Top-Up Loan', icon: <FaMoneyCheckAlt />, description: 'Top-up your existing loan with ease or transfer your loan to another bank.' },
];

const insuranceTypes = [
  { id: 1, name: 'Life Insurance', icon: <MdHealthAndSafety />, description: 'Secure your family’s future with comprehensive life insurance.' },
  { id: 2, name: 'Health Insurance', icon: <MdHealthAndSafety />, description: 'Affordable health coverage for your medical needs.' },
  { id: 3, name: 'Vehicle Insurance', icon: <FaCar />, description: 'Protect your car or bike with complete vehicle insurance plans.' },
  { id: 4, name: 'Home Insurance', icon: <MdOutlineHomeWork />, description: 'Safeguard your home against any damages or loss.' },
  { id: 5, name: 'Business Insurance', icon: <FaBusinessTime />, description: 'Get comprehensive coverage for your business assets and liabilities.' },
  { id: 6, name: 'Travel Insurance', icon: <MdHealthAndSafety />, description: 'Stay protected during your trips with travel insurance.' },
];

const ApplyPage = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const navigate = useNavigate();

  // Handle Loan Selection
  const handleSelectLoan = (loan) => {
    setSelectedLoan(loan);
    setSelectedInsurance(null); // Reset insurance selection
  };

  // Handle Insurance Selection
  const handleSelectInsurance = (insurance) => {
    setSelectedInsurance(insurance);
    setSelectedLoan(null); // Reset loan selection
  };

  // Navigate to Contact form when applying
  const handleApplyNow = (type) => {
    const selectedType = selectedLoan || selectedInsurance;
    if (selectedType) {
      navigate('/contact-form', { state: { type: selectedType } });
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Page Title and Description */}
      <h1 className="text-5xl font-bold text-center text-blue-800 mb-8">Choose Your Ideal Loan or Insurance</h1>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Explore a variety of loan and insurance options tailored to your financial needs. Select the type that suits you and get fast, secure approval!
      </p>

      {/* Loan Types Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Loan Types We Offer:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan) => (
            <div
              key={loan.id}
              onClick={() => handleSelectLoan(loan.name)}
              className={`p-8 border rounded-lg text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 shadow-md ${
                selectedLoan === loan.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              <div className="text-4xl mb-4">{loan.icon}</div>
              <p className="text-2xl font-bold mb-2">{loan.name}</p>
              <p className="text-sm">{loan.description}</p>
              <button
                onClick={() => handleApplyNow('loan')}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Types Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Comprehensive Insurance Plans:</h2>
        <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Secure your future with our wide range of insurance policies, tailored to meet your specific requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((insurance) => (
            <div
              key={insurance.id}
              onClick={() => handleSelectInsurance(insurance.name)}
              className="p-8 border rounded-lg text-center bg-white text-gray-800 hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-md"
            >
              <div className="text-4xl mb-4">{insurance.icon}</div>
              <p className="text-2xl font-bold mb-2">{insurance.name}</p>
              <p className="text-sm">{insurance.description}</p>
              <button
                onClick={() => handleApplyNow('insurance')}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Loan or Insurance and Apply Button */}
      {(selectedLoan || selectedInsurance) && (
        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            You have selected <strong>{selectedLoan || selectedInsurance}</strong>. Click below to start your application now!
          </p>
          <button
            onClick={handleApplyNow}
            className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            Apply for {selectedLoan || selectedInsurance}
          </button>
        </div>
      )}

      {/* SEO Optimized Content */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us for Your Loan Needs?</h3>
        <p className="text-lg text-gray-600 mb-8">
          With over a decade of experience in providing financial solutions, we ensure fast approvals, flexible terms, and competitive interest rates. Our loan options are designed to cater to every type of borrower, whether you're looking for a home loan, personal loan, or business expansion.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-12">
          <li>Low-interest rates and quick disbursals</li>
          <li>Personalized loan options</li>
          <li>Minimal documentation and hassle-free process</li>
          <li>Dedicated customer support for all your queries</li>
        </ul>
        <p className="text-lg text-gray-600 mb-8">
          We also offer a variety of insurance plans, ensuring that you and your assets are well-protected. From health and life insurance to vehicle and home insurance, we provide comprehensive coverage options for every need.
        </p>
      </div>
    </div>
  );
};

export default ApplyPage;
