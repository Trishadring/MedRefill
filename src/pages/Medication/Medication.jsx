import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import FullMedCard from '../../components/Medication/FullMedCard/FullMedCard'
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";
import Loading from "../../components/Loader/Loader";

export default function Feed({ user }) {
  console.log(user, "user")
  const [meds, setMeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = useParams();

  async function getMed() {
    try {
      const data = await medicationApi.getOne(id.medId);
      setMeds(data.medication);
      setLoading(() => false);
    } catch (err) {
      console.log(err.message, "-- this is the error");
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
        <Grid.Column style={{ maxWidth: 900 }}>
          <FullMedCard medication={meds} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
