import React, { useState } from 'react';

const FaqPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'type of loan 1) Home loan , 2) Personal loan , 3) businesses loan , 4) loan against property , 5) car loan , 7) resale home loan , 8) Bank transfer and top up loan and also all type of insurance available'
    },
    {
      question: 'How can I join your team?',
      answer: 'You can join our team by go on the contact page and send message through our website and submitting an application for the desired role.  and direct conatact on this number :- 9033409781'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach out to our support team via the contact form on our website or by emailing roshanfiremarshal@gmail.com '
    },
    {
      question: 'What are your pricing plans?',
      answer: 'Our pricing plans are customizable based on the services you need. Contact us for a free quote.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 pb-4 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span className="text-xl">{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            {selectedQuestion === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
