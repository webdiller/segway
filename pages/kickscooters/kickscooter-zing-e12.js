import dynamic from 'next/dynamic';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

import { data } from '@/base/data';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-zing-e12/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-zing-e12/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-zing-e12/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-zing-e12/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-zing-e12/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-zing-e12/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-zing-e12/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-zing-e12/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-zing-e12/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-zing-e12/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '7”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '11.2 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '6.2 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '7%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '44-132 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: '2550mAh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-zing-e12/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-zing-e12/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-zing-e12/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-zing-e12/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-zing-e12/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-zing-e12/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-zing-e12/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-zing-e12/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-zing-e12/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-zing-e12/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-zing-e12/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-zing-e12/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-zing-e12/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-zing-e12/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-zing-e12/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-zing-e12/features/feature-7-mobile.jpg';

const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-zing-e12/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-zing-e12/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter ZING E12" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> Zing e12
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            Zing e12
          </>
        }
        currentSegway={allData.segways[5]}
      />
      <Tabs
        showApp
        tab_4_title={<>APP <br />Controll</>}
        title_4_desktop={<>Access More Features <br /> And Functions Like A Pro</>}
        title_4_mobile={<>Access More Features <br /> And Functions Like A Pro</>}
        text_4_desktop={
          <>
            Explore the various tabs to learn about the health of the device.<br />
            Checking the battery level, speed limiter, mileage calculator <br />
            tool and more.
          </>
        }
        text_4_mobile={<>
          Explore the various tabs to learn about <br />
          the health of the device. Checking the battery <br />
          level, speed limiter, mileage calculator <br />
          tool and more.
        </>}
      />
      <PackingListDinamic packingListImg={allData.segways[5].packingListImg} />
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

      <KickScooterOverviewDinamic
        titleDesktop={
          <>
            OvKickScooter overviewerview <br />
            Segway Ninebot Kickscooter E12
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter E12</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Ninebot <br />
            EKickscooter <br />
            ZING e12
          </>
        }
        textDesktop={
          <>
            The New Sensation for Big Kids! <br />
            Slim, lightweight, bright, with a dynamic handlebar. <br />
            Be the coolest in town with the E12 KickScooter.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={408}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={517}
        titleMobile={
          <>
            Ninebot EKickscooter <br />
            ZING e12s
          </>
        }
        textMobile={
          <>
            The New Sensation for Big Kids! <br />
            Slim, lightweight, bright, with a dynamic handlebar. <br />
            Be the coolest in town with the E12 KickScooter.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            3 Riding <br />
            Modes
          </>
        }
        textDesktop={
          <>
            Turbo: Accelerate with the thumb throttle. <br />
            Cruise: Kick to start for a smooth riding <br />
            experience. Safe: Under 6.2 mph (10km/h) <br />
            for beginners.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={448}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={461}
        titleMobile={<>3 Riding Modes</>}
        textMobile={
          <>
            Turbo: Accelerate with the thumb throttle. <br />
            Cruise: Kick to start for a smooth riding <br />
            experience. Safe: Under 6.2 mph (10km/h) for <br />
            beginners.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Smart Battery <br />
            Management <br />
            System
          </>
        }
        textDesktop={
          <>
            With 7 years of accumulated development of the fifth- <br />
            generation BMS intelligent battery management system, <br />
            the cumulative total of managed batteries exceeds 300 <br />
            million, which can provide comprehensive protection for <br />
            lithium-ion batteries. The support of the BMS makes the <br />
            ZING E12 eKickScooter safe and reliable.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={546}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={526}
        titleMobile={
          <>
            Smart Battery <br /> Management System
          </>
        }
        textMobile={
          <>
            With 7 years of accumulated development of <br />
            the fifth-generation BMS intelligent battery <br />
            management system, the cumulative total of <br />
            managed batteries exceeds 300 million, which can <br />
            provide comprehensive protection for lithium-ion <br />
            batteries. The support of the BMS makes the <br />
            ZING E12 eKickScooter safe and reliable.
          </>
        }
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            Foldable <br /> Design
          </>
        }
        textDesktop={
          <>
            The body is slim and light, with a thickness of <br />
            only 34mm (3.4cm), and weighing in at only <br />
            18.7lbs (8.5kg). A combination of design and <br />
            portability, when folded, it is easy to carry, and <br />
            convenient to store.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={418}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={376}
        titleMobile={<>Foldable Design</>}
        textMobile={
          <>
            The body is slim and light, with a thickness of <br />
            only 34mm (3.4cm), and weighing in at only <br />
            18.7lbs (8.5kg). A combination of design and <br />
            portability, when folded, it is easy to carry, and <br />
            convenient to store.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            40mm Front <br /> Shock <br />
            Absorption <br /> System
          </>
        }
        textDesktop={
          <>
            Get ready for a smooth ride like no other. In order to <br />
            deliver a comfortable riding experience In order to <br />
            bring a more comfortable riding experience, the ZING <br />
            E10 is equipped with a spring shock absorption <br />
            system, which can more effectively absorb the bumps <br />
            from sand, grass, and dirt roads. With the patented <br />
            anti-skid tubeless tires, you can just ride smoothly and <br />
            have fun.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={586}
        titleMobile={
          <>
            40mm Front Shock <br />
            Absorption System
          </>
        }
        textMobile={
          <>
            Get ready for a smooth ride like no other. In order <br />
            to deliver a comfortable riding experience In order <br />
            to bring a more comfortable riding experience, the <br />
            ZING E10 is equipped with a spring shock <br />
            absorption system, which can more effectively <br />
            absorb the bumps from sand, grass, and dirt roads. <br />
            With the patented anti-skid tubeless tires, you can <br />
            just ride smoothly and have fun.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            One-Click <br />
            Switch
          </>
        }
        textDesktop={
          <>
            The one-click switch allows you to switch <br />
            between three riding modes: sports, cruise, <br />
            and *safety. All at the click of a switch when <br />
            you start your ride.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={417}
        titleMobile={<>One-Click Switch</>}
        textMobile={
          <>
            The one-click switch allows you to switch between <br />
            three riding modes: sports, cruise, and *safety. All <br />
            at the click of a switch when you start your ride.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="type-9"
        titleDesktop={
          <>
            Thumb <br />
            Throttle
          </>
        }
        textDesktop={
          <>
            The thumb throttle has moderate resistance and <br />
            responsiveness, which is convenient for riders to <br />
            control the driving speed and fully enjoy the <br />
            fun of &quot;driving&quot;.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={399}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={428}
        titleMobile={<>Thumb Throttle </>}
        textMobile={
          <>
            The thumb throttle has moderate resistance and <br />
            responsiveness, which is convenient for riders to <br />
            control the driving speed and fully enjoy the <br />
            fun of &quot;driving&quot;.
          </>
        }
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways[5]} />
      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ZING E12</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter
            <br />
            <b>ZING E12</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={497}
        imgMobile={FormWarrancy_mobile}
        widthMobile={343}
        heightMobile={354}
        customClass="zing-e-12"
        item={allData.segways[5]}
      />
      <OtherModelsDinamic items={allData.segways} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={allData.segways[5].galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.segways[5],
      preparedProtection: data.accessoeries[2]
    }
  };
}
