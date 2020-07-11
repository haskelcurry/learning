this.httpService
  .getData()
  .subscribe(data => {
    this.preloader = false;
    // Conditions
    if (this.dropdownClosed) {
      // Transformations
      const newData = data.map(...).filter(...);
      ...
      // More conditions, more transformations
      ...
      this.dropdownData = newData;
    }
  });




// this.httpService
//   .getData()
//   .tap(() => this.preloader = false)
//   .filter(isDropdownClosed)
//   .map(someTransformation)
//   .map(someFilter)
//   .subscribe(result => this.dropdownData = result);





// Data transformation flow: source -> transformation via pure functions -> output
