import dynamic from 'next/dynamic';

import TopSwiperLoader from '@/sections/TopSwiper/TopSwiperLoader';
const TopSwiper = dynamic(() => import('@/sections/TopSwiper'), {
  loading: TopSwiperLoader
})

import TopCategoryLoader from '@/sections/TopCategorySlider/TopCategoryLoader';
const TopCategorySlider = dynamic(() => import('@/sections/TopCategorySlider'), {
  loading: TopCategoryLoader
})

import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), { ssr: false });
const Footer = dynamic(() => import('@/sections/Footer'))

export default function ModelLayout({ children, allData, hideSwiper = false, product, preparedProtection } = {}) {
  return (
    <>
      <TopNavigation />
      <MiddleNavigation />
      <TopCategorySlider />
      <TopSwiper items={allData} />
      {children}
      <Footer withPaddings />
      <FixedModalDinamic product={product} preparedProtection={preparedProtection} />
    </>
  );
}