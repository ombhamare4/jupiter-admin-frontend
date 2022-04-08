import Shipments from "../../components/Shipments/Shipments";
import { GET_SHIP } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import NewLoading from "../../components/Message/NewLoading";
import NewError from "../../components/Message/NewError";
const ShipmentPage = () => {
  const { data, loading, error } = useQuery(GET_SHIP);
  if (loading) return <NewLoading />;
  if (error) return <NewError/>;
  return (
    <div>
      <Shipments ship={data.ship}/>
    </div>
  );
};

export default ShipmentPage;
