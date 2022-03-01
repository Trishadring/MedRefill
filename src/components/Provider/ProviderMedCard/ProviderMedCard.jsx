import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import ProviderDetails from '../../Provider/ProviderDetails/ProviderDetails';
import LinkProvider from '../LinkProvider/LinkProvider'

function ProviderMedCard({ med_id, providers, provider, type }) {
  const [options, setOptions] = useState([]);

  function getNames(providers) {
    setOptions([]);
    try {
      providers.forEach((p) => {
        setOptions(prevItems => [...prevItems, {
          key: p._id,
          text: p.name,
          value: p._id
        }]);
      });
    }
    catch (err) {
      console.log(err.message, " this is the error");
    }
  }
  useEffect(() => {
      getNames(providers);
  }, [providers]);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{type}</Card.Header>
        <Card.Meta>
        </Card.Meta>
        {provider ? <ProviderDetails doctor={provider} type={type} /> : "No provider Yet"}
        <Card.Content>
          <LinkProvider options={options} med_id={med_id} type={type} />
        </Card.Content>

        <Card.Content extra>
        </Card.Content>
      </Card.Content>
    </Card >
  )
}

export default ProviderMedCard;
