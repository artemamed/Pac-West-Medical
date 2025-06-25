import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const trusted = [
  {
    title: "Scalpels for Precision Surgery",
    imageUrl: "/images/trusted/CE.svg",
  },
  {
    title: "Scalpels for Precision Surgery",
    imageUrl: "/images/trusted/FDA.svg",
  },
  {
    title: "Scalpels for Precision Surgery",
    imageUrl: "/images/trusted/ISO.svg",
  },
  {
    title: "Scalpels for Precision Surgery",
    imageUrl: "/images/trusted/ASTM.svg",
  },
];

const products = [
  {
    title: "Rollator Walker",
    price: "55.64",
    imageUrl: "/images/slider/slide1.png",
    location: "/product/rollator-walker-in-large-size",
  },
  {
    title: "Bone Rib Shear ",
    price: "158",
    imageUrl: "/images/slider/slide22.webp",
    location: "/product/blumenthalangled",
  },
  {
    title: "TC needleholde",
    price: "110",
    imageUrl: "/images/slider/slide33.png",
    location: "/product/martin-type",
  },
];


const TrustedStandard = () => {
  const route = useRouter();
  const handleProductClick = () => {
    route.push('/category');
  };
  return (
    <LayoutWrapper className="min-h-screen md:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-10">
        Trusted by Global Health Standards
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {trusted.map((product, index) => (
          <div
            key={index}
            className="border-none p-2 sm:p-4 bg-white flex items-center justify-center"
          >
            <Image
              width={100}
              height={100}
              src={product.imageUrl}
              alt={product.title}
              className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] object-contain"
            />
          </div>
        ))}
        <Image
          width={100}
          height={100}
          src="/images/trusted/duns.png"
          alt="Scalpels for Precision Surgery"
          className="w-[150px] h-[80px] lg:h-[120px] lg:w-[300px] object-contain md:mt-[1rem] ml-[1rem]"
        />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 mt-10 leading-tight">Best-Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-none rounded-lg p-4 bg-white"
          >
            <Image
              width={300}
              height={300}
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-[15rem] lg:h-[20rem] p-5 object-contain mb-4 border shadow-md rounded-xl"
            />
            <h3 className="text-lg mb-2 font-semibold">{product.title}</h3>
            {/* <p className="text-xl font-bold mb-4">${product.price}</p> */}
            <Link key={index} href={product.location.startsWith("/") ? product.location : `/${product.location}`} passHref>
              <button className="border text-teal-600 border-teal-600 py-2 px-4 rounded hover:bg-teal-800 hover:text-white transition" onClick={handleProductClick}>
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default TrustedStandard;
