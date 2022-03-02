import React from "react";
import { Card, Button, Segment } from "semantic-ui-react"; import { Link } from "react-router-dom";
import ProviderDetails from '../ProviderDetails/ProviderDetails'

function ProviderCard({ providers, type, setReRender }) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>List of {type}s</Card.Header>
        <Segment.Group>
          {providers.map((provider) => {
            return (
              <ProviderDetails key={provider._id} type={type} doctor={provider} providers={providers} setReRender={setReRender} />
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
