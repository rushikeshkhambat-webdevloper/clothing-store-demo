// NOTE: Only change from your original file is the added `gender` field on
// each product (needed to split "Women's Edit" / "Men's Edit" sections).
// Assumed based on product name — feel free to change any of these.

export const products = [
  {
    id: 1,
    name: "Sand Linen Shirt",
    price: 1899,
    category: "Tops",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    colors: ["#E8E3DC", "#1A1A1A", "#A3B18A"],
    sizes: ["S", "M", "L", "XL"],
    description: "Breathable linen shirt with a relaxed fit. Perfect for everyday wear."
  },
  {
    id: 2,
    name: "Oversized Cotton Tee",
    price: 899,
    category: "Oversized",
    gender: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    colors: ["#FAF9F6", "#1A1A1A", "#C97B5F"],
    sizes: ["S", "M", "L", "XL"],
    description: "Heavyweight cotton tee with a boxy oversized silhouette."
  },
  {
    id: 3,
    name: "Wide Leg Trousers",
    price: 2199,
    category: "Bottoms",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    colors: ["#1A1A1A", "#E8E3DC", "#6B705C"],
    sizes: ["26", "28", "30", "32"],
    description: "Flowy wide-leg trousers with a high waist. Effortless and elegant."
  },
  {
    id: 4,
    name: "Knit Co-ord Set",
    price: 2999,
    category: "Co-ords",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    colors: ["#E8E3DC", "#A3B18A", "#1A1A1A"],
    sizes: ["S", "M", "L"],
    description: "Matching knit top and skirt set. Minimal, cozy, and chic."
  },
  {
    id: 5,
    name: "Cropped Cardigan",
    price: 1599,
    category: "Tops",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    colors: ["#FAF9F6", "#C97B5F", "#1A1A1A"],
    sizes: ["S", "M", "L"],
    description: "Soft ribbed cardigan with a cropped fit. Layer it over anything."
  },
  {
    id: 6,
    name: "Baggy Denim Jeans",
    price: 2499,
    category: "Bottoms",
    gender: "Men",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    colors: ["#4A5568", "#1A1A1A"],
    sizes: ["26", "28", "30", "32"],
    description: "Vintage-wash baggy jeans with a relaxed streetwear fit."
  },
  {
    id: 7,
    name: "Oversized Hoodie",
    price: 1799,
    category: "Oversized",
    gender: "Men",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    colors: ["#E8E3DC", "#1A1A1A", "#A3B18A"],
    sizes: ["S", "M", "L", "XL"],
    description: "Fleece-lined oversized hoodie. Your new everyday staple."
  },
  {
    id: 8,
    name: "Silk Slip Dress",
    price: 2699,
    category: "Co-ords",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    colors: ["#1A1A1A", "#E8E3DC", "#C97B5F"],
    sizes: ["S", "M", "L"],
    description: "Bias-cut silk slip dress. Minimal, elegant, and effortlessly cool."
  }
];

export const categories = [
  { name: "Tops", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { name: "Bottoms", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80" },
  { name: "Co-ords", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" },
  { name: "Oversized", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" }
];
