import { ComponentProps } from 'react';
import { ButtonLink } from './Button';

interface CardBikeProps {
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  size: 'mini' | 'full';
  className?: ComponentProps<'div'>['className'];
}

function CardBike({
  code,
  name,
  description,
  image,
  price,
  size = 'full',
  className,
}: CardBikeProps) {
  const cardFull = (
    <div
      className={`w-full max-w-md rounded-sm border border-almost_black bg-white p-4 ${className}`}
    >
      <img src={image} alt={name} className="mb-2 h-auto w-full" />
      <div className="flex flex-col gap-1">
        <span className="flex flex-row items-center justify-between">
          <h2>{name}</h2>
          <span className="font-semibold text-orange">{`$${price}/day`}</span>
        </span>
        <p>{description}</p>
        <span className="mt-6 flex flex-row gap-2">
          <ButtonLink
            text="Learn More"
            style="secondary"
            target={`bike/${code}`}
            className="flex-1"
          />
          <ButtonLink
            text="Book Now"
            style="primary"
            target={`bike/${code}`}
            className="flex-1"
          />
        </span>
      </div>
    </div>
  );

  const cardMini = (
    <div
      className={`w-4/5 rounded-sm border border-almost_black bg-white p-4 ${className}`}
    >
      <img src={image} alt={name} className="mb-2 h-auto w-full" />
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
