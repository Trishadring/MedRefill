import React, { useState, useEffect } from "react";
import { Grid, Segment, Button, Header, Form } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import * as medicationApi from "../../../../utils/medicationApi";



function AddMedForm({ preData }) {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
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
      edit ? medicationApi.update(state, preData._id) : medicationApi.create(state);
      edit ? navigate(`/medication/${preData._id}`) : navigate(`/`);

    } catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    if (preData) {
      setEdit(() => true);
      preLoadFormData();
    }
    function preLoadFormData() {
      setState({
        medName: preData.medName,
        medGenericName: preData.medGenericName,
        medDose: preData.medDose,
        numPerDay: preData.numPerDay,
        cost: preData.cost,
        notes: preData.notes,
        qtyPerFill: preData.qtyPerFill,
      })
    }
  }, [preData]);

  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Segment>
          <Header as='h2'>{edit ? "Edit" : "Add"} A Medication</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input required fluid
                label='Medication name'
                placeholder='Medication name'
                onChange={handleChange}
                name='medName'
                value={state.medName}
              />
              <Form.Input fluid
                label='Generic Name' placeholder='Generic Name'
                onChange={handleChange}
                name='medGenericName'
                value={state.medGenericName} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid
                label='Dosage' placeholder='Dosage'
                onChange={handleChange}
                name='medDose'
                value={state.medDose} />
              <Form.Input required fluid
                label='# of pills you have left' placeholder='# of pills'
                type='number'
                onChange={handleChange}
                name='numPillsLeft'
                value={state.numPillsLeft} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input required fluid
                label='# of pills per Refill' placeholder='30'
                type='number'
                onChange={handleChange}
                name='qtyPerFill'
                value={state.qtyPerFill} />
              <Form.Input required fluid
                label='Pills per Day' placeholder='1 or 2'
                type='number'
                onChange={handleChange}
                name='numPerDay'
                value={state.numPerDay} />
            </Form.Group>
            <Form.TextArea label='Notes' placeholder='Any notes?'
              onChange={handleChange}
              name='notes'
              value={state.notes} />
            <Button type='submit'>{edit ? "Update" : "Submit"}</Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )

}

export default AddMedForm;
