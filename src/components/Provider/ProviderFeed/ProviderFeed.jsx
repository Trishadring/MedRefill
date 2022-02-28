import React from "react";
import { Card, Button, Grid, Segment } from "semantic-ui-react";
import ProviderCard from '../ProviderCard/ProviderCard';
import DoctorDetails from '../../Doctor/DoctorDetails/DoctorDetails'
import { useParams, Link } from "react-router-dom";

function ProviderFeed({ doctors, pharmacies }) {


  return (
    <Card.Group itemsPerRow={2} stackable>
      <ProviderCard providers={doctors} type="Doctor"/>
      <ProviderCard providers={pharmacies} type="Pharmacy" />
    </Card.Group>
  );
}

export default ProviderFeed;
