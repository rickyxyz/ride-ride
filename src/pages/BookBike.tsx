import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../components/common/Button';
import bike from '/bike-1.webp';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { CartItem } from '../@types/types';
import { useCartContext } from '../components/useCart';
import useBikes from '../components/useBikes';

const today = new Date();
const todayString = today.toISOString().split('T')[0];
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const formSchema = z
  .object({
    pickupDate: z.coerce
      .date()
      .min(yesterday, { message: 'Please pick a future date' }),
    duration: z.string().min(1, { message: 'Please select rental duration' }),
    pickupLocation: z
      .string()
      .min(1, { message: 'Please select a pickup location' }),
  })
  .required();
type FormData = z.infer<typeof formSchema>;

function PageBookBike() {
  const navigate = useNavigate();
  const { id: bikeID } = useParams();
  const addToCart = useCartContext()[1];
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const bikes = useBikes();

  if (!bikeID) {
    navigate('/404');
  } else {
    const bikeIndex = parseInt(bikeID[1]);
    const onSubmit: SubmitHandler<FormData> = (data) => {
      const newData: CartItem<'bike'> = {
        id: bikeID,
        quantity: 1,
        type: 'bike',
        details: { ...data },
      };

      addToCart(newData);
      navigate('/order');
    };

    return (
      <main className="relative flex justify-center bg-ghost_white pb-48 pt-12">
        <form
          className="grid max-w-7xl grid-cols-1 gap-x-2 gap-y-8 bg-white p-8 lg:grid-cols-[3fr,7fr,1px,3fr]"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex h-full flex-col gap-4 self-center text-center">
            <h4 className="font-bold">The Climb</h4>
            <img src={bike} alt="" />
          </div>
          <div className="justify-content-start flex flex-col justify-start gap-x-4 gap-y-6 px-4">
            <div className="flex flex-col">
              <label htmlFor="pickupDate" className="mb-2 font-bold">
                Date
              </label>
              <input
                type="date"
                className={`rounded-l-full rounded-r-full border-[1px] border-almost_black px-6 py-2 ${
                  errors.pickupDate ? 'border-red-500' : ''
                }`}
                min={todayString}
                {...register('pickupDate')}
              />
              {errors.pickupDate && (
                <label htmlFor="pickupDate" className="text-red-500">
                  {errors.pickupDate.message}
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="duration" className="mb-2 font-bold">
                Duration
              </label>
              <div className="relative after:absolute after:right-0 after:top-1/2 after:h-10 after:w-10 after:-translate-y-[33%] after:content-['▼']">
                <select
                  {...register('duration')}
                  className={`w-full rounded-l-full rounded-r-full border-[1px] border-almost_black px-6 py-2 ${
                    errors.duration ? 'border-red-500' : ''
                  }`}
                >
                  <option value="" disabled selected hidden>
                    Select Duration
                  </option>
                  <option value="3">3 Hours</option>
                  <option value="6">6 Hours</option>
                  <option value="12">12 Hours</option>
                  <option value="24">24 hours</option>
                </select>
              </div>
              {errors.duration && (
                <label htmlFor="duration" className="text-red-500">
                  {errors.duration.message}
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="pickupLocation" className="mb-2 font-bold">
                Pickup Location
              </label>
              <div className="relative after:absolute after:right-0 after:top-1/2 after:h-10 after:w-10 after:-translate-y-[33%] after:content-['▼']">
                <select
                  {...register('pickupLocation')}
                  className={`w-full rounded-l-full rounded-r-full border-[1px] border-almost_black px-6 py-2 ${
                    errors.pickupLocation ? 'border-red-500' : ''
                  }`}
                >
                  <option value="" disabled selected hidden>
                    Select Pickup Location
                  </option>
                  <option value="station">Station</option>
                  <option value="downtown">Downtown</option>
                  <option value="park">Park</option>
                </select>
              </div>
              {errors.pickupLocation && (
                <label htmlFor="pickupLocation" className="text-red-500">
                  {errors.pickupLocation.message}
                </label>
              )}
            </div>
          </div>
          <div className="bg-almost_black" />
          <div className="flex w-full flex-col gap-6 bg-white px-4 lg:w-96">
            <h4>Order Summary</h4>
            <div className="flex flex-col">
              <div className="flex flex-row rounded-md p-1 pr-3">
                <div className="flex flex-1 flex-row gap-2">
                  <p className="capitalize">{bikes[bikeIndex].name}</p>
                  <p>x1</p>
                </div>
                <div className="font-semibold">
                  ${bikes[bikeIndex].price * (parseInt(watch('duration')) || 0)}
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col">
              <div className="flex flex-row rounded-md p-1 pr-3">
                <div className="flex flex-1 flex-row gap-2">
                  <p>Subtotal</p>
                </div>
                <div className="font-semibold">
                  {' '}
                  ${bikes[bikeIndex].price * (parseInt(watch('duration')) || 0)}
                </div>
              </div>
              <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
                <div className="flex flex-1 flex-row gap-2">
                  <p>Deposit</p>
                </div>
                <div className="font-semibold">$10</div>
              </div>
              <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
                <div className="flex flex-1 flex-row gap-2">
                  <p>Tax</p>
                </div>
                <div className="font-semibold">
                  <p>
                    $
                    {Math.round(
                      bikes[bikeIndex].price *
                        (parseInt(watch('duration')) || 0) *
                        0.1
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 rounded-md p-1 pr-3">
              <div className="flex flex-1 flex-row gap-2 font-bold">
                <p>Grand Total</p>
              </div>
              <div className="font-bold">
                $
                {bikes[bikeIndex].price * (parseInt(watch('duration')) || 0) +
                  Math.round(
                    bikes[bikeIndex].price *
                      (parseInt(watch('duration')) || 0) *
                      0.1
                  ) +
                  10}
              </div>
            </div>
            <div className="mt-4 flex flex-row justify-end gap-4">
              <Button type="submit" text="Book Item" className="self-end" />
            </div>
          </div>
        </form>
      </main>
    );
  }
}

export default PageBookBike;
