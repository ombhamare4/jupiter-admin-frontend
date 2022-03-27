import Product from "../../components/Products/Products";
import Loading from "../../components/Loading/Loading";
import { useQuery } from "@apollo/client";
import {GET_PRODUCTS} from "../../graphql/query"

const ProductPage = () => {
  // const [newData, setNewData] = useState(null);

  const { data, loading, error }= useQuery(GET_PRODUCTS);

  // console.log(data);
  if (loading) return <Loading />;
  if (error) return <p>Error :( </p>;

  return (
    <div>
      {/* <Loading/> */}
      <Product products={data.products} />
    </div>
  );
};

export default ProductPage;

// const GET_PRODUCTS = gql`
//   query products {
//     products {
//       _id
//       name
//       image
//       available
//     }
//   }
// `;
