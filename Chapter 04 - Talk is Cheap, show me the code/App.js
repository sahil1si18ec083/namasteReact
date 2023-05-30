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
const AppLayOut = () => (
  <React.Fragment>
    <Header />
    <Outlet />
    <Footer />
  </React.Fragment>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestrauntMenu /> },
    ],
  }, // 🆕
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<RouterProvider router={appRouter} />);
