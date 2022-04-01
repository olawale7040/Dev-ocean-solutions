import { businessProps } from "src/utils/models";

type componentProps = {
  businessDetails: businessProps;
};
const BusinessDetails = ({ businessDetails }: componentProps) => {
  const address = businessDetails?.address;
  return (
    <div className="business-information" data-testid="business-information">
      <div className="business-address" data-testid="business-address">
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
      <div className="business-contact" data-testid="business-contact">
        <div className="text-header">Contact</div>
        <div className="box-information">
          <div className="light-text">{businessDetails.phone}</div>
          <div className="light-text">{businessDetails.email}</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
