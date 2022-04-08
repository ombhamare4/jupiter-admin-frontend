import Product from "../../components/Products/Products";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/query";
import NewLoading from "../../components/Message/NewLoading";
import NewError from "../../components/Message/NewError";

const ProductPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <NewLoading />;
  if (error) return <NewError/>;

  return (
    <div>
      <Product products={data.products} />
    </div>
  );
};

export default ProductPage;
