// app/category/page.tsx

"use client";
import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const pdfList = [
    {
        id: "cardiac",
        name: "Cardiac Instruments Catalog",
        file: "Cardiac.pdf",
    },
    {
        id: "dental",
        name: "Dental Instruments Catalog",
        file: "Dental.pdf",
    },
    {
        id: "ent",
        name: "ENT Instruments Catalog",
        file: "ENT.pdf",
    },
    {
        id: "diagnostics",
        name: "Diagnostics Instruments Catalog",
        file: "Diagnostics.pdf",
    },
    {
        id: "general",
        name: "General Instruments Catalog",
        file: "general.pdf",
    },
    {
        id: "gynecology",
        name: "Gynecology Instruments Catalog",
        file: "Gynecology.pdf",
    },
    {
        id: "neuro",
        name: "Neuro Instruments Catalog",
        file: "Neuro.pdf",
    },
    {
        id: "orthopedic",
        name: "Orthopedic Instruments Catalog",
        file: "Orthopedic.pdf",
    },
    {
        id: "plastic",
        name: "Plastic Instruments Catalog",
        file: "Plastic.pdf",
    },
    {
        id: "urology",
        name: "Urology Instruments Catalog",
        file: "Urology.pdf",
    },
];

const CatalogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPdf, setSelectedPdf] = useState(pdfList[0]);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const filteredPdfs = pdfList.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.file.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Responsive: Show sidebar on desktop if sidebarOpen, always modal on mobile
    return (
        <div className="flex flex-col h-[48rem] bg-[#F7F7F7] mb-[5rem]">
            {/* Mobile Top Bar */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-[#008080] text-white">
                <button onClick={() => setMobileSidebarOpen(true)} aria-label="Open Sidebar">
                    <FiMenu size={24} />
                </button>
                <span className="text-lg font-semibold">Catalog Library</span>
                <div />
            </div>

            {/* Main Content Wrapper */}
            <div className="flex flex-1 h-full">
                {/* Sidebar for large screens */}
                <div
                    className={`
            hidden
            lg:flex
            flex-col
            h-full
            bg-white
            border-r
            border-gray-200
            transition-all
            duration-300
            ${sidebarOpen ? "w-80 min-w-80" : "w-12 min-w-12"}
          `}
                >
                    {/* Sidebar Header with toggle */}
                    <div className="flex items-center justify-between p-4 sticky top-0 bg-white z-10 border-b border-gray-200">
                        {sidebarOpen ? (
                            <>
                                <h2 className="text-xl font-semibold text-gray-800">Catalog Library</h2>
                                <button
                                    onClick={() => setSidebarOpen(false)}
                                    className="p-1 rounded hover:bg-gray-200 transition"
                                    aria-label="Close Sidebar"
                                >
                                    <FiX size={22} />
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-1 rounded hover:bg-gray-200 transition mx-auto"
                                aria-label="Open Sidebar"
                            >
                                <FiMenu size={22} />
                            </button>
                        )}
                    </div>
                    {sidebarOpen && (
                        <>
                            {/* Search Box */}
                            <div className="relative m-4 mt-2">
                                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search catalogs..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080]"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            {/* Catalog List */}
                            <div className="divide-y divide-gray-200 overflow-y-auto">
                                {filteredPdfs.length > 0 ? (
                                    filteredPdfs.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`p-4 hover:bg-blue-50 cursor-pointer transition-colors ${selectedPdf?.id === item.id
                                                    ? "bg-blue-100 border-l-4 border-[#008080]"
                                                    : ""
                                                }`}
                                            onClick={() => setSelectedPdf(item)}
                                        >
                                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                                            <div className="flex justify-between mt-1 text-sm text-gray-500">
                                                <span>{item.file}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        No catalogs found matching your search
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Mobile Sidebar (Drawer) */}
                {mobileSidebarOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black opacity-40"
                            onClick={() => setMobileSidebarOpen(false)}
                        />
                        {/* Drawer */}
                        <div className="relative w-72 max-w-full bg-white h-full flex flex-col border-r border-gray-200 animate-slideInLeft">
                            <div className="flex items-center justify-between p-4 sticky top-0 bg-white z-10 border-b border-gray-200">
                                <h2 className="text-xl font-semibold text-gray-800">Catalog Library</h2>
                                <button
                                    onClick={() => setMobileSidebarOpen(false)}
                                    className="p-1 rounded hover:bg-gray-200 transition"
                                    aria-label="Close Sidebar"
                                >
                                    <FiX size={22} />
                                </button>
                            </div>
                            <div className="relative m-4 mt-2">
                                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search catalogs..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080]"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="divide-y divide-gray-200 overflow-y-auto">
                                {filteredPdfs.length > 0 ? (
                                    filteredPdfs.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`p-4 hover:bg-blue-50 cursor-pointer transition-colors ${selectedPdf?.id === item.id
                                                    ? "bg-blue-100 border-l-4 border-[#008080]"
                                                    : ""
                                                }`}
                                            onClick={() => {
                                                setSelectedPdf(item);
                                                setMobileSidebarOpen(false);
                                            }}
                                        >
                                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                                            <div className="flex justify-between mt-1 text-sm text-gray-500">
                                                <span>{item.file}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        No catalogs found matching your search
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main PDF Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {selectedPdf ? (
                        <>
                            <div className="bg-white p-4 border-b border-gray-200 flex flex-wrap justify-between items-center gap-2">
                                <h2 className="text-xl font-semibold text-gray-800">{selectedPdf.name}</h2>

                            </div>
                            {/* PDF Viewer */}
                            <div className="flex-1 overflow-auto bg-[#f7f7f7] min-h-0">
                                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <div className="h-full" style={{ height: "calc(100vh - 110px)" }}>
                                        <Viewer
                                            fileUrl={`/catalog/${selectedPdf.file}`}
                                            plugins={[defaultLayoutPluginInstance]}
                                            defaultScale={SpecialZoomLevel.PageFit}
                                        />
                                    </div>
                                </Worker>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            Select a catalog from the sidebar to view
                        </div>
                    )}
                </div>
            </div>

            {/* Animations for mobile drawer */}
            <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft { animation: slideInLeft 0.25s ease; }
      `}</style>
        </div>
    );
};

export default CatalogPage;
