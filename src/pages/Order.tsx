import OrderSummary from '../components/common/OrderSummary';

function PageOrder() {
  return (
    <main className="flex justify-center bg-ghost_white pb-40 pt-12">
      <div className="w-11/12 max-w-7xl bg-white p-6 shadow-lg">
        <OrderSummary type="full" />
      </div>
    </main>
  );
}

export default PageOrder;
