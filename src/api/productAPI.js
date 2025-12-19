const BASE_URL = "https://fakestoreapi.com/products";

// Fetch all products
const fetchProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch product by ID
const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
    }
}

export { fetchProducts, fetchProductById };