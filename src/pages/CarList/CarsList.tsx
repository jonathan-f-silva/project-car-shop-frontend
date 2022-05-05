import { useContext } from 'react';

import { CarCard } from '@/components';
import { CarsContext } from '@/contexts';

export function CarList() {
  const { cars } = useContext(CarsContext);
  return cars.map(car => <CarCard key={car.model} {...car} />);
}
