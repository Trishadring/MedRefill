import React from "react";
import { Card} from "semantic-ui-react";
import ProviderCard from '../ProviderCard/ProviderCard';

function ProviderFeed({ doctors, pharmacies }) {


  return (
    <Card.Group itemsPerRow={2} stackable>
      <ProviderCard providers={doctors} type="Doctor"/>
      <ProviderCard providers={pharmacies} type="Pharmacy" />
    </Card.Group>
  );
}

export default ProviderFeed;
