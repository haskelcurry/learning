const formatSymbol = (id) => {
  switch (id) {
    case 'lb':
      return 'lbs';
    default:
      return id;
  }
}

// const formatSymbol = id => id === 'lb' ? 'lbs' : id;
