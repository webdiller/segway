import dynamic from 'next/dynamic';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';
import MainPageLayout from '@/layouts/MainPageLayout';

const ProductCardsDinamic = dynamic(() => import('@/sections/ProductCards'));
const TabsDinamic = dynamic(() => import('@/sections/Tabs'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));


export default function Kickscooters({allData}) {
  return (
    <>
      <CustomHead title="All kickscooters" />
        <ProductCardsDinamic products={allData.segways}/>
        <SegwayProtectDinamic customClass="type-1" />
        <TabsDinamic customClass="main-page" />
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

Kickscooters.getLayout = function getLayout(page) {
  return <MainPageLayout items={data}>{page}</MainPageLayout>;
};