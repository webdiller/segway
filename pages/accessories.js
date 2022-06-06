import AccessoriesBlock from '@/sections/Accessories/AccessoriesBlock';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');
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
