import { data } from '@/base/data';

import CustomHead from '@/basic/CustomHead';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearProducts } from 'store/slices/productCartSlice';

// TODO: Добавить модальное окно
export default function PaymentSuccessPage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearProducts())
  }, [dispatch])

  return (
    <>
      <CustomHead title="Payment success page" />
      <div className="payment-info">
        <div className="payment-info__shipping-address">
          <h1>Success</h1>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      accessoeries: data.accessoeries
    }
  };
}