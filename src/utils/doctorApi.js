import tokenService from "./tokenService";

const BASE_URL = '/api/doctor';

export function create(doctor) {
  console.log(doctor, "doctor")
  return fetch(`${BASE_URL}`, { // <- this end point is communicating with the create route in /routes/likes.js on express server
    method: 'POST',
    body: JSON.stringify(doctor),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      "Content-Type": "application/json",
      'Accept': 'application/json'
      // <- the jwt contains the user who is sending the like
    }
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error in creating the doctor, Check your express terminal!')
  })
}

export function getAll() {
  return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}