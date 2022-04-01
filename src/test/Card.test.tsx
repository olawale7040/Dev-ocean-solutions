import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { businessSample as business } from "src/constants/sampleData";
import Card from "src/components/Card";

describe("Card component test", () => {
  const handleClick = jest.fn();
  test("should render right layout", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Card business={business} handleClick={handleClick} />)
      </BrowserRouter>
    );
    expect(getByTestId("card-container")).toBeInTheDocument();
    expect(getByTestId("card-description")).toBeInTheDocument();
    fireEvent.click(getByTestId("card-container"));
    expect(handleClick).toHaveBeenCalled();
  });
});
