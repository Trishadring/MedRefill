import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Feed from '../Feed/Feed';
import AddProvider from '../AddProvider/AddProvider'
import Medication from '../Medication/Medication'
import MedicationUpdate from '../MedicationUpdate/MedicationUpdate'
import ProfilePage from '../ProfilePage/ProfilePage'
import { useNavigate } from "react-router-dom";



function App() {
  const [user, setUser] = useState(userService.getUser());
  const navigate = useNavigate();
  function handleSignUpOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Feed user={user} handleLogout={handleLogout} />} />
        <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout} />} />
        <Route path="/Doctor" element={< AddProvider user={user} handleLogout={handleLogout} type="Doctor" />} />
        <Route path="/Doctor/edit/:id" element={< AddProvider user={user} handleLogout={handleLogout} type="Doctor" />} />
        <Route path="/Pharmacy" element={< AddProvider user={user} handleLogout={handleLogout} type="Pharmacy" />} />
        <Route path="/Pharmacy/edit/:id" element={< AddProvider user={user} handleLogout={handleLogout} type="Pharmacy" />} />
        <Route path="/medication/:medId" element={< Medication user={user} handleLogout={handleLogout} />} />
        <Route path="/medication/:medId/edit" element={< MedicationUpdate user={user} handleLogout={handleLogout} />} />
        <Route path="/logout" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
