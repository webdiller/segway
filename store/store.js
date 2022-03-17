import { configureStore } from '@reduxjs/toolkit'
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
import storage from 'redux-persist/lib/storage'
import { profileSlice, differentBillingSlice, productCartSlice, modalsSlice, preparedProductSlice, discountModalSlice, fancyModalSlice, elementInViewSlice } from './slices/_index'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['differentBilling']
}

const rootReducer = combineReducers({
  profile: profileSlice,
  differentBilling: differentBillingSlice,
  products: productCartSlice,
  modals: modalsSlice,
  preparedProduct: preparedProductSlice,
  discountModal: discountModalSlice,
  fancyModal: fancyModalSlice,
  elementInView: elementInViewSlice
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