"use client";
import React from 'react';
import HeroSection from './HeroSection';
import MedicalEquipment from './MedicalEquipment';
import Sustainability from './Sustainability';
import WhyChooseUs from './WhyChooseUs';
import ReliableInstrumnet from './ReliableInstrument';
import TrustedUser from './TrustedUser';
import TrustedStandard from './TrustedStandard';
// import BlogSection from './BlogSection';

export default function MainPageData() {
    return (
        <>
            <HeroSection />
            <MedicalEquipment />
            <TrustedStandard />
            <Sustainability />
            <WhyChooseUs />
            <ReliableInstrumnet />
            <TrustedUser />
            {/* <BlogSection /> */}
        </>
    );
}
