import { useSelector } from "react-redux";
import { businessProps } from "src/utils/models";
import { RootState } from "src/store";
import ListComponent from "src/components/ListComponent";

const NearbyPlaces = () => {
  const nearbyPlaces = useSelector(
    (state: RootState) => state.businesses.nearbyPlaces
  );
  return (
    <div className="section-container">
      <div className="text-header">Nearby Places</div>
      {nearbyPlaces.length > 0 ? (
        <div className="places-list">
          {nearbyPlaces.map((place: businessProps) => (
            <ListComponent key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <div>No nearbyPlaces</div>
      )}
    </div>
  );
};

export default NearbyPlaces;
