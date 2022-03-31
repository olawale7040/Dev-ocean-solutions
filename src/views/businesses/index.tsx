import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { fetchBusinesses } from "src/slices/businesses";
import Card from "src/components/Card";

// Models
import { businessProps } from "src/utils/models";

const Businesses = () => {
  const dispatch = useDispatch();
  // Navigate
  const navigate = useNavigate();
  //@ts-ignore
  const allBusinesses = useSelector((state) => state.businesses.businesses);

  const handleViewBusiness = (id: string) => {
    navigate("/item");
  };

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);
  return (
    <section className="main-content">
      <div className="content-wrapper">
        <div className="card head-card">
          <div className="name-section">Name</div>
          <div className="description-section"> Description</div>
        </div>
        <div className="businesses-list">
          {allBusinesses.map((business: businessProps) => (
            <Card
              key={business.id}
              business={business}
              handleClick={handleViewBusiness}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;
