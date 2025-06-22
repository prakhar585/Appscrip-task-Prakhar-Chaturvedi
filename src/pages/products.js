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
        <title>Product Listing Page</title>
        <meta
          name="description"
          content="SSR product listing for Appscrip task"
        />
      </Head>
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
