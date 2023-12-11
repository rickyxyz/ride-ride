import { Tour } from '../@types/types';
import tour_lake from '/tour-lake.webp';
import tour_town from '/tour-town.webp';
import tour_bridge from '/tour-bridge.webp';

const TOUR: Tour[] = [
  {
    code: 't1',
    image: tour_lake,
    name: 'tour of the lake',
    price: 20,
    description: 'Enjoy the lake',
    duration: '1 hour',
    landmarks: ['urban water park', 'lakeside park'],
  },
  {
    code: 't2',
    image: tour_town,
    name: 'tour of the town',
    price: 13,
    description: 'Enjoy the hustle and bustle of downtown business',
    duration: '45 minutes',
    landmarks: ['pizza shop', 'old town road'],
  },
  {
    code: 't3',
    image: tour_bridge,
    name: 'tour of the bridge',
    price: 18,
    description: 'Cross the famous big bridge with excellent riverside view',
    duration: '2 hours',
    landmarks: ['big bridge', 'cool river', 'blue boat'],
  },
];

export { TOUR };
