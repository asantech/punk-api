import React from 'react';

const BeveragesContext = React.createContext();
BeveragesContext.displayName = 'BeveragesContext';

const BeveragesProvider = ({ children }) => (
  <BeveragesContext.Provider>{children}</BeveragesContext.Provider>
);
export { BeveragesContext, BeveragesProvider };
