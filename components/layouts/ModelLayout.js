import dynamic from 'next/dynamic';

import TopSwiperLoader from '@/sections/TopSwiper/TopSwiperLoader';
const TopSwiper = dynamic(() => import('@/sections/TopSwiper'), {
  loading: TopSwiperLoader
})
const PreorderModalDynamic = dynamic(() => import('@/modals/PreorderModal'));

import TopCategoryLoader from '@/sections/TopCategorySlider/TopCategoryLoader';
const TopCategorySlider = dynamic(() => import('@/sections/TopCategorySlider'), {
  loading: TopCategoryLoader
})

import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), { ssr: false });
const Footer = dynamic(() => import('@/sections/Footer'))
const BreadcrumbsDynamic = dynamic(() => import('@/sections/Breadcrumbs'));

export default function ModelLayout({ children, allData, product, preparedProtection } = {}) {
  return (
    <>
      <TopNavigation />
      <MiddleNavigation />
      <TopCategorySlider />
      <TopSwiper items={allData} />
      <BreadcrumbsDynamic />
      {children}
      <Footer withPaddings />
      <FixedModalDinamic product={product} preparedProtection={preparedProtection} />
      <PreorderModalDynamic />
    </>
  );
}