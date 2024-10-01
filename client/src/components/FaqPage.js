import React, { useState } from 'react';

const FaqPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer various types of loans including: Home Loan, Personal Loan, Business Loan, Loan Against Property, Car Loan, Resale Home Loan, Bank Transfer and Top-Up Loan, and all types of Insurance.',
    },
    {
      question: 'How can I join your team?',
      answer: 'You can join our team by visiting the contact page, sending us a message through our website, or directly contacting us at 9033409781.',
    },
    {
      question: 'How do I contact support?',
      answer: 'Reach out to our support team via the contact form on our website or by emailing roshanfiremarshal@gmail.com.',
    },
    {
      question: 'What are your pricing plans?',
      answer: 'Our pricing plans are customizable based on the services you need. Contact us for a free quote.',
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b-2 pb-4 cursor-pointer transition duration-300 ease-in-out ${selectedQuestion === index ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
              <span className="text-lg text-gray-600">{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            {selectedQuestion === index && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
