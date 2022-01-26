import DefaultLayout from "@/basic/DefaultLayout";
import DidntFindModal from "@/modals/DidntFindModal";
import {data} from '@/base/data';

export default function Modal1({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="segway index">
        {/* <DidntFindModal forForm={true} /> */}
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