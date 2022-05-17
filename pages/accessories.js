import AccessoriesBlock from '@/sections/Accessories/AccessoriesBlock';
import { data } from '@/base/data-test';
import CustomHead from '@/basic/CustomHead';
import TitleWithDescription from '@/blocks/TitleWithDescription';

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function AccessoriesPage({ allData }) {

  return (
    <div>
      <CustomHead />
      <TitleWithDescription
        customClass="accessories-block__title-with-description"
        titleDesktop={<>Accessories</>}
        titleMobile={<>Accessories</>}
        textDesktop={
          <>
            With stylish original Segway Ninebot accessories, you will get even more positive emotions from your trips. 
          </>
        }
      />
      <AccessoriesBlock items={allData.accessoeries} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
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
