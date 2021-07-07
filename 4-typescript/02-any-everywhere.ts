// So, here's what we do:
function loadPatientsOfClinic(id) {
  return Promise.resolve([{name: 'John Smith', clinicId: id}]);
}

// Parameter 'id' implicitly has any type.
// What does it mean?
// Well it means that we can write id: any  (well,  and :any too)
// return null;  id = null;  Inputs and outputs of the function are not typechecked / not validated.
// And that's what we're DOING in TS, right? Making our code typesafe
// https://en.wikipedia.org/wiki/Type_safety
// And not like we have it in JS
// https://en.wikipedia.org/wiki/Duck_typing



// Here's how it could look like:
type ClinicId = string;
type Patient = {name: string, clinicId: ClinicId};

function loadPatientsOfClinic(id: ClinicId): Promise<Patient[]> {
  return Promise.resolve([{name: 'John Smith', clinicId: id}]);
}


// BUT, there are benefits of 'any', too
// (go through the example in the playground)
//
//
//
// Btw, the Promise<Patient[]> corresponds to type variables from Haskell




// 20min
