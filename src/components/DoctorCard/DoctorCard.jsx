import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import AddDoctor from '../AddDoctor/AddDoctor';
import * as doctorApi from "../../utils/doctorApi";


function DoctorCard({ med_id, doctor }) {
  console.log(med_id, "med id on doctor page fill")
  const [state, setState] = useState([]);
  const [docKey, setdocKey] = useState([]);
  async function getDoctors() {
    try {
      const data = await doctorApi.getAll();
      await setState([...data.doctor]);
      console.log(state, docKey.length, data, "state")
      if (docKey.length < 1) {
        getNames(data.doctor);
      }
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }

  function getNames(doctors) {
    console.log(state, 'get names')
    try {
      doctors.forEach((doc) => {
        console.log(docKey, "docKey");
        setdocKey(prevItems => [...prevItems, {
          key: doc._id,
          text: doc.name,
          value: doc._id
        }]);
      });
    }
    catch (err) {
      console.log(err.message, " this is the error");
    }
  }
  useEffect(() => {
    console.log("useEffect")
    getDoctors();

  }, []);

  return (
    <Card>
      <Card.Content>
        <Card.Header>Doctor</Card.Header>
        <Card.Meta>
        </Card.Meta>
        <Card.Content>
          <AddDoctor docKey={docKey} med_id={med_id} />
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      </Card.Content>
    </Card >
  )
}

export default DoctorCard;
