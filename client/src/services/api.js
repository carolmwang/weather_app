const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const api = '&appid=f5fcfb9e6bec1a612f753c904817c2b0';

// api.openweathermap.org/data/2.5/weather?zip=94040,us
// api.openweathermap.org/data/2.5/weather?q=London

// fetch weather by city
export function weatherByCity(city) {
  return fetch(`${BASE_URL}q=${city}${api}`)
    .then(resp => {
      return resp.json()
    })
    .catch(e => {
      throw Error(e)
    })
};

// fetch weather by zipcode
export function weatherByZip(zip) {
  return fetch(`${BASE_URL}zip=${zip}${api}`)
    .then(resp => {
      return resp.json()
    })
    .catch(e => {
      throw Error(e)
    });
};


