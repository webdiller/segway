import dynamic from 'next/dynamic';
const AccessoriesBlockDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesBlock'));
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'));
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function Accessories({allData}) {

  return (
    <div>
      <CustomHead />
      <AccessoriesBlockDinamic items={allData.accessoeries}/>
      <ProductModalDinamic segways={allData.segways} accessoeries={allData.accessoeries} />
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
