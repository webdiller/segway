import ModelLayout from '@/layouts/ModelLayout';
import {data} from '@/base/data';

export default function OrderProduct({allData}) {

  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="Order Product">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="title">Order Product Page</h1>
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
        <br />
        <br />
      </ModelLayout>
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