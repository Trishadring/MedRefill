import { useState, useEffect } from "react";
import { Grid, Card, Segment, Button } from "semantic-ui-react";
import Nav from "../../components/Nav/Nav";
import Loading from "../../components/Loader/Loader";
import userService from "../../utils/userService";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import ProfileFeed from '../../components/Provider/ProviderFeed/ProviderFeed'
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

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);

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
          <ProfileFeed doctors={doctors} pharmacies={pharmacies} />
         
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
