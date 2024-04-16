import PetList from "../pages/Pets/PetsList";
import BasicLayout from "../layouts/BasicLayout";

export const ROUTES = {
  PETS: "/",
  REGISTER: "/register",
  ORDERS: "/orders",
  NEW_ORDER: "/orders/new",
  ORDER: "/orders/:id",
  HOTELS: "/hotels",
  NEW_HOTEL: "/hotels/new",
};

export const routes = [
  {
    path: ROUTES.PETS,
    Component: PetList,
    Layout: BasicLayout,
  },
];

export const navigationBarLinks = [
  {
    title: "Orders",
    path: ROUTES.ORDERS,
  },
  {
    title: "Hotels",
    path: ROUTES.HOTELS,
  },
];
