import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import { Suspense, lazy } from "react";
import RegisterForm from "../../features/account/RegisterForm";

const LoginForm = lazy(() => import('../../features/account/LoginForm'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/basket", element: <BasketPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/server-error", element: <ServerError /> },
      { path: "/login", element: <Suspense fallback={<div>Loading...</div>}><LoginForm /></Suspense> },
      { path: "/register", element: <RegisterForm /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to='/not-found' /> }
    ]
  }
])