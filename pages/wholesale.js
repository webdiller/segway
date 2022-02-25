import dynamic from 'next/dynamic';
const WholesaleDinamic = dynamic(() => import('@/sections/Wholesale'));
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Wholesale({allData}) {
  return (
    <>
      <CustomHead title="Wholesale"/>
      <WholesaleDinamic />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
