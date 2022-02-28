import tokenService from "./tokenService";

const BASE_URL = '/api/pharmacy';

export function create(pharmacy) {
  console.log(pharmacy, "pharmacy")
  return fetch(`${BASE_URL}`, { // <- this end point is communicating with the create route in /routes/likes.js on express server
    method: 'POST',
    body: JSON.stringify(pharmacy),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      "Content-Type": "application/json",
      'Accept': 'application/json'
      // <- the jwt contains the user who is sending the like
    }
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error in creating the pharmacy, Check your express terminal!')
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

export function getOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}

export function update(details, oneMed) {
  console.log(oneMed, 'medId')
  console.log(details, "details")
  return fetch(`${BASE_URL}/${oneMed}/updateMed`, {
      method: 'PUT',
      body: JSON.stringify(details),
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}