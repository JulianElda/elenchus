const typeWeight = {
  NOTE: 0,
  FILE: 1,
  DIR: 2,
};

export function finderListSorterFunction() {
  return function (a, b) {
    return (
      typeWeight[b.type] - typeWeight[a.type] || a.path.localeCompare(b.path)
    );
  };
}
