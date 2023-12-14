import { ButtonLink } from './Button';
import { CartItem, CartItemBike } from '../../@types/types';
import { BICYCLE_EN as BICYCLE } from '../../constants/Bicycles';
import { TOUR } from '../../constants/Tours';
import { useMemo } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { useCartContext } from '../useCart';

interface OrderSummaryProps {
  type?: 'mini' | 'full';
  editable?: boolean;
}

function OrderSummary({ type = 'mini', editable = true }: OrderSummaryProps) {
  const cart = useCartContext()[0];
  const isEmpty = cart.length < 1;
  const removeItemFromCart = useCartContext()[2];
  const subTotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      if (item.type === 'bike') {
        const duration = parseInt(
          (item as CartItem<'bike'>).details.duration,
          10
        );
        sum += BICYCLE[parseInt(item.id[1], 10)].price * duration;
      } else {
        sum += TOUR[parseInt(item.id[1], 10)].price;
      }
      return sum;
    }, 0);
  }, [cart]);

  const tax = useMemo(() => {
    return Math.round(subTotal * 0.1);
  }, [subTotal]);

  const total = useMemo(() => {
    if (cart.some((item) => item.type === 'bike')) {
      return subTotal + tax + 10;
    }
    return subTotal + tax;
  }, [cart, subTotal, tax]);

  const orderSummaryBottom = (
    <div className="flex flex-col">
      <div className="flex flex-row rounded-md p-1 pr-3">
        <div className="flex flex-1 flex-row gap-2">
          <p>Subtotal</p>
        </div>
        <div className="font-semibold">${subTotal}</div>
      </div>
      <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
        <div className="flex flex-1 flex-row gap-2">
          <p>Deposit</p>
        </div>
        <div className="font-semibold">$10</div>
      </div>
      {cart.some((item) => item.type === 'bike') && (
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Tax</p>
          </div>
          <div className="font-semibold">${tax}</div>
        </div>
      )}
    </div>
  );

  const orderSummaryEmpty = (
    <div className="flex w-full flex-col items-center gap-6 bg-white px-4 lg:w-full">
      <h4>
        Looks like your <br />
        order is empty
      </h4>
      <span className="flex flex-row gap-4">
        <ButtonLink text={'Book a bike'} target={'/bike'} />
        <ButtonLink text={'Book a tour'} target={'/tour'} />
      </span>
    </div>
  );

  function removeItem(index: number) {
    removeItemFromCart(index);
  }

  const orderSummaryMini = (
    <div className="flex w-full flex-col gap-6 bg-white px-4 lg:w-96">
      <h4>Order Summary</h4>
      <div className="flex flex-col">
        {cart.map((item, index) => {
          if (item.type === 'bike') {
            const bike = BICYCLE[parseInt(item.id[1], 10)];
            return (
              <div key={index} className="flex flex-row rounded-md p-1 pr-3">
                <div className="flex flex-1 flex-row gap-2">
                  <p className="capitalize">{bike.name}</p>
                  <p>x{item.quantity}</p>
                </div>
                <div className="font-semibold">${bike.price}</div>
              </div>
            );
          } else {
            const tour = TOUR[parseInt(item.id[1], 10)];
            return (
              <div key={index} className="flex flex-row rounded-md p-1 pr-3">
                <div className="flex flex-1 flex-row gap-2">
                  <p className="capitalize">{tour.name}</p>
                  <p>x{item.quantity}</p>
                </div>
                <div className="font-semibold">${tour.price}</div>
              </div>
            );
          }
        })}
      </div>
      <hr />
      {orderSummaryBottom}
      <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
        <div className="flex flex-1 flex-row gap-2 font-bold">
          <p>Grand Total</p>
        </div>
        <div className="font-bold">$12</div>
      </div>
    </div>
  );

  const orderSummaryFull = (
    <div className="flex w-full flex-col gap-6 bg-white px-4 lg:w-full">
      <h4 className="mb-4">Order Summary</h4>
      <div className="flex flex-col">
        {cart.map((item, index) => {
          if (item.type === 'bike') {
            const bike = BICYCLE[parseInt(item.id[1], 10)];
            return (
              <div
                className="flex flex-row gap-4 rounded-md p-1 pr-3"
                key={`ch-${index}-${item.id}`}
              >
                {editable && (
                  <button
                    onClick={() => removeItem(index)}
                    className="hover:text-red-500"
                  >
                    <IoIosCloseCircle size={24} />
                  </button>
                )}
                <div className="hidden h-20 w-20 items-center overflow-hidden rounded-md border-[1px] border-gray md:flex">
                  <img src={bike.image} alt="" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-row gap-2">
                  <p>{bike.name}</p>
                  <p>x{item.quantity}</p>
                </div>
                <div className="font-semibold">
                  $
                  {bike.price *
                    parseInt((item.details as CartItemBike).duration, 10)}
                </div>
              </div>
            );
          } else {
            const tour = TOUR[parseInt(item.id[1], 10)];
            return (
              <div
                className="flex flex-row gap-4 rounded-md p-1 pr-3"
                key={`ch-${index}-${item.id}`}
              >
                {editable && (
                  <button
                    onClick={() => removeItem(index)}
                    className="hover:text-red-500"
                  >
                    <IoIosCloseCircle size={24} />
                  </button>
                )}
                <div className="hidden h-20 w-20 items-center overflow-hidden rounded-md border-[1px] border-gray md:flex">
                  <img src={tour.image} alt="" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-row gap-2">
                  <p>{tour.name}</p>
                  <p>x{item.quantity}</p>
                </div>
                <div className="font-semibold">${tour.price}</div>
              </div>
            );
          }
        })}
      </div>
      <hr />
      {orderSummaryBottom}
      <div className="mb-4 flex flex-row gap-2 rounded-md p-1 pr-3">
        <div className="flex flex-1 flex-row gap-2 font-bold">
          <p>Grand Total</p>
        </div>
        <div className="font-bold">${total}</div>
      </div>
      <ButtonLink text="Checkout" className="self-end" target={'/checkout'} />
    </div>
  );

  return type === 'full'
    ? isEmpty
      ? orderSummaryEmpty
      : orderSummaryFull
    : orderSummaryMini;
}

export default OrderSummary;
