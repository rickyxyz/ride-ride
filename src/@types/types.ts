import { resources } from '../i18n';

export type I18nLang = keyof typeof resources;
export type I18nKey = keyof (typeof resources)['en']['common'];

export const languagesKey: I18nLang[] = ['en', 'id'];
export const languagesFlag: Record<I18nLang, string> = {
  en: 'us',
  id: 'id',
};

export interface Link {
  name: string;
  i18nKey: I18nKey;
  href: string;
}

export interface Bicycle {
  code: string;
  name: string;
  image: string;
  description?: string;
  price: number;
}

export interface Tour {
  code: string;
  name: string;
  image: string;
  description?: string;
  price: number;
  duration: string;
  landmarks: string[];
}

export interface CartItemBike {
  pickupDate: Date;
  duration: string;
  pickupLocation: string;
}

export interface CartItemTour {
  tourDate: string;
  tourTime: string;
}

interface CartItemDetailMap {
  bike: CartItemBike;
  tour: CartItemTour;
}

export interface CartItem<
  T extends keyof CartItemDetailMap = keyof CartItemDetailMap,
> {
  id: string;
  quantity: number;
  type: T;
  details: CartItemDetailMap[T];
}
