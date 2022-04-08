import { useMutation } from "@apollo/client";
import { useState } from "react";
import OrderViewProductList from "./OrderViewProductList";
import { SHIPMENT_ORDER } from "../../graphql/mutation";
import { GET_ORDERS, GET_SHIP } from "../../graphql/query";
import SuccessModal from "../Modal/SuccessModal";
import ErrorModal from "../Modal/ErrorModal";
import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";

const OrderViewData = (props) => {
  const [success, setSuccess] = useState(false);
  const [iserror, setIsError] = useState(false);

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

  const [ship, { loading, error }] = useMutation(SHIPMENT_ORDER, {
    refetchQueries: [GET_ORDERS, "orders", GET_SHIP, "ship"],
    onCompleted: () => {
      setSuccess(true);
    },
    onError: (error) => {
      console.log(error);
      if (error) {
        setIsError(true);
      }
    },
  });


  const shipHandler = (event) => {
    ship({ variables: { orderId: event.target.value } });
  };

  const errorHandler = () => {
    setIsError(false);
  };

  if (loading) return <NewLoading />;
  if (error) return <NewError/>;

  return (
    <div className="p-5">
      {success && (
        <SuccessModal navLink="orders" message="Order Ship Successfully" />
      )}
      {iserror && (
        <ErrorModal error="Something Went Wrong!" errorHandler={errorHandler} />
      )}
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
              {props.order.address.phoneNo}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Address:{" "}
            <span className="text-black font-normal">
              {props.order.address.add1}
            </span>
          </h1>
          <h1 className="font-bold text-gray-600">
            Landmark:{" "}
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
          <button
            value={props.order._id}
            onClick={shipHandler}
            className="py-2 px-12 bg-green-500 rounded-lg text-white transition-all duration-500 hover:scale-110"
          >
            Ship
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderViewData;
