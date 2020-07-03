select(action, doctor) {
  this.patient[`getStatusOf${action}`](doctor)
    .subscribe(result => ...);
}




































// enum Action = {
//   Monitoring,
//   Diagnosis,
//   Feedback
// }

// select(action: Action, doctor) {
//   this.getStatusOf(action, doctor)
//     .subscribe(result => ...);
// }

// getStatusOf(action, doctor) {
//   return {
//     Action.Monitoring: () => this.backend.loadDoctor(doctor),
//     Action.Diagnosis: () => this.backend.loadDiagnosis(doctor),
//     Action.Feedback: () => this.backend.loadFeedback(doctor)
//   }[action]();
// }




// Delayed evaluation (THUNK)
