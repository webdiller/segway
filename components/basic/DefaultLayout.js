import CustomHead from './CustomHead';
import dynamic from 'next/dynamic';
import Footer from '@/sections/Footer';
const TopSwiperDinamic = dynamic(() => import('@/sections/TopSwiper'));
const TopStockDinamic = dynamic(() => import('@/sections/TopStock'));

/** Дефолтное расположение эементов */
export default function DefaultLayout({title = 'Segway', description = 'Описание', children, items, hideSwiper = false} = {}) {
  return (
    <>
      <CustomHead description={description} title={title} />
      {hideSwiper ? null : <TopSwiperDinamic items={items} />}
      <TopStockDinamic />
      {children}
      <Footer />
    </>
  );
}
