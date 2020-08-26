// Count word appearance in user logs for today
//                             (only warnings)
public count(id, word) {
  var log = getUserLogFromDb(id);
  var count = 0;
  for (var i in log) {
    if (log[i].time > TODAY_START && log[i].level === WARNING) {
      count += log[i].message.split(word).length;
    }
  }
}





// import { pipe, prop, propEq, gt, filter, pluck, reduce } from 'lodash/fp';

// private countWordInTodayWarnings(userId, word) {
//   return pipe(
//     getUserLogFromDb,
//     forToday,
//     warningsOnly,
//     getMessage,
//     countWord(word)
//   )(userId);
// }

// const forToday = filter(o => o.time > TODAY_START);
// const warningsOnly = filter(o => o.type === WARNING);
// const getMessage = map(o => o.message);
// const countWord = word => reduce((result, message) =>
//                                   result + message.split(word).length, 0);



// Functional Composition


// MENTAL NOISE
// Toolbelts: Lodash FP, RxJS
// These functions are pure
