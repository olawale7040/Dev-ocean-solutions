import ListComponent from "src/components/ListComponent";

const NearbyPlaces = () => {
  return (
    <div className="section-container">
      <div className="text-header">Nearby Places</div>
      <div className="places-list">
        <ListComponent />
        <ListComponent />
        <ListComponent />
      </div>
    </div>
  );
};

export default NearbyPlaces;
