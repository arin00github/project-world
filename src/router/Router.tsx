import { Navigate, createBrowserRouter } from "react-router-dom";
import ArchivePage from "../pages/archive";
import WorldPage from "../pages/world";
import Root from "./Root";



export const pageArray = [
    {path: '/world-map', element: <WorldPage />},
    {path: '/archive-room', element: <ArchivePage />}
]

const router = createBrowserRouter([
    {element: <Root />, children: pageArray},
    {path: '/', element: <Navigate replace to="/world-map" />},
    {path: '*', element: <Navigate replace to="/world-map" />}
])

export default router