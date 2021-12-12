import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';
const AccessoriesBlockDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesBlock'));
import {data} from '@/base/data';

export default function Accessories({allData}) {

  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="accessories">
        <AccessoriesBlockDinamic items={allData.accessoeries}/>
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
