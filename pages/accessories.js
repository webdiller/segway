import AccessoriesBlock from '@/sections/Accessories/AccessoriesBlock';
import ProductModal from '@/modals/ProductAddedModal/ProductModal';
import { data } from '@/base/data';
import CustomHead from '@/basic/CustomHead';
import TitleWithDescription from '@/blocks/TitleWithDescription';

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
      <ProductModal segways={allData.segways} accessoeries={allData.accessoeries} />
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
