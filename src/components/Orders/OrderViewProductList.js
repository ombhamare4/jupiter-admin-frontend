function converter(sumDiscount) {
  var x = sumDiscount;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var discountPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return discountPrice;
}

const OrderViewProductList = (props) => {
  let sumDiscount = 0;
  let sumOriginal = 0;

  props.product.map((product) => {
    sumDiscount = sumDiscount + parseInt(product.product.price.discountPrice);
    sumOriginal = sumOriginal + parseInt(product.product.price.originalPrice);
  });

  return (
    <div className="mt-5">
      <h1 className="font-bold text-gray-600">Product List</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.product.map((product) => (
                    <tr className="border-b" key={product.product._id}>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace">
                        <img
                          src={product.product.image}
                          className="w-16"
                          alt="Jupiter.Com"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace">
                        {product.product.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {/* {product.product.price.discountPrice} */}
                        Rs. {converter(product.product.price.discountPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex font-bold text-gray-600">
        <h1 className="px-5">Total: </h1>
        <h1>{converter(sumDiscount)}</h1>
      </div>
    </div>
  );
};

export default OrderViewProductList;
