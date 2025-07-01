import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';
import {
    BadgeAlert,
    BadgeDollarSign,
    Mail,
    MapPinned,
    Phone,
    SquarePen,
    Truck
} from 'lucide-react';
import React from 'react';

const policies = [
    {
        icon: <Truck />,
        title: 'Shipping',
        description: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Orders are usually shipped within <strong>1-2 business days</strong> (Monday–Friday).</li>
                    <li>Orders made on weekends or holidays will be processed on the next working day.</li>
                </ul>
            </>
        ),
    },
    {
        icon: <Mail />,
        title: 'Confirmation Email',
        description:
            'An email confirming the processing and shipment of your order will be sent to you.',
    },
    {
        icon: <Truck />,
        title: 'Shipping Methods',
        description: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>All deliveries are made through reliable carriers such as <strong>UPS, FedEx, and USPS</strong>.</li>
                    <li>Delivery options and estimated times are displayed at checkout.</li>
                </ul>
            </>
        ),
    },
    {
        icon: <BadgeDollarSign />,
        title: 'Shipping Charges',
        description: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Shipping costs are calculated at checkout, based on delivery location and method.</li>
                    <li>Free shipping may be available on certain orders—check current promotions for details.</li>
                </ul>
            </>
        ),
    },
    {
        icon: <MapPinned />,
        title: 'Tracking Your Order',
        description: (
            <>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Once your order has been dispatched, you will receive an email with a tracking number.</li>
                    <li>You can use this number to monitor your shipment’s progress at any time.</li>
                </ul>
            </>
        ),
    },
    {
        icon: <BadgeAlert />,
        title: 'Shipping Delays',
        description:
            'While we strive to ship on time, factors beyond our control—such as bad weather, carrier issues, or high demand—may result in delays. If your order experiences a significant delay, we will notify you.',
    },
    {
        icon: <BadgeAlert />,
        title: 'Lost or Damaged Packages',
        description:
            'If your delivery arrives damaged or is not received, contact us immediately. We will work with the carrier to resolve the issue or resend your order as necessary.',
    },
    {
        icon: <SquarePen />,
        title: 'Policy Modification',
        description:
            'Pac West reserves the right to change this shipping policy at any time without prior notice. Updates will be published on our website and will apply to all purchases made after the policy change.',
    },
    {
        icon: <Phone />,
        title: 'Contact Information',
        description: (
            <>
                For any questions or concerns, please reach out to us at:<br />
                <span className="font-semibold text-[#004040]">sales@pacwestmed.com</span>
            </>
        ),
    },
];

const ShippingPolicy = () => {
    return (
        <LayoutWrapper className="min-h-screen flex justify-center items-center py-8">
            <div className="max-w-screen-lg w-full">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-semibold text-teal-900">
                        Shipping Policy
                    </h1>
                    <p className="text-[#666666] mt-2 max-w-2xl mx-auto text-base sm:text-lg">
                        Pac West Medical is a trusted name in the healthcare industry. We guarantee that your medical supplies will be delivered promptly, securely, and efficiently. Below is a brief overview of our shipping process.
                    </p>
                </div>
                {/* Policies Section */}
                <div>
                    {policies.map((policy, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="flex items-center text-2xl font-semibold text-gray-800 gap-2 mb-2">
                                <span className="bg-[#CFE7E7] p-1.5 -mt-0.5 rounded-lg text-[#004040]">
                                    {policy.icon}
                                </span>
                                <span className="text-base md:text-xl">{policy.title}</span>
                            </h3>
                            <div className="text-gray-600 ml-[3rem]">{policy.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default ShippingPolicy;
