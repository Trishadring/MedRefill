import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./ProviderDetails.css"
import * as doctorApi from "../../../utils/doctorApi";
import * as pharmacyApi from "../../../utils/pharmacyApi";

function ProviderDetails({ doctor, type, providers, setReRender }) {
  let API = "";
  if (type === "Doctor") { API = doctorApi }
  if (type === "Pharmacy") { API = pharmacyApi }
  const navigate = useNavigate();
  function edit(e) {
    console.log(providers, "providers")
    e.preventDefault()
    navigate(`/${type}/edit/${doctor._id}`);
  }

  function deleteProvider(e) {
    e.preventDefault()
    try {
      API.deleteProvider(doctor._id)
      doctor = "";
      console.log(doctor, "doctor");
      setReRender();
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }


  return (
    <Segment className="provider-enclosure">
      <Header as='h4'>{doctor.name}</Header>
      <p>Hours: {doctor.hours}</p>
      <p> {doctor.phoneNum}</p>
      <p> {doctor.notes}</p>
      <Button.Group basic size='small' className="buttons">
        <Button icon='edit' onClick={edit} />
        <Button icon='trash alternate' onClick={deleteProvider} />
      </Button.Group>
    </Segment >
  )
}

export default ProviderDetails;
