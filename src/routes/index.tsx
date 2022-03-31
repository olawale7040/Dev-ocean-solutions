import Businesses from "../views/businesses";
import Item from "../views/item";

const routes = [
  { path: "/", element: <Businesses /> },
  {
    path: "item",
    element: <Item />,
  },
];
export default routes;
