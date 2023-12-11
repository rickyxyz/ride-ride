import Button, { ButtonLink } from './Button';
import tour from '/tour-city.jpg';
import bike from '/bike-1.webp';

interface OrderSummaryProps {
  type?: 'mini' | 'full';
  showButton?: boolean;
}

function OrderSummary({ type = 'mini', showButton = true }: OrderSummaryProps) {
  const orderSummaryMini = (
    <div className="flex w-full flex-col gap-6 bg-white px-4 lg:w-96">
      <h4>Order Summary</h4>
      <div className="flex flex-col">
        <div className="flex flex-row rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Tour of the lake</p>
            <p>x1</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Tour of the lake</p>
            <p>x1</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <div className="flex flex-row rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Subtotal</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Deposit</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Service fee</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
      </div>
      <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
        <div className="flex flex-1 flex-row gap-2 font-bold">
          <p>Grand Total</p>
        </div>
        <div className="font-bold">$12</div>
      </div>
      {showButton && (
        <Button
          text="Go To Checkout"
          // eslint-disable-next-line no-console
          onClick={() => console.log('a')}
          className="self-end"
        />
      )}
    </div>
  );

  const orderSummaryFull = (
    <div className="flex w-full flex-col gap-6 bg-white px-4 lg:w-full">
      <h4 className="mb-4">Order Summary</h4>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 rounded-md p-1 pr-3">
          <div className="hidden h-20 w-20 items-center overflow-hidden rounded-md border-[1px] border-gray md:flex">
            <img src={bike} alt="" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-row gap-2">
            <p>Tour of the lake</p>
            <p>x1</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
        <div className="flex flex-row gap-4 rounded-md p-1 pr-3">
          <div className="hidden h-20 w-20 items-center overflow-hidden rounded-md border-[1px] border-gray md:flex">
            <img src={tour} alt="" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-row gap-2">
            <p>Tour of the lake</p>
            <p>x1</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <div className="flex flex-row rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Subtotal</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Deposit</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
        <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
          <div className="flex flex-1 flex-row gap-2">
            <p>Service fee</p>
          </div>
          <div className="font-semibold">$12</div>
        </div>
      </div>
      <div className="mb-4 flex flex-row gap-2 rounded-md p-1 pr-3">
        <div className="flex flex-1 flex-row gap-2 font-bold">
          <p>Grand Total</p>
        </div>
        <div className="font-bold">$12</div>
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
