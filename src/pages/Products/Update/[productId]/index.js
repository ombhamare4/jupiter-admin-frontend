import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {FIND_PRODUCT_BY_ID} from "../../../../graphql/query"
import UpdateProductForm from "../../../../components/ProductForm/UpdateProductForm";
import NewLoading from "../../../../components/Message/NewLoading";
import NewError from "../../../../components/Message/NewError";

const ProductUpdate = () => {
  const { productId } = useParams();
  const { data, loading,error} = useQuery(FIND_PRODUCT_BY_ID, {
    variables: { productId: productId },
  });
  if (loading) return <NewLoading/>;
  if(error) return <NewError/>;

  return (
    <div>
      {/* <h1>Update product Here</h1> */}
      <UpdateProductForm productId={productId}  productData={data}/>
    </div>
  );
};

export default ProductUpdate;
