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
const AppLayOut = () => (
  <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayOut />, errorElement: <Error /> }, // 🆕
  { path: "/about", element: <About /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<RouterProvider router={appRouter} />);
