import dynamic from 'next/dynamic';
import CustomHead from '@/basic/CustomHead';
import Footer from '@/sections/Footer';
import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
import TopCategoryLoader from '@/sections/TopCategorySlider/TopCategoryLoader';
const TopCategorySlider = dynamic(() => import('@/sections/TopCategorySlider'), { loading: TopCategoryLoader })

const ProductModalDynamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });
const BreadcrumbsDynamic = dynamic(() => import('@/sections/Breadcrumbs'));

export default function MainPageLayout({ title = 'Segway', description = 'Описание', children, allData }) {
  return (
    <>
      <CustomHead description={description} title={title} />
      <TopNavigation />
      <MiddleNavigation />
      <TopCategorySlider />
      <BreadcrumbsDynamic />
      {children}
      <Footer />
      <ProductModalDynamic accessoeries={allData.accessoeries} />
    </>
  );
}
