this.http.get(url, ...).subscribe(result => {
  console.log('-------------- % % % ---------------');
  console.log('------ pat result ------', result);
  this.prop = result;
}
