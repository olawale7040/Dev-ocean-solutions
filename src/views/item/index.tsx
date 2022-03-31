import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "src/store";
import goBackImage from "src/assets/img/back-icon.svg";
import NearbyPlaces from "./NearbyPlaces";

const Item = () => {
  const businessDetails = useSelector(
    (state: RootState) => state.businesses.businessDetails
  );
  const address = businessDetails?.address;
  return (
    <section className="main-content">
      {businessDetails ? (
        <div className="content-wrapper">
          <div className="go-back-btn">
            <Link to="/" className="nav-link">
              <img src={goBackImage} alt="" />
              <div>Go Back</div>
            </Link>
          </div>
          <div className="image-container">
            <img
              className="responsive-image"
              src={businessDetails.image}
              alt=""
            />
          </div>
          <div className="business-details">
            <div className="business-information">
              <div className="business-address">
                <div className="text-header">Address</div>
                <div className="box-information">
                  <div className="light-text">
                    {address?.number} {address?.street} Street
                  </div>
                  <div className="light-text">
                    {address?.city}, {address?.zip}
                  </div>
                </div>
              </div>
              <div className="business-contact">
                <div className="text-header">Contact</div>
                <div className="box-information">
                  <div className="light-text">{businessDetails.phone}</div>
                  <div className="light-text">{businessDetails.email}</div>
                </div>
              </div>
            </div>
            <div className="nearby-container">
              <NearbyPlaces />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-container">
          <div>No Business Selected</div>
          <Link to="/" className="nav-link">
            <div className="go-back-link">Go To Businesses</div>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Item;
