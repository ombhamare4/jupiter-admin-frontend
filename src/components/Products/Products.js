import ProductList from "./ProductList";
import { NavLink } from "react-router-dom";
const Product = (props) => {
  return (
    <div className="p-5">
      <div>
        <div className="flex justify-between items-center text-xl mb-5 ">
          <h1 className="font-bold">Products      <span className="text-gray-500 text-sm">({props.products.length})</span></h1>
          <NavLink to="/products/add">
            <button className="bg-blue-700 text-white p-2 rounded-lg">
              Add Product
            </button>
          </NavLink>
        </div>
        <div>
          <ProductList products={props.products} />
        </div>
      </div>
    </div>
  );
};

export default Product;
