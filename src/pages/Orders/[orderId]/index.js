import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ORDER_BY_ID } from "../../../graphql/query";
import Loading from "../../../components/Loading/Loading";
import OrderViewData from "../../../components/Orders/OrderViewData";
const OrderNo = () => {
  const { orderId } = useParams();
  const { data, loading, error } = useQuery(ORDER_BY_ID, {
    variables: { orderId: orderId },
  });
  if (loading) return <Loading />;
  if (error) return <p>Error :( </p>;
  return (
    <div>
      <OrderViewData order={data.orderById} />
    </div>
  );
};

export default OrderNo;
