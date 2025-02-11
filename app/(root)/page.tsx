import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/ui/shared/header/product/product-list";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' />
    </>
  );
};

export default HomePage;
