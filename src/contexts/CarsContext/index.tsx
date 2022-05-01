import { createContext, useEffect, useState } from 'react';

import { PropsInterface } from '../../interfaces';

const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST || 'localhost';
const PROTOCOL = import.meta.env.VITE_USE_SSL === 'true' ? 'https' : 'http';
const PORT = import.meta.env.VITE_BACKEND_PORT || '3001';
const ENDPOINT = `${PROTOCOL}://${BACKEND_HOST}:${PORT}`;

export const CarsContext = createContext({});

export function CarsProvider({ children }: PropsInterface) {
  const [cars, setCars] = useState([]);

  async function getCars() {
    // TODO: usar axios e BACKEND_URL
    const response = await fetch(`${ENDPOINT}/cars`);
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
