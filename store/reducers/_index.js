import {combineReducers} from 'redux';
import {fixedModal} from './fixedModal';
import {selectedWarranty} from './selectedWarranty';
import {productCart} from './productCart';
import {productModal} from './productModal';

export default combineReducers({
  fixedModal,
  selectedWarranty,
  productCart,
  productModal
});
