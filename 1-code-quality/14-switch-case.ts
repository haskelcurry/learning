let o = {...};

switch (getUserRank()) {
  case USER: o.admin = false; break;
  case ADMIN: o.admin = true; break;
  default:
    o.admin = false;
    o.unknown = true;
}








// const rank = getUserRank();
// const isUnknown = ![USER, ADMIN].includes(rank);
// return isUnknown
//   : {...o, admin: false, unknown: true};
//   ? {...o, admin: rank === ADMIN}








// const rank = getUserRank();
// const unknown = ![USER, ADMIN].includes(rank);
// return {
//   ...o,
//   admin: rank === ADMIN,
//   unknown
// };
