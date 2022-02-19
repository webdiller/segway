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

import FeaturesDesktopImage from '@/base/ks-zing-e8/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-zing-e8/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-zing-e8/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-zing-e8/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-zing-e8/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-zing-e8/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-zing-e8/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-zing-e8/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-zing-e8/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-zing-e8/features-icons/feature-8.svg';
const featuresItems = [
  {icon: featuresIcon_1, title: '7”', description: 'Pneumatic Tires'},
  {icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights'},
  {icon: featuresIcon_3, title: '8.6 mph', description: 'Max Speed'},
  {icon: featuresIcon_4, title: '6.2 Miles', description: 'Max Range'},
  {icon: featuresIcon_5, title: '7%', description: 'Hill Grade'},
  {icon: featuresIcon_6, title: '44-110 lbs', description: 'Payload'},
  {icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant'},
  {icon: featuresIcon_8, title: '2550mAh', description: 'Battery'}
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-zing-e8/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-zing-e8/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-zing-e8/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-zing-e8/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-zing-e8/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-zing-e8/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-zing-e8/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-zing-e8/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-zing-e8/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-zing-e8/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-zing-e8/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-zing-e8/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-zing-e8/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-zing-e8/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-zing-e8/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-zing-e8/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), {ssr: false});
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-zing-e8/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-zing-e8/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), {ssr: false});
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), {ssr: false});
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), {ssr: false});

export default function Home({allData}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSegway(allData.segways.kidsSegways[0]));
    dispatch(setPrice(allData.segways.kidsSegways[0].price));
  }, []);

  return (
    <>
      <CustomHead title="Kickscooter ZING E8" />
      <TopStock />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> Zing e8
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            Zing e8
          </>
        }
        currentSegway={allData.segways.kidsSegways[0]}
      />
      <Tabs />
      <PackingListDinamic poster_type="type_4" />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        width={1376}
        height={686}
        mobileWidth={375}
        mobileHeight={406}
        imageAltText="Background image before features block"
        desktopImage={FeaturesDesktopImage}
        mobileImage={FeaturesMobileImage}
      />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic title="KickScooter overview" subtitle="SEGWAY Ninebot Kickscooter ZING e8" desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Ninebot <br />
            EKickscooter ZING e8
          </>
        }
        textDesktop={
          <>
            Vibrant Colors Designed for Children <br />
            The Ninebot eKickSscooter E8 adopts an exterior design that <br />
            is specifically tailored for children - slim body, vibrant colors <br />
            (blue & pink).
            <br />
            <br />
            Switch to electric mode and enjoy the fun experience of <br />
            &quot;driving&quot;. Kick on the ground, press the throttle, and hold the <br />
            handlebar, enjoy the refreshing acceleration in its fullest.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={408}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={517}
        titleMobile={<>Ninebot EKickscooter ZING e8</>}
        textMobile={
          <>
            Vibrant Colors Designed for Children <br />
            The Ninebot eKickSscooter E8 adopts an exterior <br />
            design that is specifically tailored for children - <br />
            slim body, vibrant colors (blue & pink).
            <br />
            <br />
            Switch to electric mode and enjoy the fun <br />
            experience of &quot;driving&quot;. Kick on the ground, press <br />
            the throttle, and hold the handlebar, enjoy the <br />
            refreshing acceleration in its fullest.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={<>Crusie Mode</>}
        textDesktop={
          <>
            Come and try a new way of riding <br />
            kickscooters! Simply kick to start, the scooter <br />
            will continue to glide without needing to <br />
            press the throttle! The harder you kick, the <br />
            faster you accelerate.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={480}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={461}
        titleMobile={<>Crusie Mode</>}
        textMobile={
          <>
            Come and try a new way of riding kickscooters! <br />
            Simply kick to start, the scooter will continue to <br />
            glide without needing to press the throttle! The <br />
            harder you kick, the faster you accelerate.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            The Next Level <br />
            of e-Scooter
          </>
        }
        textDesktop={
          <>
            Equipped with internal and external lithium-ion batteries, the <br />
            Ninebot KickScooter by Segway ES3 allows you to travel farther <br />
            and reach your destination quicker than ever before. The extra <br />
            power comes with controlled acceleration for a smoother ride <br />
            and a cruise control option so you can ride in comfort. Thanks to <br />
            the textured anti-slip handle, you’ll enjoy better grip and control.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={526}
        titleMobile={<>The Next Level of e-Scooter</>}
        textMobile={
          <>
            Equipped with internal and external lithium-ion <br />
            batteries, the Ninebot KickScooter by Segway ES3 <br />
            allows you to travel farther and reach your <br />
            destination quicker than ever before. The extra <br />
            power comes with controlled acceleration for a <br />
            smoother ride and a cruise control option so you <br />
            can ride in comfort. Thanks to the textured anti-slip <br />
            handle, you’ll enjoy better grip and control.
          </>
        }
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            Foldable <br />
            Design
          </>
        }
        textDesktop={
          <>
            The slim body is only 1.3 inches in thickness, <br />
            and the weight of the scooter is only 17.6 lbs, <br />
            which can be easily folded. The scooter is light, <br />
            easy to fold, portable, and can be easily placed <br />
            in the trunk.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={384}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={376}
        titleMobile={<>Foldable Design</>}
        textMobile={
          <>
            The slim body is only 1.3 inches in thickness, <br />
            and the weight of the scooter is only 17.6 lbs, <br />
            which can be easily folded. The scooter is light, <br />
            easy to fold, portable, and can be easily placed <br />
            in the trunk.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            3 SAFETY <br />
            BRAKING SYSTEM
          </>
        }
        textDesktop={
          <>
            The Ninebot eKickScooter ZING E8 is equipped with a <br />
            high-performance handbrake system, which also has <br />
            the EBS energy recovery brake function. In addition, <br />
            the rear fender also has a brake function. Triple <br />
            braking system, extra safety precautions.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={430}
        titleMobile={<>3 SAFETY BRAKING SYSTEM</>}
        textMobile={
          <>
            The Ninebot eKickScooter ZING E8 is equipped <br />
            with a high-performance handbrake system, which <br />
            also has the EBS energy recovery brake function. <br />
            In addition, the rear fender also has a brake <br />
            function. Triple braking system, extra safety <br />
            precautions.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            Low Pedal <br />
            Design
          </>
        }
        textDesktop={
          <>
            The scooter is only 3.9 inches above the <br />
            ground, the center of gravity is low, and it is <br />
            closer to the ground, allowing the children <br />
            to ride d control easily.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={470}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={417}
        titleMobile={<>Low Pedal Design</>}
        textMobile={
          <>
            The scooter is only 3.9 inches above the ground, <br />
            the center of gravity is low, and it is closer to the <br />
            ground, allowing the children to ride d control <br />
            easily.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="type-9"
        titleDesktop={
          <>
            3M Reflective <br />
            Stickers
          </>
        }
        textDesktop={
          <>
            The 3M reflective sticker is installed on the fender. It <br />
            has high reflectivity, a wide reflection angle, and <br />
            strong adhesion, providing more safety and security.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={399}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={442}
        titleMobile={<>3M Reflective Stickers</>}
        textMobile={
          <>
            The 3M reflective sticker is installed on the fender. <br />
            It has high reflectivity, a wide reflection angle, and <br />
            strong adhesion, providing more safety and security.
          </>
        }
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.kidsSegways[0]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ZING E8</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ZING E8</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={allData.segways.kidsSegways[0]}
      />

      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.kidsSegways[0]} />
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