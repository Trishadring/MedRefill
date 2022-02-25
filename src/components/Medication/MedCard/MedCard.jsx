import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";


function MedCard({ medication }) {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const time = new Date(medication.refillDate);
  const newDate = time.toLocaleDateString(undefined, options);

  function howLong() {
    const today = new Date();
    const difference = time.getTime() - today.getTime();
    const daysdiff = difference / (1000 * 3600 * 24);
    const final = Math.floor(daysdiff);
    if (final > 1) {
      return (
        <span>{final} days until you are out of medication</span>
      )
    } else {
      return (
        <span>You are out of medication!</span>
      )
    }
  }

  return (
    <Card key={medication._id}>
      <Card.Content>
        <Card.Header>
          {medication.medName} {medication.medDose}</Card.Header>
        <Card.Meta>{medication.medGenericName} {medication.medDose}</Card.Meta>
        {/* <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <Link to={`/medication/${medication._id}`}>
          <p>
            <Icon name='calendar outline' />
            Refill Needed by {newDate}
          </p>
        </Link>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='calendar outline' />
          {howLong()}
        </a>
      </Card.Content>
    </Card >
  )

}

export default MedCard;
