import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from './Components/footer/Footer';
import { Logout } from './pages/Logout';
import { AuthProvider } from "./store/auth";
import { AdminLayout } from "./Components/layouts/Admin-Layout";
import {AdminUsers} from "./pages/Admin-Users";
import {AdminContacts} from "./pages/Admin-Contact";
import { EditUser } from "./pages/EditUser";  // Import EditUser component

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers/>}/>
            <Route path='users/:id/edit' element={<EditUser />} />  // Add EditUser route
            <Route path='contacts' element={<AdminContacts/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
