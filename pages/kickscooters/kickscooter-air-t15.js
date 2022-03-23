import dynamic from 'next/dynamic';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

import { data } from '@/base/data';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-air-t15/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-air-t15/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-air-t15/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-air-t15/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-air-t15/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-air-t15/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-air-t15/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-air-t15/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-air-t15/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-air-t15/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '6 & 7.5”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '12.4 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '9.3 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '15%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '66-220 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: '4650mAh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-air-t15/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-air-t15/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-air-t15/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-air-t15/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-air-t15/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-air-t15/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-air-t15/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-air-t15/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-air-t15/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-air-t15/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-air-t15/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-air-t15/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-air-t15/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-air-t15/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-air-t15/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-air-t15/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-air-t15/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-air-t15/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter AIR T15" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot
            <br />
            Kickscooter
            <br />
            AIR t15
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot
            <br />
            Kickscooter <br />
            ES1L
          </>
        }
        currentSegway={allData.segways[7]}
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
      <PackingListDinamic packingListImg={allData.segways[7].packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        width={1376}
        height={802}
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
            Segway Ninebot Kickscooter AIR T15
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter AIR T15</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Ninebot <br /> kickscooter air t15
            <br />
          </>
        }
        textDesktop={
          <>
            is the most compact, lightweight, and energy-efficient electric
            <br />
            kickscooter ever introduced to navigate in a city environment.
            <br />
            <br />
            The design is a perfect fit for the urban lifestyle and is best for <br /> completing your last-mile commute, carrying on mass transportation <br /> and storing in cars. The unique sleek
            and futuristic appearance of the <br /> Air T15 makes it one of a kind from other scooters in the market.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={781}
        titleMobile={
          <>
            Ninebot <br /> kickscooter air t15
            <br />
          </>
        }
        textMobile={
          <>
            is the most compact, lightweight, and energy-
            <br />
            efficient electric kickscooter ever introduced to
            <br /> navigate in a city environment.
            <br />
            <br />
            The design is a perfect fit for the urban lifestyle
            <br />
            and is best for completing your last-mile commute,
            <br />
            carrying on mass transportation and storing in
            <br />
            cars. The unique sleek and futuristic appearance
            <br /> of the Air T15 makes it one of a kind from other
            <br />
            scooters in the market.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            Innovative <br />
            Regenerative <br />
            Braking System
          </>
        }
        textDesktop={
          <>
            The innovative regenerative brake system <br />
            turns your e-scooter into an electric vehicle <br />
            powered by electricity and recycled energy <br />
            from riding. The wheels are able to transform <br />
            the energy that is captured during braking <br />
            into power and to store it in the integrated <br />
            lithium battery pack.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={547}
        titleMobile={
          <>
            Innovative Regenerative <br />
            Braking System
          </>
        }
        textMobile={
          <>
            The innovative regenerative brake system turns <br />
            your e-scooter into an electric vehicle powered by <br />
            electricity and recycled energy from riding. The <br />
            wheels are able to transform the energy that is <br />
            captured during braking into power and to store it <br />
            in the integrated lithium battery pack.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            One-sec Folding <br />
            Mechanism with <br />
            Retractable <br />
            Handlebars
          </>
        }
        textDesktop={
          <>
            The Air T15 can be folded in half with just one click. <br />
            When the KickScooter is folded, the handlebar will <br />
            self-retract, leaving you with a hassle-free user <br />
            experience like no other.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={
          <>
            One-sec Folding Mechanism <br />
            with Retractable Handlebars
          </>
        }
        textMobile={
          <>
            The Air T15 can be folded in half with just one <br />
            click. When the KickScooter is folded, the <br />
            handlebar will self-retract, leaving you with a <br />
            hassle-free user experience like no other.
          </>
        }
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={
          <>
            Smart App <br />
            Connectivity
          </>
        }
        textDesktop={
          <>
            The Segway-Ninebot App is available on iOS <br />
            and Android integration with Bluetooth <br />
            connectivity, allowing you to customize LED <br />
            ambient light colors, view live riding stats <br />
            dashboard, and more.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={667}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={569}
        titleMobile={<>Smart App Connectivity</>}
        textMobile={
          <>
            The Segway-Ninebot App is available on iOS <br />
            and Android integration with Bluetooth <br />
            connectivity, allowing you to customize LED <br />
            ambient light colors, view live riding stats <br />
            dashboard, and more.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Fold-In-Half <br />
            With 8.7 inches <br />
            Height
          </>
        }
        textDesktop={
          <>
            Unlike many other folding kickscooters available in the <br />
            market, Air T15 folds in half just like a paper. Once folded, <br />
            Air T15 is only 8.7 inches in height. The folded body size is <br />
            flat and compact, which can be easily stored whether it’s <br />
            on the subway or in your car trunk.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={454}
        titleMobile={
          <>
            Fold-In-Half With 8.7 <br />
            inches Height
          </>
        }
        textMobile={
          <>
            Unlike many other folding kickscooters available in <br />
            the market, Air T15 folds in half just like a paper. <br />
            Once folded, Air T15 is only 8.7 inches in height. <br />
            The folded body size is flat and compact, which <br />
            can be easily stored whether it’s on the subway <br />
            or in your car trunk.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={
          <>
            Four Riding <br />
            Modes
          </>
        }
        textDesktop={
          <>
            The four riding modes allow riders to switch easily <br />
            based on riding occasions. Such modes include <br />
            Pedestrian Mode, Energy-saving Mode, Standard <br />
            Mode and Sport Mode with a preset speed limit of <br />
            3.7 mph (6 km/h), 6.2 mph (10 km/h), <br />
            9.3 mph (15 km/h), and 12.4 mph (20 km/h) respectively.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={446}
        titleMobile={<>Four Riding Modes</>}
        textMobile={
          <>
            The four riding modes allow riders to switch easily <br />
            based on riding occasions. Such modes include <br />
            Pedestrian Mode, Energy-saving Mode, Standard <br />
            Mode and Sport Mode with a preset speed limit of <br />
            3.7 mph (6 km/h), 6.2 mph (10 km/h), 9.3 mph <br />
            (15 km/h), and 12.4 mph (20 km/h) respectively.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="content-top-mobile"
        titleDesktop={<>Bezel-less Dashboard</>}
        textDesktop={
          <>
            The bezel-less dashboard of Air T15 is embedded <br />
            with LED nixie tubes and provides you the <br />
            convenience to monitor the speed, battery life, riding <br />
            modes, Bluetooth connection, cruise control status, <br />
            and error messages of the scooter all in one click.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={535}
        titleMobile={<>Bezel-less Dashboard</>}
        textMobile={
          <>
            The bezel-less dashboard of Air T15 is embedded <br />
            with LED nixie tubes and provides you the <br />
            convenience to monitor the speed, <br />
            battery life, riding modes, Bluetooth <br />
            connection, cruise control status, <br />
            and error messages of the <br />
            scooter all in one click.
          </>
        }
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways[7]} />
      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>AIR T15</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>AIR T15</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={514}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={allData.segways[7]}
      />

      <OtherModelsDinamic items={allData.segways} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={allData.segways[7].galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.segways[7],
      preparedProtection: data.accessoeries[2]
    }
  };
}
