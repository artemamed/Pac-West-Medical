import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import React from "react";
import { FaCookieBite, FaLock, FaChartLine, FaUserShield } from "react-icons/fa";

const CookiePolicyPage: React.FC = () => {
    return (
        <LayoutWrapper className="min-h-screen py-10 flex flex-col items-center">
            {/* Container */}
            <div className="max-w-screen-lg w-full ">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center text-[#004040] mb-6">
                        Cookies Policy
                    </h1>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-base sm:text-lg">
                        As PacWest, we care about the security of your data and the privacy of your personal life. This Privacy and Cookie Policy aims to explain how personal data is collected about you when visiting our website and how cookies are used on our site.
                    </p>
                </div>

                {/* What is a Cookie? */}
                <section className="mb-8 border-b pb-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaCookieBite className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            What is a Cookie?
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed ml-[2rem]">
                        Cookies are small files, usually letters and numbers, stored by the website you visit on your device or browser. Alongside cookies, we may also use pixels and similar technologies to enhance your experience when visiting PacWest’s website, such as for contact form submissions.
                    </p>
                </section>

                {/* Legal Framework */}
                <section className="mb-8 border-b pb-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaUserShield className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            Legal Framework & Policy Changes
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed ml-[2rem]">
                        PacWest may update or change this Privacy and Cookie Policy at any time. We comply with applicable privacy regulations, including those from the Personal Data Protection Authority and other relevant laws. For full details on the processing of your data, please refer to our Website Visitor Clarification Text and our Personal Data Protection Policy.
                    </p>
                </section>

                {/* Cookies: Purpose of Use */}
                <section className="mb-8 border-b pb-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaChartLine className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            Cookies: Purpose of Use
                        </h2>
                    </div>
                    <ul className="list-disc ml-[2rem] space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>
                            Ensuring the minimum required functions and features of the website.
                        </li>
                        <li>
                            Verifying that the site operates as intended and performs smoothly.
                        </li>
                        <li>
                            Safeguarding the legal and operational security of both you and PacWest Clinic.
                        </li>
                    </ul>
                </section>

                {/* Collection Method of Personal Data */}
                <section className="mb-8 border-b pb-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaUserShield className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            Collection Method of Personal Data
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed ml-[2rem]">
                        Site visitors may provide identity details (such as name and surname), contact details (such as phone and e-mail), description, requests, complaints, and other personal information through our contact forms.
                    </p>
                </section>

                {/* Transfer of Personal Data */}
                <section className="mb-8 border-b pb-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaLock className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            Transfer of Personal Data
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed ml-[2rem]">
                        We may share your data with trusted suppliers, domestic or foreign, for services such as IT, emailing, data analysis, or cloud storage, always within legal frameworks. Your data may also be shared with public institutions or organizations if required by law or for the protection of your or our rights and interests.
                    </p>
                </section>

                {/* Types of Cookies Used */}
                <section className="mb-8 border-b pb-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaCookieBite className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            Types of Cookies Used
                        </h2>
                    </div>
                    <ul className="list-disc ml-[2rem] space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>
                            <strong>Necessary (Mandatory) Cookies:</strong> Required for security and for the site to operate as expected. These cannot be turned off and are essential for basic site operations.
                        </li>
                    </ul>
                </section>

                {/* Use and Control of Cookies */}
                <section className="mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaLock className="text-teal-700 text-xl md:text-2xl" />
                        <h2 className="text-xl md:text-2xl font-bold text-teal-900">
                            Use and Control of Cookies
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed ml-[2rem]">
                        You have the right to customize your preferences by adjusting your browser settings. Most browsers allow you to be warned before cookies are used, block or delete specific cookies, or manage your cookie settings for each device you use. See your browser’s help section for instructions.
                    </p>
                </section>

                {/* Contact & Changes */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-6">
                    This Cookie Policy may be updated periodically. All changes will be posted on this page with the effective date. For questions, please contact us via our website.
                </p>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center text-gray-600 text-sm">
                <p>© {new Date().getFullYear()} PacWest Medical. All rights reserved.</p>
            </footer>
        </LayoutWrapper>
    );
};

export default CookiePolicyPage;
