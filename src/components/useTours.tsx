import { useTranslation } from 'react-i18next';
import { TOUR_ID, TOUR_EN } from '../constants/Tours';
import { useMemo } from 'react';

const useTours = () => {
  const { i18n } = useTranslation('common');
  const tours = useMemo(
    () => (i18n.language === 'id' ? TOUR_ID : TOUR_EN),
    [i18n.language]
  );

  return tours;
};

export default useTours;
