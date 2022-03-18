import dynamic from 'next/dynamic';
import TopSwiper from '@/sections/TopSwiper';
import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
import TopStock from '@/sections/TopStock';
const Footer = dynamic(() => import('@/sections/Footer'))

export default function ModelLayout({ children, allData, hideSwiper = false } = {}) {
  return (
    <>
      <TopNavigation />
      <MiddleNavigation />
      {hideSwiper ? null : <TopSwiper items={allData} />}
      <TopStock />
      {children}
      <Footer />
    </>
  );
}