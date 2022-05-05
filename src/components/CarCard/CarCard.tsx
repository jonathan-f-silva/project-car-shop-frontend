import { Car } from '@/interfaces';

export function CarCard({ model }: Car) {
  return <div>{model}</div>;
}
