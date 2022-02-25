import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';
import ProductCards from '@/sections/ProductCards';
import Tabs from '@/sections/Tabs';
import SegwayProtect from '@/sections/SegwayProtect';

export default function KickscootersPage({allData}) {
  return (
    <>
      <CustomHead title="All kickscooters" />
      <ProductCards title="Kickscooters" categoryRoute="kickscooters" products={[...allData.segways.adultSegways]} />
      <SegwayProtect customClass="type-1" />
      <Tabs customClass="main-page" />
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