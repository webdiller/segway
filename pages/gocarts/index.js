import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';
import ProductCards from '@/sections/ProductCards';
import Tabs from '@/sections/Tabs';
import SegwayProtect from '@/sections/SegwayProtect';

export default function GocartsPage({allData}) {
  return (
    <>
      <CustomHead title="All gocarts" />
        <ProductCards title="Gocarts" categoryRoute="gocarts" products={allData.gocarts}/>
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