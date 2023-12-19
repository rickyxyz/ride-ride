import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Bicycle, I18nLang } from '../@types/types';
import { getBike, getBikes } from './useFirebase';

export const useBikes = () => {
  const { i18n } = useTranslation('common');
  const [bikes, setBikes] = useState<Bicycle[]>([]);

  const fetchData = useCallback(async () => {
    return getBikes(i18n.language as I18nLang)
      .then((data) => {
        setBikes(data);
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

  return bikes;
};

export const useBike = (id: string) => {
  const { i18n } = useTranslation('common');
  const [bike, setBike] = useState<Bicycle | null>();

  const fetchData = useCallback(async () => {
    return getBike(i18n.language as I18nLang, id)
      .then((data) => {
        setBike(data);
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

  return bike;
};
