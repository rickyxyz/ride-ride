import { ComponentProps } from 'react';
import { ButtonLink } from './common/Button';
import { FaClock, FaDollarSign } from 'react-icons/fa';

interface CardTourProps {
  code: string;
  name: string;
  duration: string;
  image: string;
  price: number;
  start: string;
  landmarks: string[];
  className?: ComponentProps<'div'>['className'];
}

function CardTour({
  code,
  name,
  image,
  price,
  duration,
  landmarks,
  className,
}: CardTourProps) {
  return (
    <div
      className={`w-full max-w-lg rounded-sm border border-almost_black bg-white ${className}`}
    >
      <div className="flex h-80 w-full items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <span className="flex flex-row items-center justify-between">
          <h2>{name}</h2>
          <span className="font-semibold text-orange">{`$${price}`}</span>
        </span>
        <span className="flex flex-row gap-6">
          <div className="flex flex-row items-start gap-1">
            <FaDollarSign />
            <div className="flex flex-col gap-1">
              <span className="font-semibold leading-none">Price</span>
              <p>$5/person</p>
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
