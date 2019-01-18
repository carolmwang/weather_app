const BASE_URL = 'api.openweathermap.org/data/2.5/weather?';

// api.openweathermap.org/data/2.5/weather?zip=94040,us
// api.openweathermap.org/data/2.5/weather?q=London

// fetch weather by city
export function weatherByCity(city) {
  return fetch(`${BASE_URL}q=${city}`)
    .then(resp => {
      return resp.json()
    })
    .catch(e => {
      throw Error(e)
    })
};

// fetch weather by zipcode
export function weatherByZip(zip) {
  return fetch(`${BASE_URL}zip=${zip}`)
    .then(resp => {
      return resp.json()
    })
    .catch(e => {
      throw Error(e)
    });
};


