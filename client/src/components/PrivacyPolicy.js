import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-teal-400">Privacy Policy</h1>
      <p className="text-lg leading-relaxed mb-4">
        Effective Date: {new Date().toLocaleDateString()}
      </p>
      <p className="mb-4">
        At Shree Ganan Loan Services, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal Identification Information: Name, email address, phone number, etc.</li>
        <li>Financial Information: Details related to your loans and payment methods.</li>
        <li>Usage Data: Information about how you use our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect from you in the following ways:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and maintain our services.</li>
        <li>To improve customer service.</li>
        <li>To process transactions and send you related information.</li>
        <li>To communicate with you, including customer support.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Disclosure of Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties, except to provide you with services or as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Security of Your Information</h2>
      <p className="mb-4">
        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have the following rights:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>The right to access – You have the right to request copies of your personal data.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
        <li>The right to erasure – You have the right to request that we erase your personal data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:roshanfiremarshal@gmail.com" className="text-teal-400 underline">roshanfiremarshal@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
