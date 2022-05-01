import { createContext, useState } from 'react';

import { PropsInterface } from '../interfaces';

export const CarsContext = createContext({});

export const CarsProvider = ({ children }: PropsInterface) => {
  const [cars, setCars] = useState([]);

  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {children}
    </CarsContext.Provider>
  );
};
