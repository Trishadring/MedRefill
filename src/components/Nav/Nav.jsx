import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";
import userService from "../../utils/userService";

function Nav() {
  const [user, setUser] = useState(userService.getUser());

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
        <Link to="/">
          MedRefill
        </Link>
      </Header>
    </Segment>
  )

}

export default Nav;

