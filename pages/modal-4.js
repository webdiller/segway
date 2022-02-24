import {RemainTimeModalWithTimer} from '@/modals/RemainTimeModal';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Modal4({allData}) {
  return (
    <div>
      <CustomHead />
      <RemainTimeModalWithTimer />
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
