import OrderViewProductList from "./OrderViewProductList";

const OrderViewData = (props) => {
  // console.log(props.order.orderProducts);
  // let orderDate = new Date(props.order.createdAt);

  var created_date = new Date(props.order.createdAt);

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = created_date.getFullYear();
  var month = months[created_date.getMonth()];
  var date = created_date.getDate();
  var hour = created_date.getHours();
  var min = created_date.getMinutes();
  var sec = created_date.getSeconds();
  var time =
    date + "," + month + " " + year + " " + hour + ":" + min + ":" + sec;

  return (
    <div className="p-5">
      <h1 className="p-2 text-xl font-bold">Order Details</h1>
      <div className="p-5 bg-white rounded-xl shadow-xl">
        <div className="flex justify-between mb-2">
          <h1 className="font-bold text-gray-600">
            Order Id:
            <span className="font-bold mx-2">{props.order._id.slice(-4)}</span>
          </h1>
          <h1 className="font-bold text-gray-600">Order Date: {time}</h1>
        </div>
        <div className="grid grid-cols-2 mb-2">
          <h1 className="font-bold text-gray-600">
            Customer:{" "}
            <span className="text-black font-normal">
              {props.order.user.name.firstName} {props.order.user.name.lastName}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Billing to:{" "}
            <span className="text-black font-normal">
              {props.order.name.firstName} {props.order.name.lastName}
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <h1 className="font-bold text-gray-600">
            Contact:{" "}
            <span className="text-black font-normal">
              {props.order.phoneNo}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Address:{" "}
            <span className="text-black font-normal">
              {props.order.address.add1}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Landmark:
            <span className="text-black font-normal">
              {props.order.address.landmark}
            </span>{" "}
          </h1>
          <h1 className="font-bold text-gray-600">
            City:{" "}
            <span className="text-black font-normal">
              {props.order.address.city}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            State:{" "}
            <span className="text-black font-normal">
              {props.order.address.state}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Street:{" "}
            <span className="text-black font-normal">
              {props.order.address.street}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Country :{" "}
            <span className="text-black font-normal">
              {props.order.address.country}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Pincode:{" "}
            <span className="text-black font-normal">
              {props.order.address.pincode}
            </span>
          </h1>
        </div>
        <div>
          <OrderViewProductList product={props.order.orderProducts} />
        </div>
        <div className="my-5 flex justify-center">
          <button className="py-2 px-12 bg-green-500 rounded-lg text-white transition-all duration-500 hover:scale-110">Ship</button>
        </div>
      </div>
    </div>
  );
};
export default OrderViewData;