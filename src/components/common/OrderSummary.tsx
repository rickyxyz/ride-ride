import Button from './Button';

function OrderSummary() {
  return (
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
      <Button
        text="Go To Checkout"
        // eslint-disable-next-line no-console
        onClick={() => console.log('a')}
        className="self-end"
      />
    </div>
  );
}

export default OrderSummary;
