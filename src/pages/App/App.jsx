import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Grid } from "semantic-ui-react";
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
import Nav from '../../components/Nav/Nav'



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
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Nav user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:username" element={<ProfilePage user={user} />} />
          <Route path="/Doctor" element={< AddProvider user={user} type="Doctor" />} />
          <Route path="/Doctor/edit/:id" element={< AddProvider user={user} type="Doctor" />} />
          <Route path="/Pharmacy" element={< AddProvider user={user} type="Pharmacy" />} />
          <Route path="/Pharmacy/edit/:id" element={< AddProvider user={user} type="Pharmacy" />} />
          <Route path="/medication/:medId" element={< Medication user={user} />} />
          <Route path="/medication/:medId/edit" element={< MedicationUpdate user={user} />} />
          <Route path="/logout" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        </Routes>
      </Grid >
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
