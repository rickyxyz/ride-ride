import { useParams } from 'react-router-dom';
import OrderSummary from '../components/common/OrderSummary';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { getOrder } from '../components/useFirebase';
import { CartItem } from '../@types/types';
import { Timestamp } from 'firebase/firestore';

interface OrderData {
  email: string;
  item: CartItem[];
  order_date: Timestamp;
  phone: string;
  name: string;
}

function PageSummary() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const { id: summaryID } = useParams();

  const fetchData = useCallback(async () => {
    if (!summaryID) return;

    return getOrder(summaryID)
      .then((data) => {
        setOrderData(data as OrderData);
        return data;
      })
      .catch((e) => {
        throw e;
      });
  }, [summaryID]);

  useEffect(() => {
    fetchData().catch((e) => {
      throw e;
    });
  }, [fetchData]);

  return (
    <main className="flex justify-center bg-ghost_white pb-40 pt-12">
      <Suspense fallback={'Loading...'}>
        <div className="w-full max-w-3xl bg-white p-6 shadow-lg">
          <h3 className="text-center">Thank you for your order</h3>
          <hr className="my-8" />
          <div className="mb-16 grid grid-cols-[1fr,4fr] gap-4 px-4">
            <span className="font-semibold">Order Date</span>:{' '}
            {orderData?.order_date.toDate().toLocaleString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <span className="font-semibold">Name</span>: {orderData?.name}
            <span className="font-semibold">Email</span>: {orderData?.email}
            <span className="font-semibold">Phone</span>: {orderData?.phone}
          </div>
          {orderData && (
            <OrderSummary type="full" editable={false} data={orderData.item} />
          )}
        </div>
      </Suspense>
    </main>
  );
}

export default PageSummary;
