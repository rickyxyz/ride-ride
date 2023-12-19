import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Tour, I18nLang } from '../@types/types';
import { getTour, getTours } from './useFirebase';

export const useTours = () => {
  const { i18n } = useTranslation('common');
  const [tours, setTours] = useState<Tour[]>([]);

  const fetchData = useCallback(async () => {
    return getTours(i18n.language as I18nLang)
      .then((data) => {
        setTours(data);
      })
      .catch((e) => {
        throw e;
      });
  }, [i18n.language]);

  useEffect(() => {
    fetchData().catch((e) => {
      throw e;
    });
  }, [fetchData]);

  return tours;
};

export const useTour = (id: string) => {
  const { i18n } = useTranslation('common');
  const [tour, setTour] = useState<Tour | null>();

  const fetchData = useCallback(async () => {
    return getTour(i18n.language as I18nLang, id)
      .then((data) => {
        setTour(data);
      })
      .catch((e) => {
        throw e;
      });
  }, [i18n.language, id]);

  useEffect(() => {
    fetchData().catch((e) => {
      throw e;
    });
  }, [fetchData]);

  return tour;
};
