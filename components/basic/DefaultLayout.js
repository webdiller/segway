import CustomHead from './CustomHead';
import Footer from '@/sections/Footer';

import {useCart} from 'react-use-cart';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setProducts, setUniqueProductsCount} from '../../store/actions/productCart';
import TopSwiper from '@/sections/TopSwiper';

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
      {hideSwiper ? null : <TopSwiper items={items} />}
      {children}
      <Footer />
    </>
  );
}
