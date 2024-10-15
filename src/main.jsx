import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./pages/AboutPage.jsx";
// import PortfolioPage from "./pages/PortfolioPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      // {
      //   path: "portfolio",
      //   element: <PortfolioPage />,
      // },
      // {
      //   path: "contact",
      //   element: <ContactPage />,
      // },
      {
        path: "resume",
        element: <ResumePage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
