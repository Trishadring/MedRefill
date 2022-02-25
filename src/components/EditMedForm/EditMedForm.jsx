import React, { useState, useEffect } from "react";
import { Grid, Segment, Button, Header, Form } from 'semantic-ui-react'
import * as medicationApi from "../../utils/medicationApi";
import { useNavigate, Navigate } from "react-router-dom";



function EditMedForm({ predata }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    medName: '',
    medGenericName: '',
    medDose: '',
    numPillsLeft: '',
    numPerDay: '',
    cost: '',
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
      console.log(state, "state")
      medicationApi.update(state, predata._id)
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
    preLoadFormData();
  }, []);


  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
          <Header as='h2'>Edit A Medication</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input fluid
                label='Medication name'
                placeholder={state.medName}
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
                onChange={handleChange}
                type='number'
                name='numPerDay'
                value={state.numPerDay} />
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

export default EditMedForm;
