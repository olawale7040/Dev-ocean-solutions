import { businessProps } from "src/utils/models";

type cardProps = {
  business: businessProps;
  handleClick: (id: string) => void;
};
const Card = ({ business, handleClick }: cardProps) => {
  return (
    <div
      className="card card-container"
      data-testid="card-container"
      onClick={() => handleClick(business.id)}
    >
      <div className="card-name">{business.name}</div>
      <div className="card-description" data-testid="card-description">
        {business.description}
      </div>
    </div>
  );
};

export default Card;
