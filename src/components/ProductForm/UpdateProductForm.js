import { useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
const Category = [
  {
    id: 1,
    category: "Monitor",
  },
  {
    id: 2,
    category: "Keyboard",
  },
  {
    id: 3,
    category: "Mouse",
  },
  {
    id: 4,
    category: "Speaker",
  },
  {
    id: 5,
    category: "Headphone",
  },
  {
    id: 6,
    category: "CPU Cabinet",
  },
  {
    id: 7,
    category: "Motherboard",
  },
  {
    id: 8,
    category: "Processor",
  },
  {
    id: 9,
    category: "RAM",
  },
  {
    id: 10,
    category: "HDD & SSD",
  },
  {
    id: 11,
    category: "Cooling Fans",
  },
  {
    id: 12,
    category: "Graphic Card",
  },
  {
    id: 13,
    category: "CD Drive",
  },
  {
    id: 14,
    category: "Power Supply",
  },
  {
    id: 15,
    category: "Processor Cooler",
  },
  {
    id: 16,
    category: "OS",
  },
  {
    id: 17,
    category: "Gaming Chair",
  },
  {
    id: 18,
    category: "Webcam & Camera",
  },
  {
    id: 19,
    category: "Desk",
  },
  {
    id: 20,
    category: "Laptop",
  },
  {
    id: 21,
    category: "Assemble CPU",
  },
  {
    id: 22,
    category: "Cable",
  },
  {
    id: 23,
    category: "Consoles",
  },
  {
    id: 24,
    category: "Games",
  },
];

const UPDATE_PRODUCT = gql`
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

const UpdateProductForm = (props) => {
  let navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateProduct] = useMutation(
    UPDATE_PRODUCT,
    {
      onCompleted: () => {
        setIsUpdated(true);
      },
    }
  );

  const [dropDownSelect, setDropDownSelect] = useState(Category[0]);
  if (isUpdated) {
    navigate("/products");
  }
  const productNameRef = useRef("");
  const productDescriptionRef = useRef("");
  const productImageRef = useRef("");
  const productOriginalPriceRef = useRef("");
  const productDiscountPriceRef = useRef("");
  const productCompanyRef = useRef("");
  const productCategoryRef = useRef("");
  const productAvailabilityRef = useRef("");
  const productWeightRef = useRef("");

  const labelStyle = "form-label inline-block mb-2 text-gray-700";
  const inputStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  const submitHandler = (event) => {
    event.preventDefault();

    const productName = productNameRef.current.value;
    const productDescription = productDescriptionRef.current.value;
    const productImage = productImageRef.current.value;
    const productOriginalPrice = productOriginalPriceRef.current.value;
    const productDiscountPrice = productDiscountPriceRef.current.value;
    const productComapny = productCategoryRef.current.value;
    const productCategory = dropDownSelect.category;
    const productAvailability = productAvailabilityRef.current.value;
    const productWeight = productWeightRef.current.value;
    const productId = props.productId;

    updateProduct({
      variables: {
        productId: productId,
        name: productName,
        description: productDescription,
        image: productImage,
        originalPrice: parseFloat(productOriginalPrice),
        discountPrice: parseFloat(productDiscountPrice),
        company: productComapny,
        category: productCategory,
        available: parseInt(productAvailability),
        weight: parseFloat(productWeight),
      },
    });
  };

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
  };

  const dropDownHandler = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const categoryID = el.getAttribute("id");
    setDropDownSelect(Category[categoryID - 1]);
  };
  return (
    <div className="p-5">
      <form onSubmit={submitHandler}>
        <div className="form-group mb-6">
          <label className={labelStyle}>Name</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Product Name"
            ref={productNameRef}
            defaultValue={props.productData.productByID.name}
            onChange={inputChangedHandler}
          />

          <label className={labelStyle}>Description</label>
          <textarea
            className={inputStyle}
            placeholder="Product Description..."
            ref={productDescriptionRef}
            rows={3}
            defaultValue={props.productData.productByID.description}
            onChange={inputChangedHandler}
          />

          <label className={labelStyle}>Image</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Image URL"
            ref={productImageRef}
            defaultValue={props.productData.productByID.image}
            onChange={inputChangedHandler}
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelStyle}>Discount Price</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Discount Price"
                ref={productDiscountPriceRef}
                step="any"
                defaultValue={props.productData.productByID.price.discountPrice}
                onChange={inputChangedHandler}
              />
            </div>
            <div>
              <label className={labelStyle}>Original Price</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Original Price"
                ref={productOriginalPriceRef}
                step="any"
                defaultValue={props.productData.productByID.price.originalPrice}
                onChange={inputChangedHandler}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelStyle}>Company</label>
              <input
                type="text"
                className={inputStyle}
                placeholder="Company"
                ref={productCompanyRef}
                defaultValue={props.productData.productByID.company}
                onChange={inputChangedHandler}
              />
            </div>

            <div>
              <label className={labelStyle}>Category</label>
              <select
                name="Electronics"
                className={inputStyle}
                onChange={dropDownHandler}
              >
                {Category.map((category) => (
                  <option
                    key={category.id}
                    defaultValue={props.productData.productByID.category}
                    ref={productCategoryRef}
                    id={category.id}
                  >
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelStyle}>Availability</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Availability"
                ref={productAvailabilityRef}
                defaultValue={props.productData.productByID.available}
                onChange={inputChangedHandler}
              />
            </div>

            <div>
              <label className={labelStyle}>Weight</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Weight"
                ref={productWeightRef}
                defaultValue={props.productData.productByID.weight}
                onChange={inputChangedHandler}
              />
            </div>
          </div>
          <div className="mt-5 text-right">
            <button
              className="bg-blue-700 text-white p-2 rounded-lg"
              type="Submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
