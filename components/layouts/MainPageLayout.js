import CustomHead from '@/basic/CustomHead';
import Footer from '@/sections/Footer';
import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function MainPageLayout({ title = 'Segway', description = 'Описание', children, allData}) {
  return (
    <>
      <CustomHead description={description} title={title} />
      <TopNavigation />
      <MiddleNavigation />
      {children}
      <Footer />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}
