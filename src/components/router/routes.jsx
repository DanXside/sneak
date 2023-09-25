import Catalog from "../pages/Catalog";
import HomePage from "../pages/HomePage";



export const publicRouter = [
    {path: '/', element: <HomePage />},
    {path: '/catalog', element: <Catalog />}
];