import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';
import { CircleOff, Clock4, NotebookPen, Truck, Repeat2 } from 'lucide-react';
import React from 'react';

const policies = [
    {
        icon: <NotebookPen />,
        title: 'Returns – Eligibility & Conditions',
        description: (
            <>
                Our aim is to make you satisfied with your purchase. If you receive a defective, damaged, or misrepresented product, we are here to assist you.<br /><br />
                <ul className="list-disc ml-6 space-y-1">
                    <li>Goods must be in unopened, intact packaging and not sterilized.</li>
                    <li>Return requests must be made within <strong>7 days after delivery</strong>.</li>
                    <li>Incorrect order returns must be reported within <strong>48 hours</strong> of receipt.</li>
                </ul>
            </>
        ),
    },
    {
        icon: <CircleOff />,
        title: 'Goods That Are Nonrefundable',
        description: (
            <ul className="list-disc ml-6 space-y-1">
                <li>Surgical instruments that are used or sterilized.</li>
                <li>Individually made or engraved instruments.</li>
                <li>Goods that break because of poor rules and misuse.</li>
            </ul>
        ),
    },
    {
        icon: <Clock4 />,
        title: 'Refund Process',
        description:
            'As soon as we receive and inspect your returned item, we will inform you about the approval or declination of your refund. When approved, your refund will be sent back to your account within 7-10 working days using your original payment method.',
    },
    {
        icon: <Repeat2 />,
        title: 'Exchanges',
        description:
            'If you receive a defective or broken product and want to exchange it, please contact our support staff. We will organize a substitute or propose an alternative solution.',
    },
    {
        icon: <Truck />,
        title: 'Return Shipping',
        description:
            'Return shipping costs are your responsibility unless the return is due to a product fault or shipping error. We recommend using a trackable shipping service or shipping insurance, as we cannot guarantee receipt of your returned item.',
    },
];

const RefundPolicy = () => {
    return (
        <LayoutWrapper className="min-h-screen flex justify-center items-center py-8">
            <div className="max-w-screen-lg w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-semibold text-teal-900">
                        Refund Policy
                    </h1>
                    <p className="text-[#666666] mt-2 max-w-3xl mx-auto text-base sm:text-lg">
                        At Pac West, your satisfaction is our priority. Please review our refund and return policy for complete peace of mind when shopping with us.
                    </p>
                </div>

                {/* Policies Section */}
                <div>
                    {policies.map((policy, index) => (
                        <div key={index} className="mb-6">
                            {/* Title Column */}
                            <h3 className="flex items-center text-2xl font-semibold text-gray-800 gap-2 mb-2">
                                <span className="bg-[#CFE7E7] p-1.5 -mt-0.5 rounded-lg text-[#004040]">
                                    {policy.icon}
                                </span>
                                <span className="text-base md:text-xl">{policy.title}</span>
                            </h3>
                            {/* Description Column */}
                            <div className="text-gray-600 ml-[3rem]">{policy.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default RefundPolicy;
