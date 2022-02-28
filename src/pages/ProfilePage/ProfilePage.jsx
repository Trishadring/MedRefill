import { useState, useEffect } from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import Nav from "../../components/Nav/Nav";
import Loading from "../../components/Loader/Loader";
import DoctorDetails from '../../components/Doctor/DoctorDetails/DoctorDetails'
import userService from "../../utils/userService";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import { useParams, Link } from "react-router-dom";
// import * as likesAPI from "../../utils/likeApi";

export default function ProfilePage(props) {
  const [doctors, setDoctors] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // grab the param from the browser
  // we defined username in the app.js /:username
  const { username } = useParams();

  console.log(username, " <----- this username");

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, " <- data");

      setLoading(() => false);
      setDoctors(() => data.doctors);
      setPharmacies(() => data.pharmacies);
      setUser(() => data.user);
    } catch (err) {
      console.log(err);
      setLoading(() => false);
      setError("Profile Does not exist!");
    }
  }

  useEffect(() => {
    getProfile();
  }, [username]);

  if (loading) {
    return (
      <>
        <Nav handleLogout={props.handleLogout} user={props.user} />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav handleLogout={props.handleLogout} user={props.user} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Nav handleLogout={props.handleLogout} user={props.user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 800 }}>
          <Card.Group itemsPerRow={2} stackable>
            <Card fluid>
              <Card.Content>
                <Card.Header>List of Doctors</Card.Header>
                <Segment.Group>
                  {doctors.map((doctor) => {
                    return (
                      <DoctorDetails doctor={doctor} />
                    );
                  })}
                </Segment.Group>
                <Link to="/Doctor">Add A Doctor</Link>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Card.Header>List of Pharmacies</Card.Header>
                <Segment.Group>
                  {pharmacies.map((pharmacy) => {
                    return (
                      <DoctorDetails doctor={pharmacy} />
                    );
                  })}
                </Segment.Group>
                <Link to="/Pharmacy">Add A Pharmacy</Link>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
