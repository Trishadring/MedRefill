import React from "react";
import MedCard from '../MedCard/MedCard'
import { Card } from "semantic-ui-react";


function MedFeed({ medication }) {
  console.log(medication, "meds on med feed")
  return (
    <Card.Group itemsPerRow={1} stackable>
      {medication.map((medication) => {
        return (
          <MedCard medication={medication} />
        );
      })}
    </Card.Group>
  )
}

export default MedFeed;
