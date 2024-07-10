import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard'
import Layout from './component/shared/Layout'
import Users from './component/Users';
import Guides from './component/Guides';
import Camping from './component/Camping';
import Tours from './component/Tours'
import Register from './component/Register';
import Login from './component/Login';
import { AuthProvider } from './Auth/AuthContext';
import PrivateRoute from './Auth/PrivateRouting';

function App() {
  return (
    <AuthProvider>
     <Router>
        <Routes>  {/* Use Routes as a parent component for all Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="guides" element={<Guides />} />
            <Route path="camping" element={<Camping />} />
            <Route path="tours" element={<Tours />} />

            {/* Add more protected routes here */}
          </Route>
        </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
