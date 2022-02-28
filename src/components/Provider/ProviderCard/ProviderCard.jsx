import React from "react";
import { Card, Button, Segment } from "semantic-ui-react"; import { Link } from "react-router-dom";
import DoctorDetails from '../../Doctor/DoctorDetails/DoctorDetails'

function ProviderCard({ providers, type }) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>List of {type}s</Card.Header>
        <Segment.Group>
          {providers.map((provider) => {
            return (
              <DoctorDetails key={provider._id} type="provider" doctor={provider} />
            );
          })}
        </Segment.Group>
        <Button>
          <Link to={`/${type}`}>Add A {type}</Link>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default ProviderCard;
