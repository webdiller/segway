import Wholesale from '@/sections/Wholesale';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function WholesalePage({allData}) {
  return (
    <>
      <CustomHead title="Wholesale" />
      <Wholesale />
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
