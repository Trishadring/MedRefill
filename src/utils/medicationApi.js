import tokenService from "./tokenService";

const BASE_URL = '/api/medication';

export function create(medication) {
	console.log(medication, "medication")
	return fetch(`${BASE_URL}`, { // <- this end point is communicating with the create route in /routes/likes.js on express server
		method: 'POST',
		body: JSON.stringify(medication),
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(),
			"Content-Type": "application/json",
			'Accept': 'application/json'
			// <- the jwt contains the user who is sending the like
		}
	}).then(res => {
		if (res.ok) return res.json();
		throw new Error('Error in creating the medication, Check your express terminal!')
	})
}

export function getAll() {
	// console.log('got to line 23 on api')
	return fetch(BASE_URL, {
			headers: {
				'Authorization': 'Bearer ' + tokenService.getToken(),
				"Content-Type": "application/json",
				'Accept': 'application/json'
			}
		})
		.then(res => res.json());
}

export function getOne(oneMed) {
	console.log(oneMed, 'medId')
	return fetch(`${BASE_URL}/${oneMed}`, {
			headers: {
				'Authorization': 'Bearer ' + tokenService.getToken(),
				"Content-Type": "application/json",
				'Accept': 'application/json'
			}
		})
		.then(res => res.json());
}