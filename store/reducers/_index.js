import {combineReducers} from 'redux';
import {fixedModal} from './fixedModal';
import {selectedWarranty} from './selectedWarranty';
import {productCart} from './productCart';
import {productModal} from './productModal';
import {fancyModal} from './fancyModal';
import {compareModal} from './compareModal';
import {welcomeSlider} from './welcomeSlider';

export default combineReducers({
  fixedModal,
  selectedWarranty,
  productCart,
  productModal,
  fancyModal,
  compareModal,
  welcomeSlider,
});
