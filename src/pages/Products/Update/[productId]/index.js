import { useParams } from "react-router-dom";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import UpdateProductForm from "../../../../components/ProductForm/UpdateProductForm";
import { useState } from "react";

const FIND_PRODUCT_BY_ID = gql`
  query ProductById($productId: String!) {
    productByID(productId: $productId) {
      _id
      name
      price {
        originalPrice
        discountPrice
      }
      available
      image
      company
      category
      weight
      description
      reviews {
        rating
        comment
      }
      createdAt
    }
  }
`;

const ProductUpdate = () => {
  //   const [productData,setProductData]= useState([]);
  const { productId } = useParams();
  const { data, loading ,error} = useQuery(FIND_PRODUCT_BY_ID, {
    variables: { productId: productId },
  });
  if (loading) return 'Loading...';
  console.log(data);
  console.log(productId);
  console.log("Error: "+error);

  return (
    <div>
      {/* <h1>Update product Here</h1> */}
      <UpdateProductForm productId={productId}  productData={data}/>
    </div>
  );
};

export default ProductUpdate;
