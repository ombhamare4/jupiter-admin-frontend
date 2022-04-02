// import OrderTable from "./OrderTable";
import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SHIPMENT_ORDER } from "../../graphql/mutation";
import { GET_ORDERS , GET_SHIP} from "../../graphql/query";
import Loading from "../Loading/Loading";
function dateConvert(orderDate) {
  var created_date = new Date(orderDate);

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
  var time = date + "-" + month + "-" + year;

  return time;
}

const Orders = (props) => {
  const [ship, { data, loading, error }] = useMutation(SHIPMENT_ORDER, {
    refetchQueries: [GET_ORDERS, "orders",GET_SHIP,"ship"],
  });
  if (loading) return <Loading />;
  // if (error) return <p>Error :( </p>;

  const shipHandler = (event) => {
    ship({ variables: { orderId: event.target.value } });
  };

  return (
    <div className="bg-white">
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
                      Order#
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Billing to
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.orders
                    .slice(0)
                    .reverse()
                    .map((order) => (
                      <tr className="border-b" key={order._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order._id.slice(-4)}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {order.user.name.firstName} {order.user.name.lastName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {order.name.firstName} {order.name.lastName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {dateConvert(order.createdAt)}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div>
                            <NavLink to={`/orders/${order._id}`}>
                              <button className="px-2 py-1 bg-gray-500 mx-2 text-white rounded-lg">
                                View
                              </button>
                            </NavLink>

                            <button
                              onClick={shipHandler}
                              value={order._id}
                              className="px-2 py-1 bg-green-500 mx-2 text-white rounded-lg"
                            >
                              Ship
                            </button>
                            {/* <button className="px-2 py-1 bg-red-500 mx-2 text-white rounded-lg">
                              Cancel
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
