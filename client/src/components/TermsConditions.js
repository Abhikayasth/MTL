import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-teal-400">Terms and Conditions</h1>
      <p className="text-lg leading-relaxed mb-4">
        Effective Date: {new Date().toLocaleDateString()}
      </p>
      <p className="mb-4">
        These terms and conditions outline the rules and regulations for the use of Shree Ganan Loan Services's Website.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Shree Ganan Loan Services if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property Rights</h2>
      <p className="mb-4">
        Other than the content you own, under these Terms, Shree Ganan Loan Services and/or its licensors own all the intellectual property rights and materials contained in this Website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">User Responsibilities</h2>
      <p className="mb-4">
        You must not:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Republish material from this website.</li>
        <li>Sell, rent, or sub-license material from the website.</li>
        <li>Reproduce, duplicate, or copy material from this website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Limitations of Liability</h2>
      <p className="mb-4">
        In no event shall Shree Ganan Loan Services, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Indemnification</h2>
      <p className="mb-4">
        You hereby indemnify to the fullest extent Shree Ganan Loan Services from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law</h2>
      <p className="mb-4">
        These Terms will be governed by and interpreted in accordance with the laws of the State of Gujarat, India. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts of Gujarat.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to These Terms</h2>
      <p className="mb-4">
        We may revise these terms and conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page.
      </p>

      <p className="mb-4">
        If you have any questions about these Terms, please contact us at <a href="mailto:roshanfiremarshal@gmail.com" className="text-teal-400 underline">roshanfiremarshal@gmail.com</a>.
      </p>
    </div>
  );
};

export default TermsConditions;
