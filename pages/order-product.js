import {data} from '@/base/data-test';
import CustomHead from '@/basic/CustomHead';

export default function OrderProduct({allData}) {
  return (
    <div>
      <CustomHead />
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
