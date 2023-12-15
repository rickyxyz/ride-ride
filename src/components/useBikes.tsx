import { useTranslation } from 'react-i18next';
import { BICYCLE_ID, BICYCLE_EN } from '../constants/Bicycles';
import { useMemo } from 'react';

const useBikes = () => {
  const { i18n } = useTranslation('common');
  const bikes = useMemo(
    () => (i18n.language === 'id' ? BICYCLE_ID : BICYCLE_EN),
    [i18n.language]
  );

  return bikes;
};

export default useBikes;
