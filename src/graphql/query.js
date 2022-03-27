import { gql } from "@apollo/client";


export const GET_PRODUCTS = gql`
  query products {
    products {
      _id
      name
      image
      available
    }
  }
`;

export const FIND_PRODUCT_BY_ID = gql`
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
