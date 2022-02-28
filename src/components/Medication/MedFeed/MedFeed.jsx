import React from "react";
import MedCard from '../MedCard/MedCard'
import { Card } from "semantic-ui-react";


function MedFeed({ medication, loading, user }) {

  return (
    <Card.Group itemsPerRow={2} stackable>
      {medication.map((medication) => {
        return (
          <MedCard key={medication._id} medication={medication} user={user} />
        );
      })}
    </Card.Group>
  )
}

export default MedFeed;
