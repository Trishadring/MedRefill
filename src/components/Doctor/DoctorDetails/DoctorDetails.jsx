import React from "react";
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import "./DoctorDetails.css"

function DoctorDetails({ doctor }) {
  console.log(doctor, "details")
  return (
    <Segment className="provider-enclosure">
      <Header as='h4'>{doctor.name}</Header>
      <p>Hours: {doctor.hours}</p>
      <p> {doctor.phoneNum}</p>
      <p> {doctor.notes}</p>
      <Button.Group basic size='small'>
        <Button icon='edit' />
        <Button icon='trash alternate' />
      </Button.Group>
    </Segment >
  )
}

export default DoctorDetails;
