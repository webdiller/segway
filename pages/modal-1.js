import DidntFindModal from '@/modals/DidntFindModal';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Modal1({allData}) {
  return (
    <div>
      <CustomHead />
      <DidntFindModal forForm={true} />
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
