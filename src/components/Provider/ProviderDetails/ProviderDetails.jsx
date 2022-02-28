import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import "./ProviderDetails.css"

function ProviderDetails({ doctor, type }) {
  const navigate = useNavigate();
  function edit(e) {
    e.preventDefault()
    navigate(`/${type}/edit/${doctor._id}`);

  }

  return (
    <Segment className="provider-enclosure">
      <Header as='h4'>{doctor.name}</Header>
      <p>Hours: {doctor.hours}</p>
      <p> {doctor.phoneNum}</p>
      <p> {doctor.notes}</p>
      <Button.Group basic size='small' className="buttons">
        <Button icon='edit' onClick={edit} />
        <Button icon='trash alternate' />
      </Button.Group>
    </Segment >
  )
}

export default ProviderDetails;
