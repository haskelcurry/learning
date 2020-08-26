let o = {...};

switch (getUserRank()) {
  case USER: o.isAdmin = false; break;
  case DOCTOR: o.isAdmin = false; loadDoctorInfo(); break;
  case ADMIN: o.isAdmin = true; break;
}

return o;








// const rank = getUserRank();
// const isAdmin = rank === ADMIN;
// const isDoctor = rank === DOCTOR;

// isDoctor && loadDoctorInfo();

// return {
//   isAdmin
// };






// Instant
