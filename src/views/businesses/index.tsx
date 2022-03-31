import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { fetchBusinesses, viewBusiness } from "src/slices/businesses";
import Card from "src/components/Card";
// Models
import { businessProps } from "src/utils/models";
import { RootState } from "src/store";

const Businesses = () => {
  const dispatch = useDispatch();
  // Navigate
  const navigate = useNavigate();
  const { businesses, error } = useSelector(
    (state: RootState) => state.businesses
  );

  const handleViewBusiness = (id: string) => {
    dispatch(viewBusiness(id));
    navigate(`business/${id}`);
  };

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);
  return (
    <section className="main-content">
      {businesses.length > 0 && (
        <div className="content-wrapper">
          <div className="card head-card">
            <div className="name-section">Name</div>
            <div className="description-section"> Description</div>
          </div>
          <div className="businesses-list">
            {businesses.map((business: businessProps) => (
              <Card
                key={business.id}
                business={business}
                handleClick={handleViewBusiness}
              />
            ))}
          </div>
        </div>
      )}
      {businesses.length === 0 && !error && (
        <div className="empty-container">
          <div>Loading.....</div>
        </div>
      )}
      {error && (
        <div className="empty-container">
          <div>{error}</div>
        </div>
      )}
    </section>
  );
};

export default Businesses;
