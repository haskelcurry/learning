loadItems() {
  backend.load().then(mapItems);
}

mapItems(items) {
  let result = [];
  let invalid = [];
  let empty = [];
  for (let i = 0; i < items.length; i++) {
    if (!isValid(items[i])) {
      invalid.push(items[i]);
    }
  }
  console.log('------------> invalid <------------', invalid);
  for (let i = 0; i < items.length; i++) {
    if (!isEmpty(items[i])) {
      empty.push(items[i]);
    }
  }
  if (invalid.length) {
    throw new Error('Invalid items are present');
  } else if (empty.length) {
    throw new Error('Empty items are present');
  } else {
    for (let i = 0; i < items.length; i++) {
      let cItem = items[i];
      for (let j = 0; j < settings.length; j++) {
        if (settings[j].id == cItem.settingsId) {
          cItem.settings = settings[j];
        }
      }
    }
  }
  return items;
}












loadItems() {
  backend.load()
    .then(onlyValid)
    .then(onlyNotEmpty)
    .then(addSettings);
}

addSettings(toItems) {
  return toItems.map(assign({
    settings: settings.find(where({id: item.settingsId}))
  }));
}

onlyValid(items) {
  const invalid = reject(isValid, items);
  invalid.length &&
    throw new Error('Invalid items are present');

  return invalid;
}

onlyNotEmpty(items) {
  ...
}

// ORDER....
