import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { businessSample as business } from "src/constants/sampleData";
import BusinessDetails from "src/views/viewBusiness/BusinessDetails";

describe("BusinessDetails component test", () => {
  test("should render right layout", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <BusinessDetails businessDetails={business} />)
      </BrowserRouter>
    );
    expect(getByTestId("business-information")).toBeInTheDocument();
    expect(getByTestId("business-address")).toBeInTheDocument();
    expect(getByTestId("business-contact")).toBeInTheDocument();
  });
});
