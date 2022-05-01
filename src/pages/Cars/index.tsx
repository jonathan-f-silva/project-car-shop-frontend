import { CarList } from '@/components';
import { CarsProvider } from '@/contexts';

export function Cars() {
  return (
    <CarsProvider>
      <CarList />
    </CarsProvider>
  );
}
