import React, { useState, useEffect } from "react";
import Nav from '../../components/Nav/Nav'
import AddMedForm from '../../components/Medication/Form/AddMedForm/AddMedForm'
import MedFeed from '../../components/Medication/MedFeed/MedFeed'
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";
import Loading from "../../components/Loader/Loader";

export default function Feed({ user, handleLogout }) {
  const [meds, setMeds] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(meds, "state")
  async function getMeds() {
    try {
      const data = await medicationApi.getAll();
      setMeds([...data.medication]);
      setLoading(() => false);
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }

  useEffect(() => {
    getMeds();
  }, []);
  if (loading) {
    return (
      <>
        <Nav user={user} handleLogout={handleLogout} />
        <Loading />
      </>
    );
  }
  return (

    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Nav user={user} handleLogout={handleLogout} />
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
