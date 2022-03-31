import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {FIND_PRODUCT_BY_ID} from "../../../../graphql/query"
import UpdateProductForm from "../../../../components/ProductForm/UpdateProductForm";



const ProductUpdate = () => {
  const { productId } = useParams();
  const { data, loading} = useQuery(FIND_PRODUCT_BY_ID, {
    variables: { productId: productId },
  });
  if (loading) return 'Loading...';

  return (
    <div>
      {/* <h1>Update product Here</h1> */}
      <UpdateProductForm productId={productId}  productData={data}/>
    </div>
  );
};

export default ProductUpdate;
