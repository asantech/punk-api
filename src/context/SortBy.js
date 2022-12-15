import { createContext, useState } from 'react';

const SortByContext = createContext();
SortByContext.displayName = 'SortByContext';

const SortByProvider = ({ children }) => {
  let initialState = {
    by: 'name',
    order: 'asc',
  };

  const [state, setState] = useState(initialState);

  function sortItems(selectedSortBy) {
    const { by, order } = state;

    const newState = { ...state };
    // const selectedBeverages = newState.beverages[id];

    if (by === selectedSortBy) {
      newState.order = order === 'asc' ? 'desc' : 'asc';
    } else {
      newState.by = selectedSortBy;
      newState.order = 'asc';
    }
    // selectedBeverages.list = orderBy(
    //   selectedBeverages.list,
    //   [selectedBeverages.sort.by],
    //   [selectedBeverages.sort.order]
    // );
    setState(newState);
  }

  <SortByContext.Provider value={{ state, sortItems }}>
    {children}
  </SortByContext.Provider>;
};
export { SortByContext, SortByProvider };
