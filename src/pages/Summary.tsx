import { useLocation, useNavigate } from 'react-router-dom';
import OrderSummary from '../components/common/OrderSummary';

function PageSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) {
    navigate('/');
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const { name, email, phone } = location.state.customerDetails;
    const date = new Date();
    const dateString = date.toLocaleString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <main className="flex justify-center bg-ghost_white pb-40 pt-12">
        <div className="w-full max-w-3xl bg-white p-6 shadow-lg">
          <h3 className="text-center">Thank you for your order</h3>
          <hr className="my-8" />
          <div className="mb-16 grid grid-cols-[1fr,4fr] gap-4 px-4">
            <span className="font-semibold">Order Date</span>: {dateString}
            <span className="font-semibold">Name</span>: {name}
            <span className="font-semibold">Email</span>: {email}
            <span className="font-semibold">Phone</span>: {phone}
          </div>
          <OrderSummary type="full" editable={false} />
        </div>
      </main>
    );
  }
}

export default PageSummary;
