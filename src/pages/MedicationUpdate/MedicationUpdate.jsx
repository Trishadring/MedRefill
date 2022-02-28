import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import AddMedForm from '../../components/Medication/Form/AddMedForm/AddMedForm'
import Loading from "../../components/Loader/Loader";
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";

export default function MedicationUpdate({ user }) {
  const [meds, setMeds] = useState([]);
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const id = useParams();

  async function getMed() {
    try {
      const data = await medicationApi.getOne(id.medId);
      setMeds(data.medication);
      console.log(meds);
      setLoading(() => false);
    } catch (err) {
      console.log(err.message, "-- this is the error");
      // setError(err.message);
    }
  }

  useEffect(() => {
    getMed();
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
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddMedForm predata={meds} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
