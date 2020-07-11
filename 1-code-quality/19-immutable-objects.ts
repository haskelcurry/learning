const patient = {
  name: 'John',
  location: 'US',
  visit: {
    time: '15:00',
    first: true
  }
};


// Add prop
const updated = {
  ...patient,
  name: 'Jack'
};


// Add nested prop
const updated = {
  ...patient,
  visit: {
    ...patient.visit,
    time: '16:00'
  }
};


// Remove the prop
import { omit } from 'lodash/fp';
const updated = omit(['name'], patient);


// Copy
const copied = {...patient};



// LODASH FP
