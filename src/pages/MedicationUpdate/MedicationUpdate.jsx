import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import AddMedForm from '../../components/Medication/Form/AddMedForm/AddMedForm'
import Loading from "../../components/Loader/Loader";
import * as medicationApi from "../../utils/medicationApi";
import { Grid } from "semantic-ui-react";

export default function MedicationUpdate({ user, handleLogout }) {
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
        <Loading />
      </>
    );
  }
  return (
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>
        <AddMedForm preData={meds} />
      </Grid.Column>
    </Grid.Row>
  )

}
