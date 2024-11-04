import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { type: selectedType } = location.state;
      setSelectedOptions([selectedType]);
    }
  }, [location.state]);

  const constructMessage = () => {
    let text = "Hello, ";
    if (name) {
      text += `I am ${name}. `;
    }
    if (email) {
      text += `My Email is ${email}. `;
    }
    if (selectedOptions.length > 0) {
      text += `I am interested in ${selectedOptions.join(", ")}. `;
    }
    if (phone) {
      text += `My Phone number is ${phone}. `;
    }
    if (message) {
      text += `Message: ${message}`;
    }
    return text.trim();
  };

  const handleSelectChange = (event) => {
    const { options } = event.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    selectedValues.push(...selectedOptions);
    const uniqueValues = Array.from(new Set(selectedValues));
    setSelectedOptions(uniqueValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(selectedOptions);

  return (
    <section
      id="contact-us"
      className="relative bg-gradient-to-r from-blue-600 to-teal-500 py-10 md:py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-white opacity-20 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-72 h-72 bg-white opacity-30 rounded-full absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Contact Us for Your Loan Needs
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Fill out the form below to get in touch with us. Our experts will
          respond promptly to help with your loan inquiries.
        </p>

        <div className="max-w-lg mx-auto">
          <form
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6 relative"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Contact Inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Full Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Contact Number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="How can we help you?"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Loan Options Select */}
            <div>
              <label
                htmlFor="loan-options"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Select Loan/Insurance Options
              </label>
              <select
                id="loan-options"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleSelectChange}
              >
                <option value="home-loan">Home Loan</option>
                <option value="personal-loan">Personal Loan</option>
                <option value="business-loan">Business Loan</option>
                <option value="loan-against-property">
                  Loan Against Property
                </option>
                <option value="car-loan">Car Loan</option>
                <option value="resale-home-loan">Resale Home Loan</option>
                <option value="bank-transfer-top-up-loan">
                  Bank Transfer & Top-Up Loan
                </option>
                {/* Insurance Categories */}
                <option value="health-insurance">Health Insurance</option>
                <option value="life-insurance">Life Insurance</option>
                <option value="auto-insurance">Auto Insurance</option>
                <option value="property-insurance">Property Insurance</option>
                <option value="travel-insurance">Travel Insurance</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Selected Options Display */}
            {selectedOptions.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  You have selected the following loan options:
                </p>
                <ul className="list-disc list-inside text-gray-800 mb-4">
                  {selectedOptions.map((option) => (
                    <li key={option}>
                      {option.charAt(0).toUpperCase() +
                        option.slice(1).replace("-", " ")}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600">
                  Please use the contact options below to apply or get more
                  information about these loan options.
                </p>
              </div>
            )}

            {/* Communication Options */}
            <div className="space-y-4">
              <p className="block text-sm font-semibold text-gray-700 mb-2">
                How would you like us to contact you?
              </p>
              <div className="grid grid-cols-1 gap-6">
                {/* WhatsApp */}
                <button
                  type="button"
                  className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    if (!name || !phone) {
                      alert("Please Provide Your Name and Phone Number.");
                      return;
                    } else {
                      const whatsappMessage = constructMessage();
                      window.open(
                        `https://wa.me/9033409781?text=${encodeURIComponent(
                          whatsappMessage
                        )}`,
                        "_blank"
                      );
                    }
                  }}
                >
                  <i className="fab fa-whatsapp mr-2"></i> Contact via WhatsApp
                </button>

                {/* Email */}
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const mailtoLink = `mailto:info@quantumsparkagency.com?subject=New Contact Inquiry&body=${encodeURIComponent(
                      constructMessage()
                    )}`;
                    window.open(mailtoLink, "_blank");
                  }}
                >
                  <i className="fas fa-envelope mr-2"></i> Contact via Email
                </button>
              </div>
            </div>

            {/* Submit Button */}
            {/* 
              <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
            >
             Submit Inquiry
            </button>
            */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
