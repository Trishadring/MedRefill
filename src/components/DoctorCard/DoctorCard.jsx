import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import AddDoctor from '../AddDoctor/AddDoctor';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import * as doctorApi from "../../utils/doctorApi";


function DoctorCard({ med_id, doctor }) {
  const [docKey, setdocKey] = useState([]);
  async function getDoctors() {
    try {
      const data = await doctorApi.getAll();
      if (docKey.length < 1) {
        getNames(data.doctor);
      }
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }

  function getNames(doctors) {
    try {
      doctors.forEach((doc) => {
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
    getDoctors();
  }, []);


  return (
    <Card>
      <Card.Content>
        <Card.Header>Doctor</Card.Header>
        <Card.Meta>
        </Card.Meta>
        {doctor ? <DoctorDetails doctor={doctor} /> : ""}
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
