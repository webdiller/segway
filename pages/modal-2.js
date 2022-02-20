import ModelLayout from "@/layouts/ModelLayout";
import DidntFindModal from "@/modals/DidntFindModal";
import {data} from '@/base/data';

export default function Modal2({allData}) {
  return (
    <div>
      <ModelLayout items={allData} description="segway description" title="segway index">
        {/* <DidntFindModal isWhiteMode={false} /> */}
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