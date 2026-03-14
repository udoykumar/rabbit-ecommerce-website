import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturedSection from "../components/Products/FeaturedSection";
const placeholderProduct = [
  {
    _id: 5,
    name: "Wireless Headphones",
    price: 2500,
    image: [{ url: "https://picsum.photos/500/500?random=5", alText: "" }],
  },
  {
    _id: 6,
    name: "Smart Watch",
    price: 3200,
    image: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: 7,
    name: "Mechanical Keyboard",
    price: 4500,
    image: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 8,
    name: "Gaming Mouse",
    price: 1800,
    image: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProduct} />
        <FeaturedCollection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default Home;
