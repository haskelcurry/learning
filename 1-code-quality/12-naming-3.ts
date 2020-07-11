/**
 * Stop listening signal 'switchTab'
 */
public disposeSignalListeners(): void {
  this.signalNotifierSrvc.disposeSignalListeners(this.signalListeners);
}


// Proper Naming Improves the Readability
// Proper Naming Improves the Declarativeness
// Proper Naming is 90% of Success
