import DefaultLayout from '@/basic/DefaultLayout';
import {data} from '@/base/data';

export default function UserCart({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="Details page">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="title">Details page</h1>
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
      </DefaultLayout>
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
