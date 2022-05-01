import { createContext, useEffect, useState } from 'react';

import { PropsInterface } from '../../interfaces';

export const CarsContext = createContext({});

export function CarsProvider({ children }: PropsInterface) {
  const [cars, setCars] = useState([]);

  async function getCars() {
    const response = await fetch(`/api/cars`);
    const cars = await response.json();
    setCars(cars);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {children}
    </CarsContext.Provider>
  );
}
