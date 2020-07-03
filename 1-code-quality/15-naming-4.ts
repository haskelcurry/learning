/**
 * Stop listening signal 'switchTab'
 */
public disposeSignalListeners(): void {
  this.signalNotifierSrvc.disposeSignalListeners(this.signalListeners);
}
