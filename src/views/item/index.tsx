import NearbyPlaces from "./NearbyPlaces";
const Item = () => {
  return (
    <section className="main-content">
      <div className="content-wrapper">
        <div className="image-container">
          <img
            className="responsive-image"
            src="https://images.unsplash.com/photo-1527015175922-36a306cf0e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=1000"
            alt=""
          />
        </div>
        <div className="business-details">
          <div className="business-information">
            <div className="business-address">
              <div className="text-header">Address</div>
              <div className="box-information">
                <div className="light-text">84586 Straubel Street</div>
                <div className="light-text">Manchester, SG4</div>
              </div>
            </div>
            <div className="business-contact">
              <div className="text-header">Contact</div>
              <div className="box-information">
                <div className="light-text">609-306-3610</div>
                <div className="light-text">
                  igowanlock0@networkadvertising.org
                </div>
              </div>
            </div>
          </div>
          <div className="nearby-container">
            <NearbyPlaces />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
