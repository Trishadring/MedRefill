import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import * as medicationApi from "../../utils/medicationApi";


function UpdateFill({ med_id }) {
  // console.log(med_id, "med id on update fill")
  const [state, setState] = useState({
    lastFilled: '',
  })
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    // console.log(state, "state on updatefill component")
  }
  function handleSubmit(e) {
    e.preventDefault()
    try {
      medicationApi.updateFill(state, med_id)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <p>Add A Medication Refill</p>
      <Form.Group widths='equal'>
        <Form.Input fluid type='date' onChange={handleChange}
          name='lastFilled'
          value={state.lastFilled} />
        <Button content='Add Fill' icon='edit outline' labelPosition='right' />
        {/* ice box add ablity to update meds left */}
      </Form.Group>
    </Form>
  )
}

export default UpdateFill;
