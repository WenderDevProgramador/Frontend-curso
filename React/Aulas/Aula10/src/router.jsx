import { createBrowserRouter } from 'react-router-dom';

import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from './pages/Products';
import Admin from './pages/Admin';
import RootLayout from './pages/RootLayout';
import loadProduct from './loaders/products';
import ProductBoundary from './error-boundaries/ProductBoundary';



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            path: "products",
            element: <Products />
        }, {
            path: "products/:productId",
            element: <Product />,
            loader: loadProduct,
            errorElement: <ProductBoundary/>
        }, {
            path: "cart",
            element: <Cart />
        },
        {
            path: "/admin",
            element: <Admin />
        }]
    }
])

export default router;