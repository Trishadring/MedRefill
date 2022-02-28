import tokenService from "./tokenService";

const BASE_URL = '/api/medication';

export function create(medication) {
  return fetch(`${BASE_URL}`, { // <- this end point is communicating with the create route in /routes/likes.js on express server
    method: 'POST',
    body: JSON.stringify(medication),
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      // "Content-Type": "application/json",
      'Accept': 'application/json'
      // <- the jwt contains the user who is sending the like
    }
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error in creating the medication, Check your express terminal!')
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

export function getOne(oneMed) {
  return fetch(`${BASE_URL}/${oneMed}`, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}

export function updateFill(newFillDate, oneMed) {
  return fetch(`${BASE_URL}/${oneMed}/updateFill`, {
      method: 'PUT',
      body: JSON.stringify(newFillDate),
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}

export function changeDoc(oneMed, id) {
  const body = {
    'id': `${id}`
  };
  return fetch(`${BASE_URL}/${oneMed}/updateDoc`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}

export function changePharmacy(oneMed, id) {
  const body = {
    'id': `${id}`
  };
  return fetch(`${BASE_URL}/${oneMed}/updatePharmacy`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
}

export function update(details, oneMed) {
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

