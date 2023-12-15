import { Tour } from '../@types/types';
import tour_lake from '/tour-lake.webp';
import tour_town from '/tour-town.webp';
import tour_bridge from '/tour-bridge.webp';

const TOUR_EN: Tour[] = [
  {
    code: 't0',
    image: tour_lake,
    name: 'tour of the lake',
    price: 20,
    description: 'Enjoy the lake',
    duration: '1 hour',
    landmarks: ['urban water park', 'lakeside park'],
  },
  {
    code: 't1',
    image: tour_town,
    name: 'tour of the town',
    price: 13,
    description: 'Enjoy the hustle and bustle of downtown business',
    duration: '45 minutes',
    landmarks: ['pizza shop', 'old town road'],
  },
  {
    code: 't2',
    image: tour_bridge,
    name: 'tour of the bridge',
    price: 18,
    description: 'Cross the famous big bridge with excellent riverside view',
    duration: '2 hours',
    landmarks: ['big bridge', 'cool river', 'blue boat'],
  },
];

const TOUR_ID: Tour[] = [
  {
    code: 't0',
    image: tour_lake,
    name: 'Tur Seputar Danau',
    price: 20,
    description: 'Nikmati indahnya danau',
    duration: '1 jam',
    landmarks: ['Taman Air Urban', 'Taman Pinggir Danau'],
  },
  {
    code: 't1',
    image: tour_town,
    name: 'Tur Seputar Kota',
    price: 13,
    description: 'Nikmati keramaian bisnis di pusat kota',
    duration: '45 menit',
    landmarks: ['Toko Pizza', 'Jalan Kota Tua'],
  },
  {
    code: 't2',
    image: tour_bridge,
    name: 'Tur Seputar Jembatan',
    price: 18,
    description:
      'Lintasi jembatan besar yang terkenal dengan pemandangan sungai yang luar biasa',
    duration: '2 jam',
    landmarks: ['Jembatan Besar', 'Sungai Keren', 'Perahu Biru'],
  },
];

export { TOUR_EN, TOUR_ID };
