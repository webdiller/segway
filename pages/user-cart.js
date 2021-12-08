import {useEffect} from 'react';
import DefaultLayout from '@/basic/DefaultLayout';
import {useCart} from 'react-use-cart';

export default function Home() {
  const {items} = useCart();
  return (
    <div>
      <DefaultLayout description="segway description" title="User cart">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="title">User cart Page</h1>
        </div>
        <br />
        <br />
        <div className="container">
          <pre className="break-json">{JSON.stringify(items, 4)}</pre>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </DefaultLayout>
    </div>
  );
}
