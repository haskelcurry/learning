/**
 * Start caching for selected tab
 */
public activateCaching(): void {
  this.localStorageService.activateCaching(this.selectedTab);
}
