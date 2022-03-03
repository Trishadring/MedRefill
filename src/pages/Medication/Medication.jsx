import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import FullMedCard from '../../components/Medication/FullMedCard/FullMedCard'
import * as medicationApi from "../../utils/medicationApi";
import userService from "../../utils/userService";
import { Grid } from "semantic-ui-react";
import Loading from "../../components/Loader/Loader";
import useToggle from '../../Hooks/useToggle'

export default function Medication({ user, handleLogout }) {
  const [meds, setMeds] = useState([]);
  const [reRender, setReRender] = useToggle();
  const [Providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = useParams();
  async function getMed() {
    try {
      const data = await medicationApi.getOne(id.medId);
      setMeds(data.medication);

    } catch (err) {
      console.log(err.message, "-- this is the error");
    }
  }
  async function getProfile() {
    try {
      const data = await userService.getProfile(user.username);
      setProviders({
        doctors: data.doctors,
        pharmacies: data.pharmacies
      })
      setLoading(() => false);
    } catch (err) {
      console.log(err);
      setLoading(() => false);
    }
  }

  useEffect(() => {
    getMed();
    getProfile();
  }, [reRender]);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (

    <>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 900 }}>
          <FullMedCard medication={meds} setReRender={setReRender} providers={Providers} />
        </Grid.Column>
      </Grid.Row>
    </>
  )

}
