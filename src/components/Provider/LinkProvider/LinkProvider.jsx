import React, { useState } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import * as medicationApi from "../../../utils/medicationApi";


function LinkProvider({ options, med_id, type, provider }) {
  const [state, setState] = useState();
  // console.log(provider, "pro")
  function handleChange(e, data) {
    setState(data.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
      provider = state.key;
      if (type === "Doctor") { medicationApi.changeDoc(med_id, state) }
      if (type === "Pharmacy") { medicationApi.changePharmacy(med_id, state) }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group >
        <Form.Field
          control={Select}
          options={options}
          placeholder={type}
          onChange={handleChange}
        />
        <Button content={`Update ${type}`} icon='edit outline' labelPosition='right' />
      </Form.Group>
    </Form>
  )
}

export default LinkProvider;
