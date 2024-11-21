import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import Home from "./Home";
import Profile from "./Profile";
import Tasks from "./Tasks";
import ResponsiveForm from "./ResponsiveForm";
import "./NavigationComponent.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <NavigationComponent
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/responsiveForm" element={<ResponsiveForm />} />
      </Routes>
    </Router>
  );
}

export default App;