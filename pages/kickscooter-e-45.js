import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';
import Welcome from '@/sections/Welcome';
import TopStock from '@/sections/TopStock';
import Tabs from '@/sections/Tabs';
import {FancyModal} from 'components/shared/Modal';
import CustomHead from '@/basic/CustomHead';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPrice, setSegway} from '@/actions/fixedModal';
import {data} from '@/base/data';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-e-45/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-e-45/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-e-45/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-e-45/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-e-45/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-e-45/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-e-45/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-e-45/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-e-45/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-e-45/features-icons/feature-8.svg';
const featuresItems = [
  {icon: featuresIcon_1, title: '9”', description: 'Pneumatic Tires'},
  {icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights'},
  {icon: featuresIcon_3, title: '18.6 mph', description: 'Max Speed'},
  {icon: featuresIcon_4, title: '28 Miles', description: 'Max Range'},
  {icon: featuresIcon_5, title: '20%', description: 'Hill Grade'},
  {icon: featuresIcon_6, title: '55-220 lbs', description: 'Payload'},
  {icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant'},
  {icon: featuresIcon_8, title: '18650mAh', description: 'Battery'}
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-e-45/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-e-45/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-e-45/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-e-45/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-e-45/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-e-45/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-e-45/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-e-45/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-e-45/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-e-45/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-e-45/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-e-45/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-e-45/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-e-45/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-e-45/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-e-45/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), {ssr: false});
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-e-45/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-e-45/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), {ssr: false});
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), {ssr: false});
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), {ssr: false});

export default function Home({allData}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSegway(allData.segways.adultSegways[4]));
    dispatch(setPrice(allData.segways.adultSegways[4].price));
  }, []);

  return (
    <>
      <CustomHead title="Kickscooter E45" />
      <TopStock />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter E45
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            E45
          </>
        }
        currentSegway={allData.segways.adultSegways[4]}
      />
      <Tabs />
      <PackingListDinamic poster_type="type_2" />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        width={1376}
        height={567}
        mobileWidth={375}
        mobileHeight={406}
        imageAltText="Background image before features block"
        desktopImage={FeaturesDesktopImage}
        mobileImage={FeaturesMobileImage}
      />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic title="KickScooter overview" subtitle="SEGWAY Ninebot Kickscooter e45" desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={`Innovative Thread <br/> Locking Technology`.split('<br/>').join('\n')}
        textDesktop={'The vehicle body adopt the innovative thread locking <br/> technology used in high-speed bullet trains, and are strictly <br/> tested. After undergoing 6213 miles of testing, the frame of <br/> the E45 is still in tip top shape.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={'Innovative Thread <br/> Locking Technology'.split('<br/>').join('\n')}
        textMobile={'The vehicle body adopt the innovative thread <br/> locking technology used in high-speed bullet <br/>trains, and are strictly tested. After undergoing <br/> 6213 miles of testing, the frame of the E45 is still <br/> in tip top shape.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={'Classic <br/> Foldable <br/> Design'.split('<br/>').join('\n')}
        textDesktop={'The E45 features the classic folding design <br/> that is easy to carry and fits perfectly inside a <br/> car’s trunk. Weighing approximately 30 lbs. It <br/>  can be easily carried and towed around, fits <br/> perfectly in the back of car trunks.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={507}
        titleMobile={'Classic Foldable Design <br/>'.split('<br/>').join('\n')}
        textMobile={'The E45 features the classic folding design that is <br/> easy to carry and fits perfectly inside a car’s trunk. <br/> Weighing approximately 30 lbs. It can be easily <br/> carried and towed around, fits perfectly in the <br/> back of car trunks.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'2.5W Front <br/> LED Lights'.split('<br/>').join('\n')}
        textDesktop={'Up to 44 ft extended illumination distance.'.split('<br/>').join('\n')}
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={'2.5W Front LED Lights'.split('<br/>').join('\n')}
        textMobile={'Up to 44 ft extended illumination distance.'.split('<br/>').join('\n')}
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-6"
        titleDesktop={'9” Non- <br/> Pneumatic  <br/> Tires'.split('<br/>').join('\n')}
        textDesktop={'Three years in the making, the new inner <br/> support technology has higher resilience than <br/> ordinary solid tires, and is maintenance-free <br/> with high shock absorption. The 9 inch wheel <br/> size also provides additional comfort when <br/> riding through tough terrains.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={668}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={437}
        titleMobile={'9” Non-Pneumatic Tires'.split('<br/>').join('\n')}
        textMobile={'Three years in the making, the new inner <br/> support technology has higher resilience than <br/> ordinary solid tires, and is maintenance-free with <br/> high shock absorption. The 9 inch wheel size <br/> also provides additional comfort when riding <br/> through tough terrains.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'Smart Battery <br/> Management System'.split('<br/>').join('\n')}
        textDesktop={'The BMS system at Segway-Ninebot has undergone 7 years <br/> of continuous technological development and produced 300 <br/> million batteries. We are devoted to extending the battery <br/> life, ensuring user safety, and accurate power display'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={'Smart Battery <br/> Management System'.split('<br/>').join('\n')}
        textMobile={'The BMS system at Segway-Ninebot has <br/> undergone 7 years of continuous technological <br/> development and produced 300 million batteries. <br/> We are devoted to extending the battery life, <br/> ensuring user safety, and accurate power display'
          .split('<br/>')
          .join('\n')}
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={'Intuitive <br/> Digital <br/> Dashboard'.split('<br/>').join('\n')}
        textDesktop={'Driving information is clear at a glance.'.split('<br/>').join('\n')}
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={'Intuitive Digital Dashboard'.split('<br/>').join('\n')}
        textMobile={'Driving information is clear at a glance.'.split('<br/>').join('\n')}
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={`Innovative Thread <br/> Locking Technology`.split('<br/>').join('\n')}
        textDesktop={'The vehicle body adopt the innovative thread locking <br/> technology used in high-speed bullet trains, and are strictly <br/> tested. After undergoing 6213 miles of testing, the frame of <br/> the E45 is still in tip top shape.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={'Innovative Thread <br/> Locking Technology'.split('<br/>').join('\n')}
        textMobile={'The vehicle body adopt the innovative thread <br/> locking technology used in high-speed bullet <br/>trains, and are strictly tested. After undergoing <br/> 6213 miles of testing, the frame of the E45 is still <br/> in tip top shape.'
          .split('<br/>')
          .join('\n')}
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[4]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>E45</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter
            <br />
            <b>E45</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={608}
        heightDesktop={525}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={allData.segways.adultSegways[4]}
      />
      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[4]} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout items={data}>{page}</DefaultLayout>;
};