select(id) {
  this.getPatient(id)
    .subscribe(this.success.bind(this), this.error.bind(this));
}

private success(patient) {
  this.publish.next(this.build(patient));
  this.loading.next(false);
}

private error(error) {
  console.error('PatientAppointmentService:Error', error);
}
