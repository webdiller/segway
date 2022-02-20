import ModelLayout from "@/layouts/ModelLayout";
import DidntFindModal from "@/modals/DidntFindModal";
import {data} from '@/base/data';

export default function Modal1({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="segway index">
        {/* <DidntFindModal forForm={true} /> */}
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