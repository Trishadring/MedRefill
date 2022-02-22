import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

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
				{/* <Link to={`/${user?.username}`}>
					<Image
						src={
							user?.photoUrl
								? user.photoUrl
								: "https://react.semantic-ui.com/images/wireframe/square-image.png"
						}
						avatar
					></Image>
				</Link> */}
			</Header>
		</Segment>
	)

}

export default Nav;

