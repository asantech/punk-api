import { createContext, useState } from 'react';

const SortByContext = createContext();
SortByContext.displayName = 'SortByContext';

function SortByProvider({ children }) {
  let initialState = {
    by: 'name',
    order: 'asc',
  };

  const [sortByState, setSortByState] = useState(initialState);

  function updateSortByState(selectedSortBy) {
    const { by, order } = sortByState;

    const newSortByState = { ...sortByState };

    if (by === selectedSortBy) {
      newSortByState.order = order === 'asc' ? 'desc' : 'asc';
    } else {
      newSortByState.by = selectedSortBy;
      newSortByState.order = 'asc';
    }
    setSortByState(newSortByState);
  }

  return (
    <SortByContext.Provider value={{ sortByState, updateSortByState }}>
      {children}
    </SortByContext.Provider>
  );
}
export { SortByContext, SortByProvider };
