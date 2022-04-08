import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ORDER_BY_ID } from "../../../graphql/query";
import OrderViewData from "../../../components/Orders/OrderViewData";
import NewLoading from "../../../components/Message/NewLoading";
import NewError from "../../../components/Message/NewError";
const OrderNo = () => {
  const { orderId } = useParams();
  const { data, loading, error } = useQuery(ORDER_BY_ID, {
    variables: { orderId: orderId },
  });
  if (loading) return <NewLoading />;
  if (error) return <NewError/>;
  return (
    <div>
      <OrderViewData order={data.orderById} />
    </div>
  );
};

export default OrderNo;
