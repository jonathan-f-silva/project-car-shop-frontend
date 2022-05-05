import { useContext } from 'react';

import { CarCard } from '@/components';
import { CarsContext } from '@/contexts';

export function Cars() {
  const { cars } = useContext(CarsContext);
  return (
    <div>
      {cars.map(car => (
        <CarCard key={car.model} {...car} />
      ))}
    </div>
  );
}
