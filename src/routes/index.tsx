import Businesses from "src/views/businesses";
import Item from "src/views/item";
import NotFoundPage from "src/views/NotFoundPage";

const routes = [
  { path: "/", element: <Businesses /> },
  {
    path: "business/:id",
    element: <Item />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default routes;
