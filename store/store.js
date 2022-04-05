import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


import {
  profileSlice,
  differentBillingSlice,
  productCartSlice,
  modalsSlice,
  discountModalSlice,
  fancyModalSlice,
  elementInViewSlice,
  productModalSlice,
  paymentModalSlice
} from './slices/_index'
import topSwiperSlice from './slices/topSwiperSlice'

const persistConfig = {
  key: 'root',
  version: 0.2,
  storage,
  blacklist: ['differentBilling', 'productModal', 'discountModalSlice', 'paymentModalSlice']
}

const rootReducer = combineReducers({
  profile: profileSlice,
  topSwiper: topSwiperSlice,
  differentBilling: differentBillingSlice,
  products: productCartSlice,
  modals: modalsSlice,
  productModal: productModalSlice,
  discountModal: discountModalSlice,
  fancyModal: fancyModalSlice,
  elementInView: elementInViewSlice,
  paymentModal: paymentModalSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)