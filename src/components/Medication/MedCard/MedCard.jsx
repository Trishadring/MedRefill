import React, { useState, useEffect } from "react";
import { Card, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function MedCard({ medication }) {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const [onMedPage, setOnMedPage] = useState(false);
  const time = new Date(medication.refillDate);
  const newDate = time.toLocaleDateString(undefined, options);
  const id = useParams();

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

  useEffect(() => {
    if (id.medId) {
      setOnMedPage(() => true);
    }
  }, [medication]);

  return (
    <Card key={medication._id}>
      <Card.Content>
        <Card.Header>
          {medication.medName} {medication.medDose}</Card.Header>
        <Card.Meta>{medication.medGenericName} {medication.medDose}</Card.Meta>
        {onMedPage ?
          <Card.Description>
            <p>Pills per day: {medication.numPerDay}</p>
            <p>Pills per Refill: {medication.qtyPerFill}</p>
            <p>Notes: {medication.notes}</p>
          </Card.Description>
          : ""}

      </Card.Content>
      <Card.Content extra>
        {!onMedPage ?
          <Link to={`/medication/${medication._id}`}>
            <p>
              <Icon name='calendar outline' />
              Refill Needed by {newDate}
            </p>
          </Link>
          :
          <p>
            <Icon name='calendar outline' />
            Refill Needed by {newDate}
          </p>}
      </Card.Content>
      <Card.Content extra>
        <Icon name='calendar outline' />
        {howLong()}
      </Card.Content>
    </Card >
  )

}

export default MedCard;
