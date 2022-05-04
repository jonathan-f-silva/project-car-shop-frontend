import { VehicleList } from '@/components';
import { CarsProvider } from '@/contexts';

export function CarList() {
  return (
    <CarsProvider>
      <VehicleList />
    </CarsProvider>
  );
}
