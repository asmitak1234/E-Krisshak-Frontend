// <!-- Made By - Asmita Kumari -->

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Krisshaks from "./Components/Krisshaks";
import Manage from "./Components/Manage";
import Navigation from "./Components/Navigation";
import ProtectedRoute from "./Components/ProtectedRoute"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import SideBar from "./Components/SideBar";

// export default function App() {
//   return (
//     <>
    
//     <BrowserRouter>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/krisshaks" element={<Krisshaks/>}/>
//         <Route path="/manage" element={<Manage/>}/>
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//     </>
//   );
// }

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  // Define form content for Home page
  const formContentHome = {
    content: <Button type="submit" variant="light">Log out</Button>,
    onSubmit: Logout,
  };

  // Define form content for Login page
  const formContentLogin = {
    content: <Button variant="light" onClick={() => window.location.href = '/register'}>Register</Button>,
    onSubmit: () => {},
  };

  // Define form content for Register page
  const formContentRegister = {
    content: <Button variant="light" onClick={() => window.location.href = '/login'}>Login</Button>,
    onSubmit: () => {},
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigation formContent={formContentHome} />
              <SideBar/>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/krisshaks"
          element={
            <ProtectedRoute>
              <Navigation formContent={formContentHome} />
              <SideBar/>
              <Krisshaks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage"
          element={
            <ProtectedRoute>
              <Navigation formContent={formContentHome} />
              <SideBar/>
              <Manage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navigation formContent={formContentLogin} />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navigation formContent={formContentRegister} />
              <RegisterAndLogout />
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;