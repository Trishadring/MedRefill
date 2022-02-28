import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import LinkPharmacy from '../LinkPharmacy/LinkPharmacy';
import DoctorDetails from '../../Doctor/DoctorDetails/DoctorDetails';
import * as pharmacyApi from "../../../utils/pharmacyApi";


function PharmacyCard({ med_id, pharmacy }) {
  console.log(pharmacy , "pharmacy")
  const [pharmKey, setPharmKey] = useState([]);
  async function getPharmacies() {
    try {
      const data = await pharmacyApi.getAll();
      console.log(data, "data")
      if (pharmKey.length < 1) {
        getNames(data.pharmacy);
      }
    } catch (err) {
      console.log(err.message, " this is the error");
    }
  }

  function getNames(pharmacies) {
    try {
      pharmacies.forEach((p) => {
        console.log('try')
        setPharmKey(prevItems => [...prevItems, {
          key: p._id,
          text: p.name,
          value: p._id
        }]);
      });
    }
    catch (err) {
      console.log(err.message, " this is the error");
    }
  }
  useEffect(() => {
    getPharmacies();
  }, []);


  return (
    <Card>
      <Card.Content>
        <Card.Header>Pharmacy</Card.Header>
        <Card.Meta>
        </Card.Meta>
        {pharmacy ? <DoctorDetails doctor={pharmacy} /> : "No Pharmacy Yet"}
        <Card.Content>
          <LinkPharmacy pharmKey={pharmKey} med_id={med_id} />
        </Card.Content>

        <Card.Content extra>
        </Card.Content>
      </Card.Content>
    </Card >
  )
}

export default PharmacyCard;
