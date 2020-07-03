// Count word appearance in user logs for today
public count(id, word) {
  var log = getUserLogFromDb(id);
  var count = 0;
  for (var i in log) {
    if (log[i].time > YESTERDAY && log[i].level === WARNING) {
      count += log[i].message.split(word).length;
    }
  }
}





// import { pipe, prop, propEq, gt, filter, pluck, reduce } from 'lodash/fp';

// private countWordInTodayLogs(userId, word) {
//   return pipe(
//     getUserLogFromDb,
//     fromYesterday,
//     warningsOnly,
//     pluckMsg,
//     countWord(word)
//   )(userId);
// }

// const timeGtYesterday = pipe(prop('time'), gt(YESTERDAY));
// const fromYesterday = filter(timeGtYesterday);
// const warningsOnly = filter(propEq('type', WARNING));
// const pluckMsg = pluck('message');
// const countWord = word => reduce((result, msg) =>
//                                   result + msg.split(word).length, 0);



// LODASH! RXJS!
