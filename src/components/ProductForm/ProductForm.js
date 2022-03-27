import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/query";
import { CREATE_PORDUCT } from "../../graphql/mutation";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ErrorModal from "../Modal/ErrorModal";
import SuccessModal from "../Modal/SuccessModal";

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
    category: "Headphones",
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
    category: "Proccessor Cooler",
  },
  {
    id: 16,
    category: "Operating System",
  },
  {
    id: 17,
    category: "Gaming Chair",
  },
  {
    id: 18,
    category: "Webcam",
  },
  // {
  //   id: 19,
  //   category: "Desk",
  // },
  {
    id: 19,
    category: "Laptop",
  },
  {
    id: 20,
    category: "Assembled CPU",
  },
  {
    id: 21,
    category: "Mic",
  },
  {
    id: 22,
    category: "Cables",
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

const ProductForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [addProduct, { refetch }] = useMutation(CREATE_PORDUCT, {
    onCompleted: () => {
      setSuccess(true);
    },
    onError: (error) => {
      console.log(error);
      if (error) {
        setError(true);
      }
    },
    refetchQueries: [GET_PRODUCTS, "products"],
  });

  const [dropDownSelect, setDropDownSelect] = useState(Category[0]);

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
    const productComapny = productCompanyRef.current.value;
    const productCategory = dropDownSelect.category;
    const productAvailability = productAvailabilityRef.current.value;
    const productWeight = productWeightRef.current.value;

    addProduct({
      variables: {
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
    }).then(refetch);
  };

  const dropDownHandler = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const categoryID = el.getAttribute("id");
    setDropDownSelect(Category[categoryID - 1]);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div className="p-5">
      {success && (
        <SuccessModal title="Success" message="Product Added Successfully" />
      )}
      {error && (
        <ErrorModal
          title="Something Went Wrong"
          error="Check Product Details Again"
          errorHandler={errorHandler}
        />
      )}

      <form onSubmit={submitHandler}>
        <div className="form-group mb-6">
          <label className={labelStyle}>Name</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Product Name"
            ref={productNameRef}
          />

          <label className={labelStyle}>Description</label>
          <textarea
            className={inputStyle}
            placeholder="Product Description..."
            ref={productDescriptionRef}
            rows={3}
          />

          <label className={labelStyle}>Image</label>
          <input
            type="text"
            className={inputStyle}
            placeholder="Image URL"
            ref={productImageRef}
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelStyle}>Original Price</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Original Price"
                ref={productOriginalPriceRef}
                step="any"
              />
            </div>

            <div>
              <label className={labelStyle}>Discount Price</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Discount Price"
                ref={productDiscountPriceRef}
                step="any"
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
                    value={category.category}
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
              />
            </div>

            <div>
              <label className={labelStyle}>Weight</label>
              <input
                type="number"
                className={inputStyle}
                placeholder="Weight"
                ref={productWeightRef}
              />
            </div>
          </div>
          <div className="mt-5 text-right">
            <button
              className="bg-blue-700 text-white p-2 rounded-lg"
              type="Submit"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
