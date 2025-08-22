import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import CustomAppBar from "../components/CustomAppBar";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import MainApp from "../pages/App"; // Your main app page

const MyAppRouter: React.FC = () => {
  return (
    <Router>
      <CustomAppBar />
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/app" element={<MainApp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default MyAppRouter;
