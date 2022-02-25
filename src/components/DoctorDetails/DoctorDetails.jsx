import React from "react";
import { Card } from "semantic-ui-react";


function DoctorDetails({ doctor }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{doctor.name}</Card.Header>
        <Card.Meta>
          Hours: {doctor.hours}
        </Card.Meta>
        <Card.Content>
          {doctor.phoneNum}
        </Card.Content>
        <Card.Content extra>
          {doctor.notes}
        </Card.Content>
      </Card.Content>
    </Card >
  )
}

export default DoctorDetails;
