import { ToastContainer } from "react-toastify";
import ROUTES from "./index.routes";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter(ROUTES);
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
    <LanguageProvider>
  <RouterProvider router={router} />
      <ToastContainer />
    </LanguageProvider>
    
    </>
  );
}

export default App;
