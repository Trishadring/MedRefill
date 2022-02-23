import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import FullMedCard from '../../components/FullMedCard/FullMedCard'
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";

export default function Feed() {
	const [meds, setMeds] = useState();
	console.log(meds, "state");
	const id = useParams();
	async function getPosts() {
		try {
			const data = await medicationApi.getOne(id.medId);
			// console.log(data, "data")
			setMeds(data.medication);
			console.log(meds, "state");
		} catch (err) {
			console.log(err.message, " this is the error");
			// setError(err.message);
		}
	}
	useEffect(() => {
		getPosts();
	}, []);

	return (

		<Grid centered>
			<Grid.Row>
				<Grid.Column>
					<Nav />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column style={{ maxWidth: 800 }}>
					<FullMedCard medication={meds} />
				</Grid.Column>
			</Grid.Row>
		</Grid>





	)

}
