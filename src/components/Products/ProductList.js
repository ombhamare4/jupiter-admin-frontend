import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REMOVE_PRODUCT } from "../../graphql/mutation";
import { GET_PRODUCTS } from "../../graphql/query";
import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";
const ProductList = (props) => {
  const [removeProduct, {loading,error}] = useMutation(REMOVE_PRODUCT, {
    refetchQueries: [GET_PRODUCTS, "products"],
  });
  const deleteHandler = (event) => {
    const productId = event.target.value;
    removeProduct({
      variables: {
        productId: productId,
      },
    });
  };

  if(loading) return <NewLoading/>;
  if(error) return <NewError/>

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Inventory
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sells
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.products
                  .slice(0)
                  .reverse()
                  .map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 ">
                            <img className=" w-32" src={product.image} alt="" />
                          </div>
                          {/* <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                  <div className="text-sm text-gray-500">{product.email}</div>
                                </div> */}
                        </div>
                      </td>
                      <td className="px-10 py-4 text-center ">
                        <div className="text-sm text-left text-gray-900">
                          {product.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-center">
                        <span className="px-2  inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800  text-sm">
                          {product.available}
                        </span>
                      </td>
                      <td className="pFx-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <NavLink
                          to={`/products/update/${product._id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Update
                        </NavLink>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="Submit"
                          value={product._id}
                          onClick={deleteHandler}
                          className="bg-red-600 p-2 rounded-lg hover:bg-red-700 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
