import { Bicycle } from '../@types/types';
import bike_1 from '/bike-1.webp';
import bike_2 from '/bike-2.webp';
import bike_3 from '/bike-3.webp';

const BICYCLE: Bicycle[] = [
  {
    code: 'b1',
    name: 'mountain bike',
    image: bike_1,
    description:
      'Features classic hardtrail design and the balanced riding characteristics.',
    price: 12,
  },
  {
    code: 'b2',
    name: 'street bike',
    image: bike_2,
    description:
      'Light and lively on the climbs and supremely confident on the descents.',
    price: 15,
  },
  {
    code: 'b3',
    name: 'electric bike',
    image: bike_3,
    description: 'Smooth power delivery, Balanced confident handling.',
    price: 12,
  },
];

export { BICYCLE };
