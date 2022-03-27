import { gql } from "@apollo/client";

export const CREATE_PORDUCT = gql`
  mutation AddProduct(
    $name: String!
    $description: String!
    $originalPrice: Float!
    $discountPrice: Float!
    $image: String!
    $available: Int!
    $weight: Float!
    $category: String!
    $company: String!
  ) {
    createProduct(
      productInput: {
        name: $name
        description: $description
        price: { originalPrice: $originalPrice, discountPrice: $discountPrice }
        image: $image
        available: $available
        weight: $weight
        category: $category
        company: $company
      }
    ) {
      name
    }
  }
`;


export const UPDATE_PRODUCT = gql`
mutation UpdateProduct(
  $productId: String!
  $name: String!
  $description: String!
  $originalPrice: Float!
  $discountPrice: Float!
  $image: String!
  $available: Int!
  $weight: Float!
  $category: String!
  $company: String!
) {
  updateProduct(
    productInput: {
      productId: $productId
      name: $name
      description: $description
      price: { originalPrice: $originalPrice, discountPrice: $discountPrice }
      image: $image
      available: $available
      weight: $weight
      category: $category
      company: $company
    }
  ) {
    name
  }
}
`;

export const REMOVE_PRODUCT = gql`
mutation RemoveProduct($productId: String!) {
  removeProduct(productId: $productId) {
    name
  }
}
`;