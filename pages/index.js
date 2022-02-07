import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';

const ProductCardsDinamic = dynamic(() => import('@/sections/ProductCards'));
const TabsDinamic = dynamic(() => import('@/sections/Tabs'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));

import {data} from '@/base/data';

export default function Home({allData}) {
  return (
    <div>
      <DefaultLayout hideSwiper={true} items={allData} description="segway description" title="segway index">
        <ProductCardsDinamic/>
        <SegwayProtectDinamic />
        <TabsDinamic customClass="main-page" />
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
