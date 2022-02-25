import React, { useState, useEffect } from "react";

import { Card, Icon, Image, Button, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import UpdateFill from "../UpdateFill/UpdateFill"
import * as medicationApi from "../../utils/medicationApi";
import MedCard from '../MedCard/MedCard'
import DoctorCard from '../DoctorCard/DoctorCard'

function FullMedCard({ medication }) {
  const [state, setState] = useState({
    medName: medication.medName,
    genericName: medication.medGenericName,
    dosage: medication.medDose,
    lastFilled: '',
    perDay: '',
    cost: '',
    notes: medication.notes,
    qtyPerFill: '',
  })
  console.log(medication, "meds")
  // console.log(state, "state")
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const time = new Date(medication.refillDate);
  const newDate = time.toLocaleDateString(undefined, options);

  function howLong() {
    const today = new Date();
    const difference = time.getTime() - today.getTime();
    const daysdiff = difference / (1000 * 3600 * 24);
    const final = Math.floor(daysdiff);
    if (final > 1) {
      return (
        <span>{final} days until you are out of medication</span>
      )
    } else {
      return (
        <span>You are out of medication!</span>
      )
    }
  }
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    try {
      medicationApi.create(state)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Card.Group itemsPerRow={3}>
      <MedCard medication={medication} />
      <Card>
        <Card.Content>
          <Card.Header>Med Status</Card.Header>
          <Card.Content>
            <UpdateFill med_id={medication._id} />
          </Card.Content>
        </Card.Content>
      </Card>
      <DoctorCard med_id={medication._id} doctor={medication.doctor} />
    </Card.Group>
  )

}

export default FullMedCard;
