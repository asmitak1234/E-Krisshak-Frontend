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

// function Logout() {
//   // localStorage.removeItem('token');
//   localStorage.clear();
//   return <Navigate to="/login" />;
// }

function Logout() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
      localStorage.clear();
      // Redirect to login after logout
      return <Navigate to="/login" />; // or use <Navigate to="/login" /> if preferred
    }
}


function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  // Define form content for Home page
  const formContentHome = {
    content: <Button className="btn-lg mt-2" style={{ border: '3px inset white',backgroundColor:'rgba(88, 85, 85, 0.514)',color:'white' }}>Log out</Button>,
    onSubmit: Logout,
  };

  // Define form content for Login page
  const formContentLogin = {
    content: <Button className="btn-lg mt-2" style={{ border: '3px inset white',backgroundColor:'rgba(88, 85, 85, 0.514)',color:'white' }} onClick={() => window.location.href = '/register'}>Register</Button>,
    onSubmit: () => {},
  };

  // Define form content for Register page
  const formContentRegister = {
    content: <Button className="btn-lg mt-2" style={{ border: '3px inset white',backgroundColor:'rgba(88, 85, 85, 0.514)',color:'white' }} onClick={() => window.location.href = '/login'}>Login</Button>,
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
