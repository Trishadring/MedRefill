import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import * as medicationApi from "../../../../utils/medicationApi";


function UpdateFill({ med_id, setReRender }) {
  const [state, setState] = useState({
    lastFilled: '',
  })
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    try {
      medicationApi.updateFill(state, med_id)
      setReRender();
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
      </Form.Group>
    </Form>
  )
}

export default UpdateFill;
