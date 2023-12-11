import { ComponentProps } from 'react';
import { ButtonLink } from './common/Button';
import { FaClock } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { Tour } from '../@types/types';

interface CardTourProps {
  tour: Tour;
  className?: ComponentProps<'div'>['className'];
}

function CardTour({ tour, className }: CardTourProps) {
  const { code, name, image, price, duration, landmarks } = tour;
  return (
    <div
      className={`w-full max-w-lg rounded-sm border border-almost_black bg-white ${className}`}
    >
      <div className="flex h-80 w-full items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <h2>{name}</h2>
      <div className="flex flex-col gap-3 p-6">
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
        <span>Landmarks:</span>
        <ul className="pl-8">
          {landmarks.map((landmark) => (
            <li key={`tour-${landmark}`} className="list-disc">
              {landmark}
            </li>
          ))}
        </ul>
        <ButtonLink
          text="Book Now"
          style="primary"
          target={`tour/${code}`}
          className="mt-6 flex-1 self-end"
        />
      </div>
    </div>
  );
}

export default CardTour;
