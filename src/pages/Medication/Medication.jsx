import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import FullMedCard from '../../components/FullMedCard/FullMedCard'
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";

export default function Feed() {
  const [meds, setMeds] = useState([]);
  // console.log(meds, "state on medication page");
  const id = useParams();
  // console.log(id, "params")

  async function getMed() {
    try {
      const data = await medicationApi.getOne(id.medId);
      console.log(data.medication, "data")
      setMeds(data.medication);
    } catch (err) {
      console.log(err.message, "-- this is the error");
      // setError(err.message);
    }
  }

  useEffect(() => {
    getMed();
  }, []);
  return (

    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Nav />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column >
          <FullMedCard medication={meds} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
