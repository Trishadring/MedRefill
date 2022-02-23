import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


function MedCard({ medication }) {
	console.log(medication, "meds on the medcard page")
	return (
		<Card key={medication._id}>
			<Card.Content>
				<Card.Header>{medication.medName} {medication.medDose}</Card.Header>
				<Card.Meta>{medication.medGenericName} {medication.medDose}</Card.Meta>
				<Card.Description>
					Daniel is a comedian living in Nashville.
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name='user' />
					Refill Needed by {medication.refillDate}
				</a>
			</Card.Content>
		</Card>
	)

}

export default MedCard;
