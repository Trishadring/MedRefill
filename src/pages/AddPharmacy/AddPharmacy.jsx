import React, { useState } from "react";
import { Grid, Segment, Button, Header, Form } from 'semantic-ui-react'
import Nav from '../../components/Nav/Nav'
import * as pharmacyApi from "../../utils/pharmacyApi";
import { useNavigate } from "react-router-dom";

function AddProvider({ user }) {
  const [state, setState] = useState({
    name: '',
    phoneNum: '',
    hours: '',
    notes: '',
  })
  const navigate = useNavigate();
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
    // console.log(state, "state")
    try {
      pharmacyApi.create(state)
      navigate(`\${user.username}`);
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Nav user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment>
            <Header as='h2'>Add A Pharmacy</Header>
            <Form onSubmit={handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input fluid
                  label='Pharmacy name'
                  placeholder='Pharmacy name'
                  onChange={handleChange}
                  name='name'
                  value={state.name}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='hours' placeholder='hours' onChange={handleChange}
                  name='hours'
                  value={state.hours} />
                <Form.Input fluid label='Phone Number' placeholder='(123)456-7890' onChange={handleChange}
                  name='phoneNum'
                  value={state.phoneNum} />
              </Form.Group>
              <Form.TextArea label='Notes' placeholder='Any notes?'
                onChange={handleChange}
                name='notes'
                value={state.notes} />
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AddProvider;
