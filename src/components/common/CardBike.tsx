import { ComponentProps } from 'react';
import { ButtonLink } from './Button';
import { Bicycle } from '../../@types/types';

interface CardBikeProps {
  bike: Bicycle;
  size: 'mini' | 'full';
  className?: ComponentProps<'div'>['className'];
}

function CardBike({ bike, size = 'full', className }: CardBikeProps) {
  const { code, name, description, image, price } = bike;

  const cardFull = (
    <div
      className={`w-full max-w-md rounded-sm border border-almost_black bg-white p-4 ${className}`}
    >
      <img src={image} alt={name} className="mb-2 h-auto w-full" />
      <div className="flex flex-col gap-3">
        <h2 className="capitalize">{name}</h2>
        <p className="font-bold">${price}/day</p>
        <p>{description}</p>
        <span className="mt-6 flex flex-col justify-end gap-2 sm:flex-row">
          <ButtonLink text="Book Now" style="primary" target={`bike/${code}`} />
        </span>
      </div>
    </div>
  );

  const cardMini = (
    <div
      className={`w-4/5 rounded-sm border border-almost_black bg-white p-4 ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="mb-2 h-[100px] w-full object-contain md:h-[400px]"
      />
      <div className="flex flex-col gap-1">
        <span className="flex flex-row items-center justify-center">
          <a href={`bike/${code}`} className="text-orange underline">
            <p>{name}</p>
          </a>
        </span>
      </div>
    </div>
  );

  return size === 'full' ? cardFull : cardMini;
}

export default CardBike;
