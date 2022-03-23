import dynamic from 'next/dynamic';
import TopSwiper from '@/sections/TopSwiper';
import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
import TopCategorySlider from '@/sections/TopCategorySlider';
const Footer = dynamic(() => import('@/sections/Footer'))

export default function ModelLayout({ children, allData, hideSwiper = false } = {}) {
  return (
    <>
      <TopNavigation />
      <MiddleNavigation />
      <TopCategorySlider />
      <TopSwiper items={allData} />
      {children}
      <Footer withPaddings />
    </>
  );
}