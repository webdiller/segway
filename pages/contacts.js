import dynamic from 'next/dynamic';
const ContactsDinamic = dynamic(() => import('@/sections/Contacts'));

import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Contacts({allData}) {
  return (
    <>
      <CustomHead description="segway description" title="accessories" />
      <ContactsDinamic />
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
