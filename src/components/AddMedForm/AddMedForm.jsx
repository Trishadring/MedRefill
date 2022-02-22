import React, { useState } from "react";
import { Grid, Segment, Button, Header, Form } from 'semantic-ui-react'



function AddMedForm() {

	const [state, setState] = useState({
		medName: '',
		genericName: '',
		dosage: '',
		lastFilled: '',
		perDay: '',
		cost: '',
		notes: ''
	})

	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}
	return (
		<Grid textAlign='center' verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Segment>
					<Header as='h2'>Add A Medication</Header>
					<Form>
						<Form.Group widths='equal'>
							<Form.Input fluid
								label='Medication name'
								placeholder='Medication name'
								onChange={handleChange}
								name='medName'
								value={state.medName}
							/>
							<Form.Input fluid label='Generic Name' placeholder='Generic Name' onChange={handleChange}
								name='genericName'
								value={state.genericName} />

						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input fluid label='Dosage' placeholder='Dosage' onChange={handleChange}
								name='dosage'
								value={state.dosage} />
							<Form.Input label='Last Filled' type='date'
								onChange={handleChange}
								name='lastFilled'
								value={state.lastFilled} />
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input fluid label='Pills per Day' placeholder='1 or 2' onChange={handleChange}
								name='perDay'
								value={state.perDay} />
							<Form.Input fluid label='Cost' placeholder='$$$' onChange={handleChange}
								name='cost'
								value={state.cost} />
						</Form.Group>

						<Form.TextArea label='Notes' placeholder='Any notes?'
							onChange={handleChange}
							name='notes'
							value={state.notes} />
						<Button type='submit'>Submit</Button>
					</Form>
				</Segment>
			</Grid.Column>
		</Grid>
	)

}

export default AddMedForm;
