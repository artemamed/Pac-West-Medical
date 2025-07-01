import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';
// import Image from 'next/image';
import React from 'react';

const policies = [
    {
        title: 'General Terms',
        description:
            'The terms standardize the utilization of pacwest.com. Viewing, downloading, or using this site is by all the laws and regulations. And in case you disagree with any of the provisions of these terms, you are not supposed to use this site',
    },
    {
        title: 'Intellectual Property',
        description:
            'The whole website content, such as text, graphics, logos, images of its products, and designs, is the intellectual property of PacWest Surgical and is under intellectual property laws. No reproduction or use is allowed.',
    },
    {
        title: 'Information on the product, pricing',
        description:
            'We do our best to give all the necessary information about our product and the costs. We do not, however, warrant completeness or accuracy of information, which is always the case. Pacwest Surgical Instruments does not guarantee that it will not introduce amendments or changes in the specifications of products without any notice or changes in prices.',
    },
    {
        title: 'Orders and payment terms',
        description:
            'The orders are to be accepted and the availability. Unless otherwise agreed, payment is due before dispatch in full. In the case of larger orders, conditions of a partial payment can be exercised as in our Payment Policy.',
    },
    {
        title: 'Delivery & Shipping',
        description:
            'We strive to dispatch orders with reference to delivery dates and times. We cannot do anything about delays through couriers, customs, or even natural occurrences. All information can be found on our Delivery Information page.',
    },
    {
        title: 'Guarantee, Return, and Refunds',
        description:
            'We do not accept returns unless they fall under our Return & Refund Policy. Customers should make sure that they do not use the products and have to put the products back in the original packaging.',
    },
    {
        title: 'Liability Limitation',
        description:
            'Pacwest Surgical Instruments does not assume responsibility of any kind of direct, indirect, incidental, or consequential damages that may arise because of the use or failure to use our products or site.',
    },
    {
        title: 'Terms changes',
        description:
            'It is our right to change these terms at any time without prior notification. Further access to the site means that you agree to the new terms.',
    },
    {
        title: 'Governing Law',
        description:
            'The Pakistani laws apply in these terms. In case of any dispute in regard to these terms, the matter will be settled in the proper courts of Lahore, Pakistan.',
    },
];

const Home = () => {
    return (
        <LayoutWrapper className="min-h-screen flex justify-center items-center py-8">
            <div className="max-w-screen-lg w-full px-4">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-semibold text-teal-900">
                        Terms and Condition
                    </h1>
                    <p className="text-[#666666] mt-2">
                        Please read our terms carefully before proceeding with any transactions.
                    </p>
                </div>

                {/* Policies Section */}
                <div className="max-w-4xl mx-auto">
                    {policies.map((policy, index) => (
                        <div
                            key={index}
                            className="mb-6 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4"
                        >
                            {/* Title Column */}
                            <h3 className="text-lg font-semibold text-gray-800 w-full md:w-[10rem]">
                                {policy.title}<span className=' md:hidden text-teal-900 text-xl ml-2 font-bold'>&darr;</span>
                            </h3>



                            {/* Right Arrow Icon */}
                            <div className="hidden md:block text-teal-900 text-2xl font-bold w-6 flex-shrink-0 items-center justify-center">
                                &rarr;
                            </div>

                            {/* Description Column */}
                            <p className="text-gray-600 flex-1">{policy.description}</p>
                        </div>
                    ))}
                </div>

                {/* Verified Badge */}
                {/* <div className="flex justify-end md:mt-8">
                    <div className="flex flex-col items-center">
                        <Image
                            width={100}
                            height={100}
                            src="/assets/stamp.png"
                            alt="Verified Badge"
                            className="w-32 md:w-56 xl:w-72 h-auto object-contain"
                        />
                    </div>
                </div> */}
            </div>
        </LayoutWrapper>


    );
};

export default Home;
