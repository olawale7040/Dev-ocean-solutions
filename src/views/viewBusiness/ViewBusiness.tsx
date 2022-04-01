import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "src/store";
import goBackImage from "src/assets/img/back-icon.svg";
import BusinessDetails from "./BusinessDetails";
import NearbyPlaces from "./NearbyPlaces";

const ViewBusiness = () => {
  const businessDetails = useSelector(
    (state: RootState) => state.businesses.businessDetails
  );
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
            <div
              className="image-background"
              style={{
                backgroundImage: `url(${businessDetails.image})`,
              }}
            >
              {/* <img
                className="responsive-image"
                src={businessDetails.image}
                alt=""
              /> */}
            </div>
          </div>
          <div className="business-details">
            <BusinessDetails businessDetails={businessDetails} />
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

export default ViewBusiness;
