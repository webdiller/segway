import CustomHead from '@/basic/CustomHead';
import Footer from '@/sections/Footer';
import {useCart} from 'react-use-cart';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setProducts, setUniqueProductsCount} from '../../store/actions/productCart';
import TopNavigation from '@/sections/TopNavigation';
import MiddleNavigation from '@/sections/MiddleNavigation';
import TopStock from '@/sections/TopStock';

/** Дефолтное расположение эементов */
export default function MainPageLayout({title = 'Segway', description = 'Описание', children} = {}) {
  const dispatch = useDispatch();
  const {totalUniqueItems, items: lsItems} = useCart();

  useEffect(() => {
    dispatch(setProducts(lsItems));
    dispatch(setUniqueProductsCount(totalUniqueItems));
  }, [lsItems, totalUniqueItems, dispatch]);

  return (
    <>
      <CustomHead description={description} title={title} />
      <TopNavigation />
      <MiddleNavigation />
      <TopStock />
      {children}
      <Footer />
    </>
  );
}
