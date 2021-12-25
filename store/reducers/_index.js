import {combineReducers} from 'redux';
import {fixedModal} from './fixedModal';
import {selectedWarranty} from './selectedWarranty';
import {productCart} from './productCart';

export default combineReducers({
  fixedModal,
  selectedWarranty,
  productCart
});
