import dynamic from 'next/dynamic';
import ModelLayout from '@/layouts/ModelLayout';

const ProductCardsDinamic = dynamic(() => import('@/sections/ProductCards'));
const TabsDinamic = dynamic(() => import('@/sections/Tabs'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));

import {data} from '@/base/data';

export default function Home({allData}) {
  return (
    <div>
      <ModelLayout hideSwiper={true} items={allData} description="segway description" title="segway index">
        <ProductCardsDinamic products={allData.segways}/>
        <SegwayProtectDinamic />
        <TabsDinamic customClass="main-page" />
      </ModelLayout>
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
