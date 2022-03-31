import { useQuery } from "@apollo/client";
import { useState } from "react";
import Orders from "../../components/Orders/Orders";
import {GET_ORDERS} from "../../graphql/query"
import Loading from "../../components/Loading/Loading";
const OrdersPage = () => {
  // const [orders,setOrders] = useState()
  const {data,loading,error} = useQuery(GET_ORDERS);
  if (loading) return <Loading />;
  if (error) return <p>Error :( </p>;
  return (
    <div>
      <Orders orders={data.orders}/>
    </div>
  );
};

export default OrdersPage;
