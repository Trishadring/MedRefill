import React from "react";
import { Segment, Header } from "semantic-ui-react";


function DoctorDetails({ doctor }) {

  return (
    <Segment>
      <Header as='h4'>{doctor.name}</Header>
      <p>Hours: {doctor.hours}</p>
      <p> {doctor.phoneNum}</p>
      <p> {doctor.notes}</p>
    </Segment >
  )
}

export default DoctorDetails;
