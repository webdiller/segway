import AccessoriesBlock from '@/sections/Accessories/AccessoriesBlock';
import ProductModal from '@/modals/ProductAddedModal/ProductModal';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function AccessoriesPage({allData}) {

  return (
    <div>
      <CustomHead />
      <AccessoriesBlock items={allData.accessoeries}/>
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
