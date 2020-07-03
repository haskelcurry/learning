select(id) {
  this.patient$.pipe(take(1))
    .subscribe(patient => {
      ...
    });
}
