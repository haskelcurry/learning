// So, here's what we do:
function loadPatientsOfClinic(clinic) {
  // Some backend request involving this clinic data
  // fetch(..., {method: 'POST', body: JSON.stringify(clinic)})
  return Promise.resolve([{name: 'John Smith', clinic}]);
}

// Parameter 'clinic' implicitly has any type.
// What does it mean?
// Well it means that we can write 'clinic: any'  (well,  and '}]): any', too)
// So we could  return null;  pass null;  Inputs and outputs of the function are 
// not typechecked / not validated.
// But that's what we're DOING in TS, right? Making our code typesafe
// https://en.wikipedia.org/wiki/Type_safety
// And not like we have it in JS
// https://en.wikipedia.org/wiki/Duck_typing



// Ok let's refactor it! Here's how it could look like:
type Clinic = {id: string, address?: string};
type Patient = {name: string, clinic: Clinic};

function loadPatientsOfClinic(clinic: Clinic): Promise<Patient[]> {
  return Promise.resolve([{name: 'John Smith', clinic}]);
}


// BUT, it's not always bad.. There are benefits of 'any', too
// (go through the example in the playground)
//
//
//




// 20min
