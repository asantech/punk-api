import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import http from 'services/http.service';

const BeveragesContext = createContext();
BeveragesContext.displayName = 'BeveragesContext';

let initialState = {
  list: [],
  query: {
    page: 1,
  },
};

const BeveragesProvider = ({ children }) => {
  const [beverages, setBeverages] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  function loadSelectedBeverages(query) {
    http.get(query, {
      beforeReq: () => {
        setIsLoading(true);
      },
      afterSuccess: res => {
        setIsLoading(false);
        setBeverages({
          list: res,
          query,
        });
        toast.success('beverages are loaded successfully.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
      onError: error => {
        setIsLoading(false);
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
    });
  }

  return (
    <BeveragesContext.Provider
      value={{ beverages, loadSelectedBeverages, isLoading }}
    >
      {children}
    </BeveragesContext.Provider>
  );
};
export { BeveragesContext, BeveragesProvider };
