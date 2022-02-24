import DidntFindModal from '@/modals/DidntFindModal';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Modal2() {
  return (
    <div>
      <CustomHead />
      <DidntFindModal isWhiteMode={false} />
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
