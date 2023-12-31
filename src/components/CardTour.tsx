import { ComponentProps } from 'react';
import { ButtonLink } from './common/Button';
import { FaClock } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { Tour } from '../@types/types';
import { useTranslation } from 'react-i18next';

interface CardTourProps {
  tour: Tour;
  className?: ComponentProps<'div'>['className'];
}

function CardTour({ tour, className }: CardTourProps) {
  const { code, name, image, price, duration, landmarks } = tour;
  const [t] = useTranslation('common');

  return (
    <div
      className={`flex w-full max-w-lg flex-col rounded-sm border border-almost_black bg-white ${className}`}
    >
      <div className="flex h-80 w-full items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-4">
        <h2 className="capitalize">{name}</h2>
        <span className="flex flex-row gap-6">
          <div className="flex flex-row items-start gap-1">
            <RiMoneyDollarCircleFill />
            <div className="flex flex-col gap-1">
              <span className="font-semibold leading-none">Price</span>
              <p>${price}/person</p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-1">
            <FaClock />
            <div className="flex flex-col gap-1">
              <span className="font-semibold leading-none">Duration</span>
              <p>{duration}</p>
            </div>
          </div>
        </span>
        <div className="flex-1">
          <span>Landmarks:</span>
          <ul className="pl-8">
            {landmarks.map((landmark) => (
              <li key={`tour-${landmark}`} className="list-disc capitalize">
                {landmark}
              </li>
            ))}
          </ul>
        </div>
        <ButtonLink
          text={t('book now')}
          style="primary"
          target={`/tour/${code}`}
          className="self-end"
        />
      </div>
    </div>
  );
}

export default CardTour;
