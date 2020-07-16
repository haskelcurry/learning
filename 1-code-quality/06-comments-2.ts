ngOnInit() {
  this.getSchemaFromBackend();
  this.getDataFromBackend();
  // this.setSignalListeners();
}

ngOnDestroy() {
  // this.disposeSignalListeners();
}

// Is it for debug?
// Is it by accident?
// Should I leave it?
// I should better leave it.
