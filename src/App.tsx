import { ToastContainer } from "react-toastify";
import ROUTES from "./index.routes";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter(ROUTES);
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./context/LanguageContext";
import { SiteProvider } from "./context/SiteContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <SiteProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </SiteProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
