import React, { useState, useEffect } from "react";
import { Grid, Segment, Button, Header, Form } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import * as medicationApi from "../../../../utils/medicationApi";



function AddMedForm({ predata }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    medName: '',
    medGenericName: '',
    medDose: '',
    numPillsLeft: '',
    numPerDay: '',
    notes: '',
    qtyPerFill: '',
  })

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    for (let key in state) {
      formData.append(key, state[key])
    }
    try {
      { predata ? medicationApi.update(state, predata._id) : medicationApi.create(state) }
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  }

  function preLoadFormData() {
    setState({
      medName: predata.medName,
      medGenericName: predata.medGenericName,
      medDose: predata.medDose,
      numPerDay: predata.numPerDay,
      cost: predata.cost,
      notes: predata.notes,
      qtyPerFill: predata.qtyPerFill,
    })
  }

  useEffect(() => {
    if (predata) {
      preLoadFormData();
    }

  }, []);

  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
          <Header as='h2'>{predata ? "Edit" : "Add"} A Medication</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input fluid
                label='Medication name'
                placeholder='Medication name'
                onChange={handleChange}
                name='medName'
                value={state.medName}
              />
              <Form.Input fluid label='Generic Name' placeholder='Generic Name'
                onChange={handleChange}
                name='medGenericName'
                value={state.medGenericName} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Dosage' placeholder='Dosage'
                onChange={handleChange}
                name='medDose'
                value={state.medDose} />
              <Form.Input fluid label='How many pills you have left' placeholder='# of pills'
                type='number'
                onChange={handleChange}
                name='numPillsLeft'
                value={state.numPillsLeft} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='# of pills per Refill' placeholder='30'
                type='number'
                onChange={handleChange}
                name='qtyPerFill'
                value={state.qtyPerFill} />
              <Form.Input fluid label='Pills per Day' placeholder='1 or 2'
                type='number'
                onChange={handleChange}
                name='numPerDay'
                value={state.numPerDay} />
            </Form.Group>
            <Form.TextArea label='Notes' placeholder='Any notes?'
              onChange={handleChange}
              name='notes'
              value={state.notes} />
            <Button type='submit'>{predata ? "Update" : "Submit"}</Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )

}

export default AddMedForm;
