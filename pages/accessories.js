import AccessoriesBlock from '@/sections/Accessories/AccessoriesBlock';
import { data } from '@/base/data';
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
            Cо стильными оригинальными аксессуарами Xiaomi и Ninebot вы получите еще <br />
            больше положительных эмоций от своих поездок. 
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
