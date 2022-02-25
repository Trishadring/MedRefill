import React, { useState, useEffect } from "react";
import Nav from '../../components/Nav/Nav'
import AddMedForm from '../../components/AddMedForm/AddMedForm'
import MedFeed from '../../components/MedFeed/MedFeed'
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";

export default function Feed({ user, handleSignUpOrLogin }) {
  const [meds, setMeds] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(meds, "state")
  async function getMeds() {
    try {
      const data = await medicationApi.getAll();
      setMeds([...data.medication]);
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }

  useEffect(() => {
    getMeds();
  }, []);

  return (

    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Nav user={user} handleSignUpOrLogin={handleSignUpOrLogin} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <MedFeed medication={meds} user={user} loading={loading} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddMedForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>





  )

}
