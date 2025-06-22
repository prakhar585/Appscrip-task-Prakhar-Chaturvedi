import Head from "next/head";
import styles from "../styles/ProductsPage.module.css";
import { fetchProducts } from "../lib/fetchProducts";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import SortBar from "@/components/SortBar/SortBar";
import FilterSidebar from "@/components/FilterSlidebar/FilterSlidebar";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import TopStrip from "@/components/topStrip/TopStrip";

export async function getServerSideProps(context) {
  const { category, sort } = context.query;

  const products = await fetchProducts({ category, sort });

  return {
    props: {
      products,
      selectedCategory: category || "",
      selectedSort: sort || "",
    },
  };
}

export default function ProductsPage({
  products,
  selectedCategory,
  selectedSort,
}) {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <>
      <Head>
        <title>Premium Products Collection | Discover Quality Items</title>
        <meta
          name="description"
          content="Explore our curated collection of premium products including electronics, clothing, and accessories. Fast shipping and best prices guaranteed."
        />
        <meta
          name="keywords"
          content="products, shopping, electronics, clothing, accessories"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="Premium Products Collection" />
        <meta
          property="og:description"
          content="Explore our curated collection of premium products"
        />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Product Collection",
            description: "Premium product collection",
            url: "https://yoursite.com/products",
          })}
        </script>
      </Head>
      <TopStrip />
      <main style={{ padding: "2rem" }}>
        <Header></Header>
        <Hero></Hero>
        <SortBar
          totalItems={products.length}
          showFilters={showFilters}
          toggleFilters={() => setShowFilters((prev) => !prev)}
          selectedSort={selectedSort}
        />
        <div className={styles.gridLayout}>
          {showFilters && <FilterSidebar selectedCategory={selectedCategory} />}
          <ProductGrid products={products}></ProductGrid>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
