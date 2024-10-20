import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/Boundary/NavBar.jsx";
import Footer from "./components/Boundary/Footer.jsx";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import LearnerLandingPage from "./components/Landing/LearnerLandingPage.jsx";
import InstructorLandingPage from "./components/Landing/InstructorLandingPage.jsx";
import LoginModal from "./components/Auth/LoginModal.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import VerifyCode from "./components/Auth/VerifyCode.jsx";
import SetNewPassword from "./components/Auth/SetNewPassword.jsx";
import Test from "./Test.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import VisitorForm from "./components/VisitorDetails/VisitorForm.jsx";

const Layout = () => {
  const location = useLocation();
  const noNavFooterRoutes = [
    "/login",
    "/forgotpassword",
    "/verifycode",
    "/setpassword",
    "/visitorform"
  ];
  const shouldShowNavFooter = !noNavFooterRoutes.includes(location.pathname);
  return (
    <div>
      {shouldShowNavFooter && <NavBar />}
      <Outlet />
      {shouldShowNavFooter && <Footer />}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/learnerpage",
        element: <LearnerLandingPage />,
      },
      {
        path: "/instructorpage",
        element: <InstructorLandingPage />,
      },
      {
        path: "/login",
        element: <LoginModal />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/verifycode",
        element: <VerifyCode />,
      },
      {
        path: "/setpassword",
        element: <SetNewPassword />,
      },
      {
        path: "testelement",
        element: <Test />,
      },
      {
        path: "admindashboard",
        element: <AdminDashboard />,
      },
      {
        path: "visitorform",
        element: <VisitorForm/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
