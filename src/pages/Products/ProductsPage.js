import Product from "../../components/Products/Products";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/query";

const ProductPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <Loading />;
  if (error) return <p>Error :( </p>;

  return (
    <div>
      <Product products={data.products} />
    </div>
  );
};

export default ProductPage;
