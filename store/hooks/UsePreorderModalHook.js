import { useDispatch } from 'react-redux';
import { setActive, setProductName, setProductLink } from 'store/slices/preorderModalSlice';

export default function UsePreorderModalHook() {
  const dispatch = useDispatch();

  const requestAPreorderModalHandler = (productName, productLink) => {
    dispatch(setProductName(productName))
    if (productLink) {
      dispatch(setProductLink(`${process.env.HOST}${productLink}`))
    } else {
      dispatch(setProductLink(`Не указано`))
    }
    dispatch(setActive(true))
  }

  return {
    requestAPreorderModalHandler
  }
}
