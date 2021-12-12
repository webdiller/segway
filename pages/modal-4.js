import DefaultLayout from "@/basic/DefaultLayout";
import { RemainTimeModalWithTimer } from "@/modals/RemainTimeModal";
import {data} from '@/base/data';

export default function Modal4({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="segway index">
        <RemainTimeModalWithTimer />
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