import ArchivePage from "../pages/archive";
import GlobePage from "../pages/globe";
import WorldPage from "../pages/world";

import Root from "./Root";

import { Navigate, createBrowserRouter } from "react-router-dom";

export const pageArray = [
  { path: "/world-map", element: <WorldPage /> },
  { path: "/archive-room", element: <ArchivePage /> },
  { path: "/globe-map", element: <GlobePage /> },
];

const router = createBrowserRouter(
  [
    { element: <Root />, children: pageArray },
    { path: "/", element: <Navigate replace to="/world-map" /> },
    { path: "*", element: <Navigate replace to="/world-map" /> },
  ],
  { basename: "/project" },
);

export default router;
