import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


function MedCard({ medication }) {
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	// console.log(medication, "meds on the medcard page")
	const time = new Date(medication.refillDate);
	const today = new Date();
	console.log(today)
	const newDate = time.toLocaleDateString(undefined, options);
	console.log(newDate, "new date")
	return (
		<Card key={medication._id}>
			<Card.Content>
				<Card.Header>{medication.medName} {medication.medDose}</Card.Header>
				<Card.Meta>{medication.medGenericName} {medication.medDose}</Card.Meta>
				{/* <Card.Description>
					Daniel is a comedian living in Nashville.
				</Card.Description> */}
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name='calendar outline' />
					Refill Needed by {newDate}
				</a>
			</Card.Content>
		</Card>
	)

}

export default MedCard;
