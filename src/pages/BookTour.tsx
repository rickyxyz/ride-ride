import Button from '../components/common/Button';
import OrderSummary from '../components/common/OrderSummary';
import tour from '/tour-town.webp';
import { FaClock, FaDollarSign } from 'react-icons/fa';

const landmarks = ['a', 'b', 'c'];

function PageBookTour() {
  return (
    <main className="flex justify-center bg-ghost_white pb-40 pt-12">
      <div className="grid max-w-7xl grid-cols-[3fr,7fr,1px,3fr] bg-white p-6 shadow-lg">
        <img src={tour} alt="" className="self-center" />
        <div className="flex flex-col items-start justify-start gap-4 px-10">
          <h2>Tour of the city</h2>
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
                <p>2 hours</p>
              </div>
            </div>
          </span>
          <span className="font-bold">
            Landmarks
            <ul className="pl-8 font-normal">
              {landmarks.map((landmark) => (
                <li key={`tour-${landmark}`} className="list-disc">
                  {landmark}
                </li>
              ))}
            </ul>
          </span>
          <Button
            text="Add to order"
            // eslint-disable-next-line no-console
            onClick={() => console.log('a')}
            className="mb-0 mt-auto self-end"
          />
        </div>
        <div className="bg-almost_black" />
        <OrderSummary />
      </div>
    </main>
  );
}

export default PageBookTour;
