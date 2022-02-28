import React, { useState } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import * as medicationApi from "../../../utils/medicationApi";


function AddDoctor({ pharmKey, med_id }) {
  const [state, setState] = useState();

  function handleChange(e, data) {
    setState(data.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    try {
      medicationApi.changePharmacy(med_id, state)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group >
        <Form.Field
          control={Select}
          // label='Change Doctor'
          options={pharmKey}
          placeholder='Pharmacy'
          onChange={handleChange}
        />
        <Button content='Update Pharmacy' icon='edit outline' labelPosition='right' />
      </Form.Group>
    </Form>
  )
}

export default AddDoctor;
