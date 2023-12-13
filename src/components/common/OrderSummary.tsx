import { ButtonLink } from './Button';
import { CartItem, CartItemBike } from '../../@types/types';
import { BICYCLE } from '../../constants/Bicycles';
import { TOUR } from '../../constants/Tours';
import { useCookies } from 'react-cookie';
import { useMemo } from 'react';

interface OrderSummaryProps {
  type?: 'mini' | 'full';
}

function OrderSummary({ type = 'mini' }: OrderSummaryProps) {
  // const [cookies, setCookie] = useCookies(['cart']);
  const [cookies] = useCookies(['cart']);
  const existingCart: CartItem[] = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    () => (cookies as { cart: CartItem[] }).cart || [],
    [cookies]
  );
  const subTotal = useMemo(() => {
    return existingCart.reduce((sum, item) => {
      if (item.type === 'bike') {
        sum += BICYCLE[parseInt(item.id[1], 10)].price;
      } else {
        sum += TOUR[parseInt(item.id[1], 10)].price;
      }
      return sum;
    }, 0);
  }, [existingCart]);

  const tax = useMemo(() => {
    return Math.round(subTotal * 0.1);
  }, [subTotal]);

  const total = useMemo(() => {
    if (existingCart.some((item) => item.type === 'bike')) {
      return subTotal + tax + 10;
    }
    return subTotal + tax;
  }, [existingCart, subTotal, tax]);

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
      {existingCart.some((item) => item.type === 'bike') && (
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Tax</p>
          </div>
          <div className="font-semibold">${tax}</div>
        </div>
      )}
    </div>
  );

  // function removeItem(index) {
  //   const newCookie = {
  //     ...cookies,
  //     cart: cookies.cart,
  //   };
  //   setCookie('cart');
  // }

  const orderSummaryMini = (
    <div className="flex w-full flex-col gap-6 bg-white px-4 lg:w-96">
      <h4>Order Summary</h4>
      <div className="flex flex-col">
        {existingCart.map((item, index) => {
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
        {existingCart.map((item, index) => {
          if (item.type === 'bike') {
            const bike = BICYCLE[parseInt(item.id[1], 10)];
            return (
              <div
                className="flex flex-row gap-4 rounded-md p-1 pr-3"
                key={`ch-${index}-${item.id}`}
              >
                {/* eslint-disable-next-line no-console */}
                <button onClick={() => console.log('R')}>X</button>
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
      <ButtonLink
        text="Checkout Now"
        className="self-end"
        target={'/checkout'}
      />
    </div>
  );

  return type === 'full' ? orderSummaryFull : orderSummaryMini;
}

export default OrderSummary;
