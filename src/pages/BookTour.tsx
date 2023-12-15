import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import OrderSummary from '../components/common/OrderSummary';
import { FaClock, FaDollarSign } from 'react-icons/fa';
import { CartItem } from '../@types/types';
import { useCartContext } from '../components/useCart';
import useTours from '../components/useTours';

function PageBookTour() {
  const tours = useTours();
  const navigate = useNavigate();
  const { id: tourID } = useParams();
  const addToCart = useCartContext()[1];

  if (!tourID) {
    navigate('/404');
  } else {
    const tourIndex = parseInt(tourID[1]);
    const tour = tours[tourIndex];

    const handleBook = () => {
      const newData: CartItem<'tour'> = {
        id: tourID,
        quantity: 1,
        type: 'tour',
        details: {
          tourDate: 'today',
          tourTime: 'now',
        },
      };

      addToCart(newData);
      navigate('/order');
    };

    return (
      <main className="flex justify-center bg-ghost_white pb-40 pt-12">
        <div className="grid max-w-7xl grid-cols-1 gap-y-8 bg-white p-6 shadow-lg lg:grid-cols-[3fr,7fr,1px,3fr]">
          <img src={tour.image} alt="" className="self-center" />
          <div className="flex flex-col items-start justify-start gap-4 px-0  lg:px-10">
            <h2 className="capitalize">{tour.name}</h2>
            <span className="flex flex-row gap-6">
              <div className="flex flex-row items-start gap-1">
                <FaDollarSign />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold leading-none">Price</span>
                  <p>${tour.price}/person</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-1">
                <FaClock />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold leading-none">Duration</span>
                  <p className="capitalize">{tour.duration}</p>
                </div>
              </div>
            </span>
            <span className="font-bold">
              Landmarks
              <ul className="pl-8 font-normal">
                {tour.landmarks.map((landmark) => (
                  <li key={`tour-${landmark}`} className="list-disc capitalize">
                    {landmark}
                  </li>
                ))}
              </ul>
            </span>
            <Button
              text="Add to order"
              onClick={handleBook}
              className="mb-0 mt-auto self-end"
            />
          </div>
          <div className="bg-almost_black" />
          <OrderSummary />
        </div>
      </main>
    );
  }
}

export default PageBookTour;
