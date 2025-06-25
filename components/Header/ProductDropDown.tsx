"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMenuData } from "@/lib/api";

export default function CustomDropdownMenu({ closeMenu }: { closeMenu: () => void }) {
  const [visibleItems, setVisibleItems] = useState(0);
  const [, setColumns] = useState(4);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
        setVisibleItems(2);
      } else {
        setColumns(4);
        setVisibleItems(8);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    setIsClient(true);
    queryClient.removeQueries({ queryKey: ["menuData"] }); // Clear cache on mount

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [queryClient]);

  const { data: menuData } = useQuery({
    queryKey: ["menuData"],
    queryFn: fetchMenuData,
    staleTime: 0,
  });

  const navigateToCatalog = () => {
    router.push("/catalog");
  };


  const navigateToCategories = () => {
    router.push("/category");
    closeMenu();
  };

  const navigateToSpecificCategories = (category: { name: string; slug: string }) => {
    router.push(`/category/${category.slug}`);
    closeMenu();
  };

  const handleCategoryClick = useCallback(
    (subcategorySlug: string) => {
      router.push(`/sub-category/${subcategorySlug}`);
    },
    [router]
  );

  const handleViewAll = useCallback(
    (category: string) => {
      router.push(`/category/${category}`);
    },
    [router]
  );

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="inline-flex items-center overflow-hidden hover:text-[#008080] focus:outline-none focus:ring-0"
          aria-label="Support Menu"
        >
          <span className="transition">Products</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="lg:mt-5 grid lg:grid-cols-4 gap-4 xl:py-[6rem] 2xl:py-[8rem] lg:py-[3rem] px-[5rem] lg:px-[4rem] xl:pl-[8rem] bg-[#F7F7F7] rounded-2xl border-none shadow-lg w-screen">
          {menuData?.slice(0, visibleItems).map((wrapper: { category: { name: string; slug: string; subCategories?: { name: string; slug: string }[] } }, index: number) => {
            const { category } = wrapper;
            return (
              <div key={index}>
                <DropdownMenuItem
                  className="text-sm cursor-pointer lg:text-lg font-semibold text-[#004040] focus:bg-[#F7F7F7] focus:text-[#008080] -ml-2"
                  onClick={() => navigateToSpecificCategories(category)}
                >
                  {category.name}
                </DropdownMenuItem>
                {category.subCategories?.slice(0, visibleItems).map((subCategory, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    className="text-[#666666] cursor-pointer text-sm lg:text-base focus:bg-[#F7F7F7] focus:text-[#008080]"
                    onClick={() => handleCategoryClick(subCategory.slug)}
                  >
                    <span className="text-[#666666] mr-2">»</span> {subCategory.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem
                  className="text-[#008080] cursor-pointer text-sm lg:text-base focus:bg-[#F7F7F7] focus:text-[#184b4b] w-[5rem]"
                  onClick={() => handleViewAll(category.slug)}
                >
                  View All
                </DropdownMenuItem>
              </div>
            );
          })}
          <div className="flex space-x-2">
            <DropdownMenuItem
              className="bg-[#008080] text-white hover:bg-[#008080]/90 h-10 px-4 py-2 w-[10rem] focus:bg-[#378b8b] focus:text-white"
              onClick={navigateToCategories}
            >
              Browse Categories
            </DropdownMenuItem>

            <DropdownMenuItem
              className="bg-[#008080] text-white hover:bg-[#008080]/90 h-10 px-5 py-2 w-[8rem] focus:bg-[#378b8b] focus:text-white"
              onClick={navigateToCatalog} // Make sure this function exists
            >
              Mini Catalog
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  );
}
