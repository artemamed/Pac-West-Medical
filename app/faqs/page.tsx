"use client";

import { Button } from '@/components/ui/button'
import LayoutWrapper from '@/components/Wrapper/LayoutWrapper'
import Image from 'next/image'
import React from 'react'
import image from "@/public/assets/faqq.svg"
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is the process of buying instruments at PasWest Surgical?',
    answer: 'PacWest Surgical markets its product via authorized distributors. Yet, it is also possible to buy directly from PacWest Surgical. This will be premised on another agreement.'
  },
  {
    question: 'Which type of sterilization is appropriate for PacWest surgical instruments?',
    answer: 'PacWest surgical instruments can be sterilized with any procedure stated in our instructions for use. Nevertheless, thoroughly advised fractionated vacuum steam sterilization at an assigned operating temperature.'
  },
  {
    question: 'What should I do, and do I need to clean Packwest Surgical instruments before sterilization?',
    answer: 'Cleaning of instruments must be done before sterilisation. After any surgery, the remains may remain on the instruments, be it blood, bone, skin, or tissue. Sterilization of these instruments requires their residues to be eliminated. Otherwise, they may damage the instrument. These instruments may be cleaned manually (by brush), by machine, or by ultrasound. Instruments, whenever feasible, really ought to be cleaned or at any rate disassembled in the open condition. See usability.'
  },
  {
    question: 'My shipment has been sent. Am I able to trace it?',
    answer: 'Yes, you can track the status of an order. Once your order has been shipped, you will be provided with a tracking number by customer services.'
  },
  {
    question: 'Are the surgical instruments of PacWest special?',
    answer: 'Pacwest Surgical equipment must be placed in a non-moisture environment with dry air and free of dirt. The instruments should be stored in the shipping carton or a protective tray, preferably separately. Surround tips and edges with appropriate protection and ensure that there are no chemicals near or in the storage place. We advise you to reach us to get the instructions for use.'
  },
  {
    question: 'How do you overcome a situation when you are unable to get a specific tool?',
    answer: 'Our home page and our catalogues have several searching possibilities. You may query products using description, name, or item no.. Should you continue failing to identify a tool, make sure to contact our customer service so that it can help you locate the desired tool.'
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <LayoutWrapper className="min-h-screen pb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center mt-4 text-[#004040] md:py-8">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row md:px-6 lg:px-16 gap-2 md:gap-8">
        {/* Column for the Heading */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug xl:leading-tight">
            Any Question? We Got You.
          </h2>


        </div>

        {/* Column for the FAQ Data */}
        <div className="w-full md:w-2/3 lg:px-4 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full py-3 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base sm:text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-[#008080] text-lg sm:text-xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && faq.answer && (
                <p className="text-[#666666] text-sm sm:text-base mt-2 mb-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg bg-[#EDF8F833] p-4 md:p-6 lg:p-8">
          {/* Image Section */}
          <div className="w-full md:w-auto mb-6 md:mb-0 flex justify-center">
            <Image
              src={image}
              alt="Setroscope Icon"
              width={300}
              height={200}
              className="w-32 sm:w-40 md:w-48 xl:w-72 h-auto"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left md:ml-[4rem]">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-teal-900">
              Still have a question?
            </h1>
            <p className="mt-2 text-gray-600 text-sm sm:text-base lg:max-w-lg">
              If you didn&apos;t find the answer you were looking for, feel free to reach out to our support team. We&apos;re here to help!
            </p>
            <Button className="mt-4 px-4 py-2 text-sm sm:text-base md:text-lg">
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>

  )
}

export default Faqs