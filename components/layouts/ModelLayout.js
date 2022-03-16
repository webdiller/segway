import Footer from '@/sections/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TopSwiper from '@/sections/TopSwiper';
import MiddleNavigation from '@/sections/MiddleNavigation';
import TopNavigation from '@/sections/TopNavigation';
import TopStock from '@/sections/TopStock';

/** Дефолтное расположение эементов */
export default function ModelLayout({ children, allData, hideSwiper = false } = {}) {
  // const dispatch = useDispatch();
  // const {totalUniqueItems, items: lsItems} = useCart();

  // useEffect(() => {
  //   dispatch(setProducts(lsItems));
  //   dispatch(setUniqueProductsCount(totalUniqueItems));
  // }, [lsItems, totalUniqueItems, dispatch]);

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
