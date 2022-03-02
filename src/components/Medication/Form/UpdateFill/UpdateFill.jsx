import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import * as medicationApi from "../../../../utils/medicationApi";


function UpdateFill({ med_id, medication }) {
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
      updateRefill()
    } catch (err) {
      console.log(err)
    }
  }
  function updateRefill() {
    function addDays(pills, numPerDay, result) {
      let PerDay = parseInt(numPerDay);
      let daysOfPills = pills / PerDay;
      let results = result.setDate(result.getDate() + daysOfPills);
      return results;
    }
    const dates = new Date(state.lastFilled);
    const refillDate = addDays(medication.qtyPerFill, medication.numPerDay, dates);
    medication.refillDate = new Date(refillDate)
    console.log(refillDate);
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
