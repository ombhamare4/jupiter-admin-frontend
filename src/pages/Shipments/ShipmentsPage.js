import Shipments from "../../components/Shipments/Shipments";
import { GET_SHIP } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loading/Loading";
const ShipmentPage = () => {
  const { data, loading, error } = useQuery(GET_SHIP);
  if (loading) return <Loading />;
  if (error) return <p>Error :( </p>;
  return (
    <div>
      <Shipments ship={data.ship}/>
    </div>
  );
};

export default ShipmentPage;
