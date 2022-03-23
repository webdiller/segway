import dynamic from 'next/dynamic';
import { data } from '@/base/data';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/gocart-pro/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/gocart-pro/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/gocart-pro/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/gocart-pro/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/gocart-pro/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/gocart-pro/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/gocart-pro/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/gocart-pro/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/gocart-pro/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/gocart-pro/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '96Nm', description: 'Max Torque' },
  { icon: featuresIcon_2, title: '0.2W LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '23 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '15.5 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '15%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '220 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: '432Wh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/gocart-pro/overview-desktop.jpg';
import OverviewImgMobile from '@/base/gocart-pro/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/gocart-pro/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/gocart-pro/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/gocart-pro/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/gocart-pro/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/gocart-pro/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/gocart-pro/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/gocart-pro/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/gocart-pro/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/gocart-pro/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/gocart-pro/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/gocart-pro/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/gocart-pro/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/gocart-pro/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/gocart-pro/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import { CompareModels, Model } from '@/sections/CompareModels';

import FormWarrancy_desktop from '@/base/gocart-pro/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/gocart-pro/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="SEGWAY Ninebot Gocart Pro" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Gocart Pro
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Gocart <br />
            Pro
          </>
        }
        currentSegway={allData.gocarts[0]}
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
      <PackingListDinamic packingListImg={allData.gocarts[0].packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        desktopWidth={1376}
        desktopHeight={567}
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
            Overview <br /> SEGWAY Ninebot GOKART PRO
          </>
        }
        titleMobile={<>Overview</>}
        subtitle={<>SEGWAY Ninebot GOKART PRO</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Four Driving <br />
            Modes
          </>
        }
        textDesktop={
          <>
            Suitable for beginners and professionals, <br />
            everyone can enjoy the ride.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={408}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={405}
        titleMobile={<>Four Driving Modes</>}
        textMobile={
          <>
            Suitable for beginners and professionals, <br />
            everyone can enjoy the ride.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            Auto Hold <br />
            System
          </>
        }
        textDesktop={
          <>
            The automatic holding system can prevent <br /> slippage when the Gokart Pro is parked <br />
            on a slope.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={436}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={427}
        titleMobile={<>Auto Hold System</>}
        textMobile={
          <>
            The automatic holding system can prevent <br /> slippage when the Gokart Pro is parked <br /> on a slope.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Take it <br />
            Everywhere
          </>
        }
        textDesktop={
          <>
            The Ninebot Gokart PRO is collapsible to fit into most <br /> vehicle trunks, allowing you to take it wherever <br />
            you want to go.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={405}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={505}
        titleMobile={<>Take it Everywhere</>}
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
        customClass="type-11"
        titleDesktop={
          <>
            Special <br /> Drifting TPE <br /> Rear Tires
          </>
        }
        textDesktop={
          <>
            The cutting-edge TPE rear tires bring users the <br />
            most exciting drifting experience ever. The <br />
            controllable rear-end and high-speed cornering <br />
            make it easier to show off drifting techniques <br />
            just like a professional racer.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={395}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={473}
        titleMobile={<>Special Drifting TPE Rear Tires</>}
        textMobile={
          <>
            The cutting-edge TPE rear tires bring users the <br />
            most exciting drifting experience ever. The <br />
            controllable rear-end and high-speed cornering <br />
            make it easier to show off drifting techniques <br />
            just like a professional racer.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="type-9"
        titleDesktop={
          <>
            High-Strength <br /> Steel Frame
          </>
        }
        textDesktop={
          <>
            The Ninebot Gokart PRO comes with a high-strength <br />
            steel frame that can carry a payload of up to 220 lbs <br />
            and reduces chassis flex during <br />
            high-performance driving.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={424}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={414}
        titleMobile={<>High-Strength Steel Frame</>}
        textMobile={
          <>
            The Ninebot Gokart PRO comes with a high-
            <br />
            strength steel frame that can carry a payload of up <br />
            to 220 lbs and reduces chassis flex during <br />
            high-performance driving.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-11"
        titleDesktop={
          <>
            High-Traction <br /> Steering <br /> Wheel
          </>
        }
        textDesktop={
          <>
            The high-traction steering wheel <br /> provides riders with maximum control.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={395}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={353}
        titleMobile={<>High-Traction Steering Wheel</>}
        textMobile={
          <>
            The high-traction steering wheel <br /> provides riders with maximum control.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="type-9"
        titleDesktop={
          <>
            Dual Communication <br />
            Technology
          </>
        }
        textDesktop={
          <>
            Dual-channel transmission systems consisting of <br />
            wire transmission and Bluetooth transmission will <br />
            guarantee stable communication.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={399}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={428}
        titleMobile={
          <>
            Dual Communication <br />
            Technology
          </>
        }
        textMobile={
          <>
            Dual-channel transmission systems consisting of <br /> wire transmission and Bluetooth transmission will <br />
            guarantee stable communication.
          </>
        }
      />

      <DownloadManualDinamic />

      <CompareModels>
        <Model width={206} height={144} model={allData.gocarts[0]} />
        <Model hideIcons={true} width={206} height={144} model={allData.gocarts[1]} />
      </CompareModels>

      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter MAX
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> MAX
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={852}
        heightDesktop={470}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={248}
        customClass="ks-e-45"
        item={allData.gocarts[0]}
      />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={allData.gocarts[0].galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.gocarts[0],
      preparedProtection: data.accessoeries[2]
    }
  };
}
