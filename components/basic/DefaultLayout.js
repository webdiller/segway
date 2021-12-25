import CustomHead from './CustomHead';
import dynamic from 'next/dynamic';
import Footer from '@/sections/Footer';
const TopSwiperDinamic = dynamic(() => import('@/sections/TopSwiper'));
const TopStockDinamic = dynamic(() => import('@/sections/TopStock'));

import {useCart} from 'react-use-cart';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setProducts, setUniqueProductsCount} from '../../store/actions/productCart';

/** Дефолтное расположение эементов */
export default function DefaultLayout({title = 'Segway', description = 'Описание', children, items, hideSwiper = false} = {}) {
  const dispatch = useDispatch();
  const {totalUniqueItems, items: lsItems} = useCart();

  useEffect(() => {
    dispatch(setProducts(lsItems));
    dispatch(setUniqueProductsCount(totalUniqueItems));
  }, [lsItems, totalUniqueItems, dispatch]);

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
