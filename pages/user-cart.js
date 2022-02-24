import {useEffect, useState} from 'react';
import {useCart} from 'react-use-cart';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function UserCart({allData}) {
  const {items} = useCart();
  const [clientItems, setClientItems] = useState([]);
  useEffect(() => {
    setClientItems(items);
  }, [items]);
  return (
    <div>
      <CustomHead title="User cart" />
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
          {clientItems.length > 0 &&
            clientItems.map((item) => {
              const {id, type, name, shortName, price, maxSpeed, rangeByMiles, batteryCapacity, netWeight, payload, charginTime, numberOfBatteries, motorPower, powerOutput, maxIncline, shockAbsorption, safety, atmosphereLight, imgPath, imgSmallPath, quantity} = item;
              return (
                <div key={id}>
                  {name} x {item.quantity}
                </div>
              );
            })}
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
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
