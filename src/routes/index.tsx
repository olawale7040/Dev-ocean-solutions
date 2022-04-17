// import { Navigate } from "react-router-dom";
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
  // { path: "/", element: <Navigate to="businesses" /> },
];
export default routes;
