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



function App() {
  const [user, setUser] = useState(userService.getUser());

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
        <Route path="/Doctor" element={< AddProvider user={user} type="Doctor" />} />
        <Route path="/Doctor/edit/:id" element={< AddProvider user={user} type="Doctor" role="edit" />} />
        <Route path="/Pharmacy" element={< AddProvider user={user} type="Pharmacy" />} />
        <Route path="/Pharmacy/edit/:id" element={< AddProvider user={user} type="Pharmacy" role="edit"  />} />
        <Route path="/medication/:medId" element={< Medication user={user} />} />
        <Route path="/medication/:medId/edit" element={< MedicationUpdate user={user} />} />
        <Route path="/logout" handleLogout={handleLogout} />
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
