import { createContext, useState } from 'react';

const AppContext = createContext();
AppContext.displayName = 'AppContext';

const initialState = {
  cart: [],
  favorites: [],
};

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
