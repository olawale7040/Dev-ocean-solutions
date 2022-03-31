import { businessProps } from "src/utils/models";

type componentProps = {
  place: businessProps;
};
const ListComponent = ({ place }: componentProps) => {
  const address = place?.address;
  return (
    <div className="card list-group">
      <div className="list-name">{place.name}</div>
      <div className="list-address">
        {address?.number}, {address?.street}, {address?.city}, {address?.zip}
      </div>
    </div>
  );
};

export default ListComponent;
