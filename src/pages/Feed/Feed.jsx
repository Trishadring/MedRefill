import React, { useState, useEffect } from "react";
import Nav from '../../components/Nav/Nav'
import AddMedForm from '../../components/Medication/Form/AddMedForm/AddMedForm'
import MedFeed from '../../components/Medication/MedFeed/MedFeed'
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";
import Loading from "../../components/Loader/Loader";
import useToggle from '../../utils/useToggle'

export default function Feed({ user, handleLogout }) {
  const [reRender, setReRender] = useToggle();
  const [meds, setMeds] = useState([]);
  const [loading, setLoading] = useState(true);
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
  }, [reRender]);
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
        <Grid.Column style={{ maxWidth: 800 }}>
          <MedFeed medication={meds} user={user} loading={loading} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddMedForm setReRender={setReRender} />
        </Grid.Column>
      </Grid.Row>
    </Grid>





  )

}
