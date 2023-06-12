import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Contact = lazy(() => import("../pages/Contact"));
import Services from "../pages/Services";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Contact />
            </Suspense>
          }
        />

        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
