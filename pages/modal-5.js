
import {RemainTimeModalWithoutTimer} from '@/modals/RemainTimeModal';
import {data} from '@/base/data-test';
import CustomHead from '@/basic/CustomHead';

export default function Modal5({allData}) {
  return (
    <div>
      <CustomHead />
      <RemainTimeModalWithoutTimer />
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
