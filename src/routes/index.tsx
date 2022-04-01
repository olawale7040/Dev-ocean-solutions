import Businesses from "src/views/businesses/BusinessesList";
import ViewBusiness from "src/views/viewBusiness/ViewBusiness";
import NotFoundPage from "src/views/NotFoundPage";

const routes = [
  { path: "/", element: <Businesses /> },
  {
    path: "business/:id",
    element: <ViewBusiness />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default routes;
