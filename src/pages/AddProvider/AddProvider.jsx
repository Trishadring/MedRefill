import React, { useState, useEffect } from "react";
import { Grid, Segment, Button, Header, Form } from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import * as doctorApi from "../../utils/doctorApi";
import * as pharmacyApi from "../../utils/pharmacyApi";
import * as medicationApi from "../../utils/medicationApi";
import Nav from '../../components/Nav/Nav'
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loader/Loader";

function AddProvider({ user, type }) {
  let API = "";
  if (type === "Doctor") { API = doctorApi }
  if (type === "Pharmacy") { API = pharmacyApi }
  const id = useParams();
  const [state, setState] = useState({
    name: '',
    phoneNum: '',
    hours: '',
    notes: '',
  })
  const [loading, setLoading] = useState(true);
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
    try {
      { id ? API.update(state, id.id) : API.create(state) }
      navigate(`/${user.username}`);
    } catch (err) {
      console.log(err)
    }

  }


  async function getMed() {
    try {
      const results = await API.getOne(id.id);
      let data = results.provider;
      setLoading(() => false);
      setState({
        name: data.name,
        phoneNum: data.phoneNum,
        hours: data.hours,
        notes: data.notes,
      })
      setLoading(() => false);
    } catch (err) {
      console.log(err.message, "-- this is the error");
      setLoading(() => false);
    }
  }



  useEffect(() => {
    if (id) {
      getMed();
    } else {
      setLoading(() => false);
    }

  }, []);

  if (loading) {
    return (
      <>
        <Nav user={user} />
        <Loading />
      </>
    );
  }
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Nav user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 600 }}>
          <Segment>
            <Header as='h2'>{id ? "Edit" : "Add"} A {type}</Header>
            <Form onSubmit={handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input fluid
                  label="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  name='name'
                  value={state.name}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Hours' placeholder='Hours' onChange={handleChange}
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
              <Button type='submit'>{id ? "Update" : "Submit"}</Button>
            </Form>
          </Segment>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default AddProvider;
