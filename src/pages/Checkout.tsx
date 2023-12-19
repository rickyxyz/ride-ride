import { z } from 'zod';
import Button from '../components/common/Button';
import OrderSummary from '../components/common/OrderSummary';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../components/useCart';
import { insertOrder } from '../components/useFirebase';

const formSchema = z
  .object({
    name: z.string().min(3, { message: 'Please enter your full name' }),
    phone: z.string().min(1, { message: 'Please enter your phone number' }),
    email: z.string().min(1, { message: 'Please enter your email address' }),
  })
  .required();
type FormData = z.infer<typeof formSchema>;

function PageCheckout() {
  const clearCart = useCartContext()[3];
  const cart = useCartContext()[0];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const hash = await insertOrder(data, cart);
    navigate(`/summary/${hash as string}`);
    clearCart();
  };

  return (
    <main className="flex justify-center bg-ghost_white pb-40 pt-12">
      <div className="grid max-w-7xl grid-cols-[4fr,1px,3fr] bg-white p-6 shadow-lg">
        <div className="flex flex-col items-start justify-start gap-4 px-10">
          <h4 className="mb-2">Your Details</h4>
          <form
            className="flex w-full max-w-md flex-col gap-5"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-1 flex-col">
              <span className="flex flex-row justify-between">
                <label htmlFor="name" className="mb-2 font-bold">
                  Full Name
                </label>
                {errors.name && (
                  <label htmlFor="name" className="text-red-500">
                    {errors.name.message}
                  </label>
                )}
              </span>
              <input
                type="text"
                id="name"
                className={`border-[1px] border-almost_black px-6 py-2 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                {...register('name')}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="flex flex-row justify-between">
                <label htmlFor="phone" className="mb-2 font-bold">
                  Phone Number
                </label>
                {errors.phone && (
                  <label htmlFor="phone" className="text-red-500">
                    {errors.phone.message}
                  </label>
                )}
              </span>
              <input
                type="text"
                id="phone"
                className={`border-[1px] border-almost_black px-6 py-2 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                {...register('phone')}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="flex flex-row justify-between">
                <label htmlFor="email" className="mb-2 font-bold">
                  Email
                </label>
                {errors.email && (
                  <label htmlFor="email" className="text-red-500">
                    {errors.email.message}
                  </label>
                )}
              </span>
              <input
                type="text"
                id="email"
                className={`border-[1px] border-almost_black px-6 py-2 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                {...register('email')}
              />
            </div>
            <div className="mt-8 self-end">
              <Button text="Checkout" type="submit" />
            </div>
          </form>
        </div>
        <div className="bg-almost_black" />
        <OrderSummary />
      </div>
    </main>
  );
}

export default PageCheckout;
