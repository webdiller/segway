import ModelLayout from '@/layouts/ModelLayout';
import {data} from '@/base/data';

export default function UserCart({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="Details page">
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
