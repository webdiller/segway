import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';

const ContactsDinamic = dynamic(() => import('@/sections/Contacts'));

import {data} from '@/base/data';

export default function Contacts({allData}) {
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="accessories">
        <ContactsDinamic />
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
