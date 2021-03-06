import React from "react";
import { Card, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import UpdateFill from "../Form/UpdateFill/UpdateFill"
import MedCard from '../MedCard/MedCard'
import ProviderMedCard from '../../Provider/ProviderMedCard/ProviderMedCard'

function FullMedCard({ medication, providers, setReRender }) {

  return (
    <Card.Group itemsPerRow={2}>
      <MedCard medication={medication} />
      <Card>
        <Card.Content>
          <Card.Header>Med Status</Card.Header>
          <Card.Content>
            <UpdateFill med_id={medication._id} setReRender={setReRender} medication={medication} />
          </Card.Content>
          <Link to={`/medication/${medication._id}/edit`}>
            <Button type='submit'>Edit meds</Button>
          </Link>
        </Card.Content>
      </Card>
      <ProviderMedCard type="Doctor" med_id={medication._id} setReRender={setReRender} provider={medication.doctor} providers={providers.doctors} />
      <ProviderMedCard type="Pharmacy" med_id={medication._id} provider={medication.pharmacy} setReRender={setReRender} providers={providers.pharmacies} />


    </Card.Group>
  )

}

export default FullMedCard;
