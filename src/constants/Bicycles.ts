import { Bicycle } from '../@types/types';
import bike_1 from '/bike-1.webp';
import bike_2 from '/bike-2.webp';
import bike_3 from '/bike-3.webp';

const BICYCLE_EN: Bicycle[] = [
  {
    code: 'b0',
    name: 'mountain bike',
    image: bike_1,
    description:
      'Features classic hardtrail design and the balanced riding characteristics.',
    price: 12,
  },
  {
    code: 'b1',
    name: 'street bike',
    image: bike_2,
    description:
      'Light and lively on the climbs and supremely confident on the descents.',
    price: 15,
  },
  {
    code: 'b2',
    name: 'electric bike',
    image: bike_3,
    description: 'Smooth power delivery, Balanced confident handling.',
    price: 12,
  },
];

const BICYCLE_ID: Bicycle[] = [
  {
    code: 'b0',
    name: 'Sepeda Gunung',
    image: bike_1,
    description:
      'Fitur desain hardtail klasik dan karakteristik berkendara yang seimbang.',
    price: 12,
  },
  {
    code: 'b1',
    name: 'Sepeda Balap',
    image: bike_2,
    description:
      'Ringan dan lincah saat mendaki dan sangat percaya diri saat menuruni.',
    price: 15,
  },
  {
    code: 'b2',
    name: 'Sepeda Listrik',
    image: bike_3,
    description:
      'Pengiriman daya yang halus, penanganan seimbang dan percaya diri.',
    price: 12,
  },
];

export { BICYCLE_EN, BICYCLE_ID };
