import React from "react";
import { Card } from "semantic-ui-react";
import ProviderCard from '../ProviderCard/ProviderCard';

function ProviderFeed({ doctors, pharmacies, setReRender }) {


  return (
    <Card.Group itemsPerRow={2} stackable>
      <ProviderCard providers={doctors} setReRender={setReRender} type="Doctor" />
      <ProviderCard providers={pharmacies} setReRender={setReRender} type="Pharmacy" />
    </Card.Group>
  );
}

export default ProviderFeed;
