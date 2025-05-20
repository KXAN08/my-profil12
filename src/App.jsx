import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import UsersList from "./components/user/UsersList";
import UserDetail from "./components/user/UserDetail";
import { useState } from "react";
import Footer from "./components/footer/Footer";


const Layout = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const isHomePage = location.pathname === "/";
  return (
    <>
      {isHomePage && <Header />}
      {isHomePage && <Hero />}
     
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
       {isHomePage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default  React.memo(App);
