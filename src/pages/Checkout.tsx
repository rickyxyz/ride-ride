import Button from '../components/common/Button';
import OrderSummary from '../components/common/OrderSummary';

function PageCheckout() {
  return (
    <main className="flex justify-center bg-ghost_white pb-40 pt-12">
      <div className="grid max-w-7xl grid-cols-[4fr,1px,3fr] bg-white p-6 shadow-lg">
        <div className="flex flex-col items-start justify-start gap-4 px-10">
          <h4 className="mb-2">Your Details</h4>
          <form action="" className="flex w-full max-w-md flex-col gap-5">
            <div className="flex flex-1 flex-col">
              <span className="flex flex-row justify-between">
                <label htmlFor="date" className="mb-2 font-bold">
                  Full Name
                </label>
                <label htmlFor="date" className="invisible">
                  error
                </label>
              </span>
              <input
                type="text"
                name="date"
                id="date"
                className="border-[1px] border-almost_black px-6 py-2"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="flex flex-row justify-between">
                <label htmlFor="date" className="mb-2 font-bold">
                  Phone Number
                </label>
                <label htmlFor="date" className="invisible">
                  error
                </label>
              </span>
              <input
                type="text"
                name="date"
                id="date"
                className="border-[1px] border-almost_black px-6 py-2"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="flex flex-row justify-between">
                <label htmlFor="date" className="mb-2 font-bold">
                  Email
                </label>
                <label htmlFor="date" className="invisible">
                  error
                </label>
              </span>
              <input
                type="text"
                name="date"
                id="date"
                className="border-[1px] border-almost_black px-6 py-2"
              />
            </div>
            <div className="mt-8 self-end">
              {/* eslint-disable-next-line no-console */}
              <Button text="Confirm Booking" onClick={() => console.log('a')} />
            </div>
          </form>
        </div>
        <div className="bg-almost_black" />
        <OrderSummary showButton={false} />
      </div>
    </main>
  );
}

export default PageCheckout;
