import React from "react";
import Nav from '../../components/Nav/Nav'
import AddProvider from '../../components/AddProvider/AddProvider'
import AddMedForm from '../../components/AddMedForm/AddMedForm'
import MedFeed from '../../components/MedFeed/MedFeed'

export default function Feed() {
	return (
		<>
			<Nav />
			<AddProvider />
			<AddMedForm />
			<MedFeed />
		</>
	)

}
