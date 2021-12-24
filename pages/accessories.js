import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';
const AccessoriesBlockDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesBlock'));
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'));
import {data} from '@/base/data';

export default function Accessories({allData}) {

  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="accessories">
        <AccessoriesBlockDinamic items={allData.accessoeries}/>
        <ProductModalDinamic segways={allData.segways} accessoeries={allData.accessoeries} />
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
