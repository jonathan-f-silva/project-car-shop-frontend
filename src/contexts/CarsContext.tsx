import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import { Car, PropsInterface } from '@/interfaces';

interface ICarsContext {
  cars: Car[];
}

export const CarsContext = createContext<ICarsContext>({ cars: [] });

export function CarsProvider({ children }: PropsInterface) {
  const [cars, setCars] = useState([]);

  async function getCars() {
    const response = await axios.get('/api/cars');
    setCars(response.data);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <CarsContext.Provider value={{ cars }}>{children}</CarsContext.Provider>
  );
}
