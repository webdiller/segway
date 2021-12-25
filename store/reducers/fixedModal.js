import * as types from '../types';

const initialState = {
  currentPrice: 949.99,
  currentSegway: {
    id: '006',
    type: 'kickscooter',
    name: 'Ninebot Kickscooter MAX',
    nameWithoutBrand: 'Kickscooter\nMAX',
    nameWrap: 'Ninebot\nKickscooter\nMAX',
    shortName: 'KS MAX',
    price: '949.99',
    maxSpeed: '18.6 mph (30 km/h)',
    rangeByMiles: 'Approx. 40.4 miles (65 km)',
    rangeByMilesWrap: 'Approx. 40.4 miles \n (65 km)',
    batteryCapacity: '551 Wh',
    netWeight: 'Approx. 41.2 lbs (18.7 kg)',
    netWeightWrap: 'Approx. 41.2 lbs \n (18.7 kg)',
    payload: '66.1-220.5 lbs (30.0-100.0 kg)',
    payloadWrap: '66.1-220.5 lbs \n (30.0-100.0 kg)',
    charginTime: '~ 6 h',
    numberOfBatteries: '1 Build-in',
    motorPower: 'Nominal 350W',
    powerOutput: '121 W',
    maxIncline: '20%',
    shockAbsorption: 'N/A',
    safety: 'LED rear light',
    atmosphereLight: 'N/A',
    warranty: {
      oneYear: {
        price: '139',
        selected: false
      },
      twoYear: {
        price: '209',
        selected: false
      },
      threeYear: {
        price: '279',
        selected: false
      }
    },
    imgPath: '/ninebot-kickscooter-max-006.png',
    imgSmallPath: '/ninebot-kickscooter-max-006_small.png',
    links: ['https://www.segway.com/ninebot-kickscooter-max/', 'https://store.segway.com/ninebot-kickscooter-max'],
    accent: true
  }
};

export const fixedModal = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_PRICE_FOR_FIXED_MODAL:
      return {
        ...state,
        currentPrice: payload
      };
    case types.SET_SEGWAY_FOR_FIXED_MODAL:
      return {
        ...state,
        currentSegway: payload
      };
    default:
      return state;
  }
};
