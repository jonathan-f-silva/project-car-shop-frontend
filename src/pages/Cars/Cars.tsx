import { useContext } from 'react';

import { CarCard } from '@/components';
import { CarsContext } from '@/contexts';
import { TEST_IDS } from '@/docs/testIds';

export function Cars() {
  const { cars } = useContext(CarsContext);
  return (
    <div data-testid={TEST_IDS.cars.list.list}>
      {cars.map(car => (
        <CarCard key={car.model} {...car} />
      ))}
    </div>
  );
}
