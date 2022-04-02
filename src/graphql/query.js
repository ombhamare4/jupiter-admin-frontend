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

export const GET_ORDERS = gql`
  query Orders {
    orders {
      _id
      name {
        firstName
        lastName
      }
      user {
        name {
          firstName
          lastName
        }
      }
      orderStatus
      address {
        add1
        state
        street
        landmark
        city
        country
        pincode
      }
      orderProducts {
        product {
          name
        }
      }
      createdAt
    }
  }
`;

export const ORDER_BY_ID = gql`
  query OrderById($orderId: String!) {
    orderById(orderId: $orderId) {
      _id
      name {
        firstName
        lastName
      }
      phoneNo
      address {
        add1
        landmark
        city
        state
        street
        country
        pincode
      }
      user {
        email
        name {
          firstName
          lastName
        }
      }
      orderProducts {
        product {
          _id
          name
          image
          price {
            discountPrice
          }
        }
      }
      createdAt
    }
  }
`;

export const GET_SHIP = gql`
  query ship {
    ship {
      _id
      name {
        firstName
        lastName
      }
      user {
        name {
          firstName
          lastName
        }
      }
      orderStatus
      address {
        add1
        state
        street
        landmark
        city
        country
        pincode
      }
      orderProducts {
        product {
          _id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;
