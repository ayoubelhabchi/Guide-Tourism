import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Tour from "../pages/tour";
import Camping from "../pages/camping";
import Register from "../pages/register";
import Landscapes from "../pages/landscapes";
import Orders from "../components/Orders/Orders";
import Dashboard from "../pages/dashboard";
import DashboardGuides from "../components/dashboardGuides/dashboardGuides";
import Tours from "../components/dashboardGuides/Tours";
import CreateTour from "../components/dashboardGuides/createTour";
import UpdateTour from "../components/dashboardGuides/updateTour";
import EmailConfirmation from "../pages/emailConfermation";
import { AuthProvider } from "../contexts/AuthContext";
import LoginModal from "../components/Modals/login";
import ProtectedRoute from "../contexts/ProtectedRoutes";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Main Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home/login" element={<LoginModal/>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landscapes" element={<Landscapes />} />

        {/* Dashboard Routes */}
        <Route path="/" element={<ProtectedRoute allowedRoles={['guide']}>
          <Dashboard />
          </ProtectedRoute>}>
          <Route index path="/dashboard" element={<DashboardGuides />} />
          <Route path="/dashboard/Tours" element={<Tours />} />
          <Route path="CreateTour" element={<CreateTour />} />
          <Route path="UpdateTour" element={<UpdateTour />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default Router;
