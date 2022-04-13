import dynamic from 'next/dynamic';

import TopCategoryLoader from '@/sections/TopCategorySlider/TopCategoryLoader';
const TopCategorySlider = dynamic(() => import('@/sections/TopCategorySlider'), {
  loading: TopCategoryLoader
})

import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), { ssr: false });
const Footer = dynamic(() => import('@/sections/Footer'))

export default function InfoPageLayout({ children, product, preparedProtection } = {}) {
  return (
    <>
      <TopNavigation />
      <MiddleNavigation />
      <TopCategorySlider />
      {children}
      <Footer withPaddings />
      <FixedModalDinamic product={product} preparedProtection={preparedProtection} />
    </>
  );
}