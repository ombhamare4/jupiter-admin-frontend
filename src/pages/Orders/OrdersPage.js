import { useQuery } from "@apollo/client";
import Orders from "../../components/Orders/Orders";
import { GET_ORDERS } from "../../graphql/query";
import Loading from "../../components/Loading/Loading";
const OrdersPage = () => {
  // const [orders,setOrders] = useState()
  const { data, loading, error } = useQuery(GET_ORDERS);
  if (loading) return <Loading />;
  if (error) return <p>Error :( </p>;
  return (
    <div className="p-5">
      <div className="p-2 mb-3">
        <h1 className="text-2xl text-gray-700 font-semibold">Orders</h1>
      </div>
      <Orders orders={data.orders} />
    </div>
  );
};

export default OrdersPage;
