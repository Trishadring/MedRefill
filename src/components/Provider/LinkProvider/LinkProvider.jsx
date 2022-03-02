import React, { useState } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import * as medicationApi from "../../../utils/medicationApi";
import useToggle from '../../../utils/useToggle'

function LinkProvider({ options, med_id, type, setReRender }) {
  const [state, setState] = useState();
  function handleChange(e, data) {
    setState(data.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
      if (type === "Doctor") { medicationApi.changeDoc(med_id, state) }
      if (type === "Pharmacy") { medicationApi.changePharmacy(med_id, state) }
      setReRender()
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
