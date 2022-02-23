import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

function Nav() {
  return (
    <Segment clearing>
      <Header as="h2" floated="right">
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>
        <Link to="" >
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        MedRefill
      </Header>
    </Segment>
  )

}

export default Nav;

