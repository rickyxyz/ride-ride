import { Bicycle } from '../@types/types';
import bike_1 from '/bike-1.webp';
import bike_2 from '/bike-2.webp';
import bike_3 from '/bike-3.webp';

const BICYCLE: Bicycle[] = [
  {
    code: 'b1',
    name: 'mountain bike',
    image: bike_1,
    description: 'a',
    price: 12,
  },
  {
    code: 'b2',
    name: 'street bike',
    image: bike_2,
    description: 'a',
    price: 15,
  },
  {
    code: 'b3',
    name: 'electric bike',
    image: bike_3,
    description: 'a',
    price: 12,
  },
];

export { BICYCLE };
