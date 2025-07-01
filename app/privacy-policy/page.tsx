import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import React from "react";
import { FiShield, FiUsers, FiLink, FiFileText, FiGlobe } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <LayoutWrapper className="min-h-screen flex justify-center items-center py-8">
      <div className="max-w-screen-lg w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#004040]">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-base sm:text-lg">
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
          </p>
        </div>

        {/* 1. The Information We Collect */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiFileText className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>The Information We Collect</span>
          </h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700">
            <li>
              <strong>Personal information:</strong> We may gather your name, email address, postal address, and phone number when you access our website, place an order, fill out a form, or contact us. This includes details for shipping and payment.
            </li>
          </ul>
        </section>

        {/* 2. The Uses of Your Information */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiShield className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>The Uses of Your Information</span>
          </h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700">
            <li>Your information is used to fulfill orders, ship and deliver products, respond to inquiries, and update or notify you of promotions (with your consent).</li>
            <li>We use your data to improve customer experience and optimize our website.</li>
          </ul>
        </section>

        {/* 3. Protection and Security */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiShield className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>Protection and Security</span>
          </h2>
          <p className="text-gray-700 ml-8">
            We use industry-standard measures to protect your data against unauthorized access, modification, disclosure, or destruction. Payment details are not stored on our servers—they are encrypted for your security.
          </p>
        </section>

        {/* 4. Disclosing Your Information */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiUsers className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>Disclosing Your Information</span>
          </h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700">
            <li>We do not sell, exchange, or rent personal information.</li>
            <li>Your information may be accessed by trusted partners for essential services (e.g., shipping, payment processing), all under confidentiality agreements.</li>
          </ul>
        </section>

        {/* 5. Cookies */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiGlobe className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>Cookies</span>
          </h2>
          <p className="text-gray-700 ml-8">
            We use cookies to enhance your browsing experience, analyze website traffic, and save your preferences. You can disable cookies in your browser settings if you prefer not to be tracked.
          </p>
        </section>

        {/* 6. Third-Party Links */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiLink className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>Third-Party Links</span>
          </h2>
          <p className="text-gray-700 ml-8">
            Our site may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
          </p>
        </section>

        {/* 7. Your Rights */}
        <section className="mb-8 border-b pb-4">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiFileText className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>Your Rights</span>
          </h2>
          <ul className="list-disc ml-8 space-y-2 text-gray-700">
            <li>You have the right to request access to your personal data, demand corrections, or request deletion of your information.</li>
            <li>To exercise these rights, please contact us directly.</li>
          </ul>
        </section>

        {/* 8. Policy Changes */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-bold mb-4 space-x-2">
            <FiFileText className="bg-[#CFE7E7] p-1 rounded-lg text-[#004040]" />
            <span>Policy Changes</span>
          </h2>
          <p className="text-gray-700 ml-8">
            This privacy policy may be updated as necessary. Any changes will be published on this page with the revised date. Continued use of our website constitutes acceptance of these changes.
          </p>
        </section>
      </div>
    </LayoutWrapper>
  );
};

export default PrivacyPolicy;
