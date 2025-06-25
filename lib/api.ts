import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API,
  },
});

// Fetch categories
export const getCategories = async () => {
  const response = await api.get("categories/mine");
  if (response.data.success) {
    return response.data.data.map(
      (item: { category: string }) => item.category
    );
  }
  throw new Error("Failed to fetch categories");
};

// Fetch categories for Header
export const fetchMenuData = async () => {
  const response = await api.get("categories/mine");
  if (response.data.success) {
    return response.data.data;
  }
  throw new Error("Failed to fetch categories from Menu");
};

export const fetchSubCategoriesURLS = async () => {
  const response = await api.get("sub-categories/mine-slugs");
  if (response.data.success) {
    return response.data.data;
  }
  throw new Error("Failed to fetch sub categories Slugs");
};

export const fetchProductsURLS = async () => {
  const response = await api.get("products/mine-slugs");
  if (response.data.success) {
    return response.data.data;
  }
  throw new Error("Failed to fetch products Slugs");
};



export const fetchCategoriesURLS = async () => {
  const response = await api.get("categories/mine-slugs");
  if (response.data.success) {
    return response.data.data;
  }
  throw new Error("Failed to fetch Sub categories Slugs");
};


// Fetch subcategories by category slug
export const getSubCategoriesByCategorySlug = async (
  categorySlug: string,
  page: number = 1,
  limit: number = 20
) => {
  if (!categorySlug) {
    throw new Error("Category slug is required to fetch subcategories.");
  }

  try {
    const response = await api.get(`categories/subCategories/${categorySlug}`, {
      params: { page, limit },
    });

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error("Category not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        window.location.href = "/404";
      }
      throw new Error(
        error.response?.data?.message || "Failed to fetch subcategories."
      );
    } else {
      throw new Error("Unexpected error occurred.");
    }
  }
};

// Fetch all products by subcategory slug
export const getProductsBySubCategorySlug = async (
  subCategorySlug: string,
  page: number = 1,
  limit: number = 8
) => {
  if (!subCategorySlug) throw new Error("SubCategory slug is required.");

  try {
    const response = await api.get(
      `sub-categories/metadata-products/${subCategorySlug}`,
      {
        params: { page, limit },
      }
    );

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error("Subcategory not found");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        window.location.href = "/404";
      }
      throw new Error(
        error.response?.data?.message || "Failed to fetch products."
      );
    } else {
      throw new Error("Unexpected error occurred.");
    }
  }
};

// Fetch a single product by slug
export const getProductBySlug = async (slug: string) => {
  if (!slug) throw new Error("Product slug is required.");

  try {
    const response = await api.get(`products/get-single/${slug}`);

    if (response.data.success && response.data.data) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || "Failed to fetch product.");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        // console.error("Product not found (404):", slug);
        window.location.href = "/404"; // Redirect user to the 404 page
      } else {
        console.error("Axios error:", error.response?.data);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

// Fetch similar products by subCategorySlug and productSlug
export const getSimilarProducts = async (
  subCategorySlug: string,
  productSlug: string,
  limit: number = 4
) => {
  if (!subCategorySlug || !productSlug) {
    throw new Error("Both subCategorySlug and productSlug are required.");
  }

  try {
    const response = await api.get(
      `sub-categories/similar-products/${subCategorySlug}/${productSlug}`,
      {
        params: { limit },
      }
    );
    if (response.data.success) {
      return response.data.data.products;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch similar products."
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

// Fetch products based on the search query
export const searchProducts = async (query: string | null, page: number) => {
  const searchQuery = query === null ? "" : query; // Use empty string for null query

  try {
    const response = await api.get("products/all-client-products", {
      params: { limit: 8, page: page, search: searchQuery },
    });
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
};
