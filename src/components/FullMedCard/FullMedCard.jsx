import React from "react";
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


function FullMedCard({ medication }) {
	console.log(medication, "meds")
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
		return final;
	}
	return (
		<Card key={medication._id} color='red'>
			<Card.Content>
				<Card.Header>
					{medication.medName} {medication.medDose}</Card.Header>
				<Card.Meta>{medication.medGenericName} {medication.medDose}</Card.Meta>
				<Card.Description>
					{medication.notes}
				</Card.Description>
			</Card.Content>
			<Card.Content >
				<p>
					Cost: {medication.cost}
				</p>
			</Card.Content>
			<Card.Content >
				<p>
					{howLong()}
				</p>
			</Card.Content>
			<Card.Content extra>
				<p>
					<Icon name='calendar outline' />
					Refill Needed by {newDate}
				</p>
			</Card.Content>
			<Card.Content extra>
				<Button content='Edit' icon='edit outline' labelPosition='right' />
			</Card.Content>


		</Card >
	)

}

export default FullMedCard;
