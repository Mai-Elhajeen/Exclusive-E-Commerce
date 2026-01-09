import { products as mockProducts } from "../data/productsData";

const mapApiProductToUI = (apiProduct) => {
  const mock = mockProducts.find(p => p.id === apiProduct.id) || {};
  const normalizedColors =
    mock?.colors?.map((color) => ({
      key: color.key,
      color: color.color,
      images: color.images || color.image || [],
    })) || [];

  return {
    id: apiProduct.id,
    title: apiProduct.title,
    price: apiProduct.price,
    oldPrice: mock?.oldPrice || null,
    discount: mock?.discount || null,
    badgeType: mock?.badgeType || null,

    status: mock?.status || "In Stock",
    sizes: mock?.sizes || [],

    image: apiProduct.image,
    
    colors: normalizedColors,
    rating: apiProduct.rating?.rate || 0,
    views: mock?.views || 0,
    showFavorite: true,
    showView: true,
    showColors: Array.isArray(normalizedColors) && normalizedColors.length > 0,
    showAddToCart: true,
    description: apiProduct.description,
    category: apiProduct.category
  };
};

export default mapApiProductToUI;