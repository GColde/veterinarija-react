import PetList from "../pages/Pets/PetsList";
import NewPet from "../pages/Pets/NewPet";
import BasicLayout from "../layouts/BasicLayout";

export const ROUTES = {
  PETS: "/",
  NEW_PET: "/pets/new",
  MEDICATIONS: "/medications",
};

export const routes = [
  {
    path: ROUTES.PETS,
    Component: PetList,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.NEW_PET,
    Component: NewPet,
    Layout: BasicLayout,
  },
];

export const navigationBarLinks = [
  {
    title: "Pets",
    path: ROUTES.PETS,
  },
  {
    title: "Medications",
    path: ROUTES.MEDICATIONS,
  },
];
