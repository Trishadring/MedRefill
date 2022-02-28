import React from "react";
import { Card, Button } from 'semantic-ui-react'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import UpdateFill from "../Form/UpdateFill/UpdateFill"
import MedCard from '../MedCard/MedCard'
import DoctorCard from '../../Doctor/DoctorCard/DoctorCard'
import PharmacyCard from '../../Pharmacy/PharmacyCard/PharmacyCard'

function FullMedCard({ medication }) {
  console.log(medication, "has medication")
  return (
    <Card.Group itemsPerRow={2}>
      <MedCard medication={medication} />
      <Card>
        <Card.Content>
          <Card.Header>Med Status</Card.Header>
          <Card.Content>
            <UpdateFill med_id={medication._id} />
          </Card.Content>
          <Link to={`/medication/${medication._id}/edit`}>
            <Button type='submit'>Edit meds</Button>
          </Link>
        </Card.Content>
      </Card>
      <DoctorCard med_id={medication._id} doctor={medication.doctor} />
      <PharmacyCard med_id={medication._id} pharmacy={medication.pharmacy} />


    </Card.Group>
  )

}

export default FullMedCard;
