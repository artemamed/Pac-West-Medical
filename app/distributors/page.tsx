// app/distributors/page.tsx

"use client";

import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const API_URL =
    "https://medinven.api.artemamed.com/api/clients/client-distributor/AMG/requests/add-new-request";

const Distributors = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        country: "",
        experiencedSurgical: "", // "yes" or "no"
        experiencedFurniture: "", // "yes" or "no"
        experiencedDisposable: "", // "yes" or "no"
        message: "",
    });

    const [companyProfilePdf, setCompanyProfilePdf] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    // Input and radio change handler
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // File upload handler
    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            setError("File size exceeds 5MB.");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setCompanyProfilePdf(reader.result as string);
        };
        reader.onerror = () => {
            setError("Failed to read file.");
        };
        reader.readAsDataURL(file);
    };

    // Submit handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setLoading(true);

        // API expects booleans
        const payload = {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            website: formData.website,
            country: formData.country,
            experiencedSurgical: formData.experiencedSurgical === "yes",
            experiencedFurniture: formData.experiencedFurniture === "yes",
            experiencedDisposable: formData.experiencedDisposable === "yes",
            companyProfilePdf: companyProfilePdf,
            message: formData.message,
        };

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error("Submission failed. Please try again.");
            setSuccess(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                company: "",
                website: "",
                country: "",
                experiencedSurgical: "",
                experiencedFurniture: "",
                experiencedDisposable: "",
                message: "",
            });
            setCompanyProfilePdf(null);
        } catch (err: Error | unknown) {
            setError(
                err instanceof Error ? err.message : "Submission failed."
            );
        } finally {
            setLoading(false);
        }
    };

    // Cards (no change)
    const cards = [
        {
            logo: "/images/Distributors/Allnet.png",
            name: "All Net Medical",
            link: "https://www.allnetmedical.com/",
        },
        {
            logo: "/images/Distributors/Dynamic.png",
            name: "Dynamic Medical",
            link: "https://www.dynamicmedicalsolution.com/",
        },
        {
            logo: "/images/Distributors/Wincorn.png",
            name: "Wincorn Medical",
            link: "https://www.wincornmedical.com/",
        },
    ];

    return (
        <LayoutWrapper className="min-h-screen py-6 sm:py-12">
            <div className="w-full max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004040] mb-4">
                        Our Trusted Distributors
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        We provide international services through a network of regional distributors and business partners across North America, Europe, and Asia.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    {/* Distributors Info */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                            <h2 className="text-2xl font-semibold text-[#004040] mb-4">
                                Global Coverage
                            </h2>
                            <p className="text-gray-600 text-justify">
                                They are trustworthy and reliable, as they are highly qualified and experts in their fields. They distribute our products and services with the same standard as we handled them. They transfer our motives to the world with pure intention.
                            </p>
                            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/Distributors/distributors.png"
                                    alt="Distributors Map"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Current Distributors */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-[#004040] mb-6">
                                Our Current Distributors
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="group cursor-pointer"
                                        onClick={() =>
                                            window.open(card.link, "_blank")
                                        }
                                    >
                                        <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center p-4 transition-all group-hover:bg-gray-100">
                                            <Image
                                                src={card.logo}
                                                alt={card.name}
                                                width={160}
                                                height={100}
                                                className="object-contain h-20 transition-transform group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <h3 className="text-gray-800 font-medium">
                                                {card.name}
                                            </h3>
                                            <CircleArrowRight className="text-green-600 group-hover:text-green-800 transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Registration Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
                            <h2 className="text-2xl font-bold text-[#004040] mb-2">
                                Become our Distributor
                            </h2>
                            <p className="text-gray-500 mb-6">
                                Fill out the form below to join our network
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                autoComplete="off"
                            >
                                {success && (
                                    <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                                        Thank you for registering! We’ll be in touch soon.
                                    </div>
                                )}
                                {error && (
                                    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                                        {error}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">
                                            Your Full Name{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">
                                            Your Official Email{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Company{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Mobile / WhatsApp{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Website
                                            </label>
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition"
                                                placeholder="Website (optional)"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">
                                                Country{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                    {/* Experience Questions */}
                                    <div className="space-y-4">
                                        {/* Surgical Instruments */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Is your team experienced in Surgical Instruments?{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex items-center space-x-6">
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="experiencedSurgical"
                                                        value="yes"
                                                        checked={
                                                            formData.experiencedSurgical === "yes"
                                                        }
                                                        onChange={handleChange}
                                                        required
                                                        className="h-4 w-4 text-[#004040] "
                                                    />
                                                    <span className="ml-2 text-gray-700">
                                                        Yes
                                                    </span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="experiencedSurgical"
                                                        value="no"
                                                        checked={
                                                            formData.experiencedSurgical === "no"
                                                        }
                                                        onChange={handleChange}
                                                        className="h-4 w-4 text-[#004040] "
                                                    />
                                                    <span className="ml-2 text-gray-700">
                                                        No
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        {/* Hospital Furniture */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Is your team experienced in Hospital Furniture?{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex items-center space-x-6">
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="experiencedFurniture"
                                                        value="yes"
                                                        checked={
                                                            formData.experiencedFurniture === "yes"
                                                        }
                                                        onChange={handleChange}
                                                        required
                                                        className="h-4 w-4 text-[#004040] "
                                                    />
                                                    <span className="ml-2 text-gray-700">
                                                        Yes
                                                    </span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="experiencedFurniture"
                                                        value="no"
                                                        checked={
                                                            formData.experiencedFurniture === "no"
                                                        }
                                                        onChange={handleChange}
                                                        className="h-4 w-4 text-[#004040] "
                                                    />
                                                    <span className="ml-2 text-gray-700">
                                                        No
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        {/* Disposable Items */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Is your team experienced in Disposable Item?{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex items-center space-x-6">
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="experiencedDisposable"
                                                        value="yes"
                                                        checked={
                                                            formData.experiencedDisposable === "yes"
                                                        }
                                                        onChange={handleChange}
                                                        required
                                                        className="h-4 w-4 text-[#004040] "
                                                    />
                                                    <span className="ml-2 text-gray-700">
                                                        Yes
                                                    </span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="experiencedDisposable"
                                                        value="no"
                                                        checked={
                                                            formData.experiencedDisposable === "no"
                                                        }
                                                        onChange={handleChange}
                                                        className="h-4 w-4 text-[#004040] "
                                                    />
                                                    <span className="ml-2 text-gray-700">
                                                        No
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">
                                            Company Profile (PDF or TXT, max. 5MB)
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                            <div className="space-y-1 text-center">
                                                <div className="flex text-sm text-gray-600">
                                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#004040] hover:text-[#007070] focus-within:outline-none">
                                                        <span>Upload a file</span>
                                                        <input
                                                            type="file"
                                                            className="sr-only"
                                                            accept=".pdf,.txt"
                                                            onChange={handleFileChange}
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PDF or TXT up to 5MB
                                                </p>
                                                {companyProfilePdf && (
                                                    <p className="text-green-600 text-xs mt-2">
                                                        File uploaded!
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">
                                            Your Message{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            maxLength={300}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition"
                                            placeholder="Tell us about your interest in becoming a distributor"
                                        />
                                        <div className="text-xs text-gray-500 text-right mt-1">
                                            {formData.message.length}/300 characters
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#004040] hover:bg-[#006060] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                                    >
                                        {loading
                                            ? "Submitting..."
                                            : "Submit Registration"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default Distributors;
