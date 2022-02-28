import tokenService from "./tokenService";

const BASE_URL = '/api/doctor';

export function create(doctor) {
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
export function update(details, id) {
  return fetch(`${BASE_URL}/${id}/update`, {
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

export function deleteProvider(id) {
  return fetch(`${BASE_URL}/${id}`, {
      method: 'delete',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}