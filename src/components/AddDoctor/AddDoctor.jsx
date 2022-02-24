import React, { useState, useEffect } from "react";
import { Form, Button, Select, Card } from "semantic-ui-react";
import * as medicationApi from "../../utils/medicationApi";


function AddDoctor({ docKey, med_id }) {
  console.log(docKey, "doctors")
  const [state, setState] = useState();

  function handleChange(e, data) {
    console.log(e);
    console.log(data.value, "data");
    setState(data.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(state, "state on updatefill component")
    try {
      medicationApi.changeDoc(med_id, state)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group widths='equal'>
        <Form.Field
          control={Select}
          label='Change Doctor'
          options={docKey}
          placeholder='Doctor'
          onChange={handleChange}
        />
        <Button content='Update Doctor' icon='edit outline' labelPosition='right' />
      </Form.Group>
    </Form>
  )
}

export default AddDoctor;
