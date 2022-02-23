import React from "react";
import MedCard from '../MedCard/MedCard'
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";


function MedFeed({ medication }) {
	console.log(medication, "meds on medfeed")
	return (
		<Card.Group itemsPerRow={1} stackable>
			{medication.map((medication) => {
				return (
					<MedCard  medication={medication} />
				);
			})}
		</Card.Group>
	)
}

export default MedFeed;
