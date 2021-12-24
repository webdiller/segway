import {combineReducers} from 'redux';
import {fixedModalReducer} from './fixedModalReducer';
import {selectedWarrantyTabReducer} from './selectedWarrantyTabReducer';

export default combineReducers({
  fixedModalReducer,
  selectedWarrantyTabReducer
});
