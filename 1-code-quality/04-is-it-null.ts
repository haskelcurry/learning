const access = patient.isAdmin || null;

// Four variants instead of three:
// true, false, undefined, null
//
// Developer: "What is the reason for this?"





const diagnosis = patient.diagnosis || null;

// The variants are:
// any, undefined, null
//
// Why is null for? To signalize that it's loaded but it's empty?
// Really?
