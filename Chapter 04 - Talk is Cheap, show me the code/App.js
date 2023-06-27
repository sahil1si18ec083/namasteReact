//  Namaste React Course by Akshay Saini
//  Chapter 04 - Talk is Cheap, show me the code

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import About from "../Chapter 07-Finding the path/About";
import Error from "../Chapter 07-Finding the path/Error";
import Contact from "./Contact";
import { Outlet } from "react-router-dom/dist";
import RestrauntMenu from "../Chapter 07-Finding the path/RestrauntMenu";
import Profile from "../Chapter 08 - Let's get Classy/Profile";
import Car from "../Chapter 08 - Let's get Classy/ProfileClass";

import { lazy } from "react";
import Headers from "../Chapter 09 - Optimizing our App/Improve Performance of React Apps with Code Splitting/Components/Headers";
import AppRoutes from "../Chapter 09 - Optimizing our App/Improve Performance of React Apps with Code Splitting/Components/AppRoutes";

const AppLayOut = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
      {/* <div style={{ display: "flex" }}>
      <Headers />
      <AppRoutes />
    </div> */}
    </React.Fragment>
  );
};
const InstaMartAccordian = lazy(() =>
  import("../Chapter 11- Data is the new oil/InstaMart")
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Namaste REACT",
              emnailId: "sahil.1si18ec083@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestrauntMenu /> },
      {
        path: "/InstaMartAccordian",
        element: <InstaMartAccordian />,
      },
    ],
  }, // 🆕
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<RouterProvider router={appRouter} />);
