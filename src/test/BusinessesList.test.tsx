import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "src/store";

import BusinessesList from "src/views/businesses/BusinessesList";

describe("BusinessesView component test", () => {
  afterEach(cleanup);
  const renderComponent = (component: any) =>
    render(
      <Provider store={store}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>
    );

  test("should render right layout", async () => {
    const { getByTestId, queryByTestId } = renderComponent(<BusinessesList />);
    waitFor(() => expect(getByTestId("businesses-view")).toBeInTheDocument());
    expect(queryByTestId("businesses-list")).toBeNull();
    // assert initialState
    const { businesses } = store.getState();
    expect(businesses.businesses).toEqual(expect.any(Array));
    expect(businesses.businesses.length).toEqual(0);
  });
});
