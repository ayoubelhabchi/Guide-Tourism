
import {  Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Tour from "../pages/tour";
import Camping from "../pages/camping";
// import Login from "../pages/login";
import Register from "../pages/register";
import Landscapes from "../pages/landscapes";
import { AuthProvider } from "../contexts/AuthContext";
import Orders from "../components/Orders/Orders";

import Dashboard from "../pages/dashboard";
import DashboardGuides from "../components/dashboardGuides/dashboardGuides";
import Tours from "../components/dashboardGuides/Tours";
import CreateTour from "../components/dashboardGuides/createTour"
import UpdateTour from "../components/dashboardGuides/updateTour"
import EmailConfirmation from "../pages/emailConfermation";


const Router = () => {
  return (
   <AuthProvider>
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/camping" element={<Camping />} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/email-confirmation" element={<EmailConfirmation />} />

     
      <Route path="/register" element={<Register />} />
      <Route path="/landscapes" element={<Landscapes/>}/>
     
    
          <Route path="/dashboard" element={<Dashboard/>}>

       
         {/* <Route index element={<Tours/>}/> */}
         <Route index path="dashboardGuides" element={<DashboardGuides/>}/>
         <Route path="Tours" element={<Tours/>}/>
         <Route path="CreateTour" element={<CreateTour/>}/>
         <Route path="UpdateTour" element={<UpdateTour/>}/>
       
      </Route>
    
    
      
    </Routes>
  
  </AuthProvider>
  );
};

export default Router;

