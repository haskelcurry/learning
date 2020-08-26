isEmpty(item) {
  return !item.records.length;
}

onlyValid(items) {
  const invalid = reject(isValid, items);
  invalid.length &&
    throw new Error('Invalid items are present');

  return invalid;
}

isValid(item) {
  return item.id && item.date;
}

addSettings(toItems) {
  return toItems.map(assign({
    settings: settings.find(where({id: item.settingsId}))
  }));
}

loadItems() {
  backend.load()
    .then(onlyValid)
    .then(onlyNotEmpty)
    .then(addSettings)
    .catch(console.error);
}

onlyNotEmpty(items) {
  const empty = filter(isEmpty, items);
  empty.length &&
    throw new Error('Empty items are present');

  return empty;
}






// Readability
