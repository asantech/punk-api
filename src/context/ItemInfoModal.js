import { createContext, useState } from 'react';

const ItemInfoModalContext = createContext();
ItemInfoModalContext.displayName = 'ItemInfoModalContext';

const initialState = {
  modalDisplay: false,
  currentItem: {},
};

const ItemInfoModalProvider = ({ children }) => {
  const [itemInfoModalState, setItemInfoModalState] = useState(initialState);

  return (
    <ItemInfoModalContext.Provider
      value={{
        itemInfoModalState,
        setItemInfoModalState,
      }}
    >
      {children}
    </ItemInfoModalContext.Provider>
  );
};
export { ItemInfoModalContext, ItemInfoModalProvider };
