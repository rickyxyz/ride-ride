import Button from '../components/common/Button';
import OrderSummary from '../components/common/OrderSummary';
import bike from '/bike-1.png';

function PageBookBike() {
  return (
    <main className="flex grid-cols-1 justify-center bg-ghost_white pt-12 lg:grid-cols-[7fr,3fr]">
      <div className="grid max-w-7xl grid-cols-[3fr,7fr,1px,3fr] gap-x-2 bg-white p-8">
        <div className="flex h-full flex-col gap-4 self-center text-center">
          <h4 className="font-bold">The Climb</h4>
          <img src={bike} alt="" />
        </div>
        <form className="grid grid-cols-2 gap-x-4 gap-y-2 px-4">
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2 font-bold">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="rounded-l-full rounded-r-full border-[1px] border-almost_black px-6 py-2"
            />
            <label htmlFor="date" className="invisible">
              error
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2 font-bold">
              Duration
            </label>
            <div className="relative after:absolute after:right-0 after:top-1/2 after:h-10 after:w-10 after:-translate-y-[33%] after:content-['▼']">
              <select
                name="date"
                id="date"
                className="w-full rounded-l-full rounded-r-full border-[1px] border-almost_black px-6 py-2"
              >
                <option value="1">6 Hours</option>
                <option value="1">12 Hours</option>
                <option value="1">24 hours</option>
                <option value="1">2 days</option>
                <option value="1">3 days</option>
              </select>
            </div>
            <label htmlFor="date" className="invisible">
              error
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2 font-bold">
              Pickup Location
            </label>
            <div className="relative after:absolute after:right-0 after:top-1/2 after:h-10 after:w-10 after:-translate-y-[33%] after:content-['▼']">
              <select
                name="date"
                id="date"
                className="w-full rounded-l-full rounded-r-full border-[1px] border-almost_black px-6 py-2"
              >
                <option value="1">Here</option>
                <option value="1">There</option>
                <option value="1">Where</option>
              </select>
            </div>
            <label htmlFor="date" className="invisible">
              error
            </label>
          </div>
          <div className="row-span-2">Map</div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="date" className="col-span-2 mb-2 font-bold">
              Accessories
            </label>
            <div>
              <input
                type="checkbox"
                name="date"
                id="date"
                className="rounded-lg border-[1px] border-almost_black px-6 py-3"
              />
              <label htmlFor="">Helmet</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="date"
                id="date"
                className="rounded-lg border-[1px] border-almost_black px-6 py-3"
              />
              <label htmlFor="">Seat pads</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="date"
                id="date"
                className="rounded-lg border-[1px] border-almost_black px-6 py-3"
              />
              <label htmlFor="">Basket</label>
            </div>
          </div>
          <div></div>
          <div className="justify-self-end">
            {/* eslint-disable-next-line no-console */}
            <Button text="Add to order" onClick={() => console.log('a')} />
          </div>
        </form>
        <div className="bg-almost_black" />
        <OrderSummary />
      </div>
    </main>
  );
}

export default PageBookBike;
