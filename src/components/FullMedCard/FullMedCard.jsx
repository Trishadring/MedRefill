import React from "react";
import { Card } from 'semantic-ui-react'
import UpdateFill from "../UpdateFill/UpdateFill"
import MedCard from '../MedCard/MedCard'
import DoctorCard from '../DoctorCard/DoctorCard'

function FullMedCard({ medication }) {
  console.log(medication, "meds")

  return (
    <Card.Group itemsPerRow={3}>
      <MedCard medication={medication} />
      <Card>
        <Card.Content>
          <Card.Header>Med Status</Card.Header>
          <Card.Content>
            <UpdateFill med_id={medication._id} />
          </Card.Content>
        </Card.Content>
      </Card>
      <DoctorCard med_id={medication._id} doctor={medication.doctor} />
    </Card.Group>
  )

}

export default FullMedCard;
