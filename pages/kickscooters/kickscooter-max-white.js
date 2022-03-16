import dynamic from 'next/dynamic';
import { data } from '@/base/data';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-max-white/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-max-white/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-max-white/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-max-white/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-max-white/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-max-white/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-max-white/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-max-white/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-max-white/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-max-white/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '10”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '18.6 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '40.4 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '20%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: 'IPX5', description: 'Water-Resistant' },
  { icon: featuresIcon_7, title: '6H', description: 'Fast Charging' },
  { icon: featuresIcon_8, title: '551Wh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-max-white/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-max-white/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-max-white/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-max-white/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-max-white/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-max-white/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-max-white/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-max-white/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-max-white/features/feature-4-desktop.jpg';
import FeatureSimple_5_desktop from '@/base/ks-max-white/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-max-white/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-max-white/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-max-white/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-max-white/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-max-white/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));
const FeatureLiteDinamic = dynamic(() => import('@/sections/Feature/FeatureLite'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-max-white/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-max-white/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), { ssr: false });
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter Max White" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter MAX
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            MAX
          </>
        }
        currentSegway={allData.segways.adultSegways[6]}
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
      <PackingListDinamic packingListImg={allData.segways.adultSegways[6].packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        desktopWidth={1376}
        desktopHeight={802}
        mobileWidth={375}
        mobileHeight={406}
        imageAltText="Background image before features block"
        desktopImage={FeaturesDesktopImage}
        mobileImage={FeaturesMobileImage}
      />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic titleDesktop={
        <>
          OvKickScooter overviewerview <br />
          Segway Ninebot Kickscooter MAX
        </>
      }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter MAX</>} desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Smart battery <br />
            Management system <br />
            (Smart-BMS)
          </>
        }
        textDesktop={
          <>
            The Smart-BMS closely monitors the battery status <br />
            with multiple protection mechanisms to ensure the <br />
            battery durability
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={
          <>
            Smart battery <br />
            Management system <br />
            (Smart-BMS)
          </>
        }
        textMobile={
          <>
            The Smart-BMS closely monitors the battery status <br />
            with multiple protection mechanisms to ensure the <br />
            battery durability
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            Dual Braking <br />
            System
          </>
        }
        textDesktop={
          <>
            Simultaneous mechanical front drum brake
            <br />
            and regenerative electric back brake provide
            <br />
            both stability and steerability.
            <br />
            <br />
            *IPX5 water resistance
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={507}
        titleMobile={<>Dual Braking System</>}
        textMobile={
          <>
            Simultaneous mechanical front drum brake and <br />
            regenerative electric back brake provide both <br />
            stability and steerability.
            <br />
            <br />
            *IPX5 water resistance
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Built-In Front <br />
            LED Light
          </>
        }
        textDesktop={
          <>
            Front-facing lights are designed with 2.5w high-brightness LED light to <br />
            illuminate the path ahead of you and increase your visibility to others <br />
            around you.
          </>
        }
        descriptionDesktop="*Disclaimer: for your safety, please try not to ride at night"
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={<>Built-In Front LED Light</>}
        textMobile={
          <>
            Front-facing lights are designed with 2.5w high- <br />
            brightness LED light to illuminate the path <br />
            ahead of you and increase your visibility to <br />
            others around you.
          </>
        }
        descriptionMobile="*Disclaimer: for your safety, please try not to ride at night"
      />

      {/* 4 */}
      <FeatureLiteDinamic image={FeatureSimple_4_desktop} title="One-step Folding Mechanism" text={<>Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.</>} />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Regenerative Brake for <br /> Power Recycle
          </>
        }
        textDesktop={
          <>
            The innovative regenerative brake system turns Ninebot KickScooter MAX <br /> into an electric vehicle powered by electricity and recycled energy from <br /> riding. Energy will be
            collected from regenerative braking <br /> and distributed when you need a boost.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={
          <>
            Regenerative Brake <br /> for Power Recycle
          </>
        }
        textMobile={
          <>
            The innovative regenerative brake system turns <br /> Ninebot KickScooter MAX into an electric vehicle <br /> powered by electricity and recycled energy from <br /> riding. Energy will be
            collected from regenerative <br /> braking and distributed when you need a boost.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-3"
        titleDesktop={
          <>
            Rear-wheel drive <br /> for the best <br /> driving experience
          </>
        }
        textDesktop={
          <>
            The KickScooter MAX G30LE can climb slopes up <br /> to 20 % thanks to its powerful motor, allowing it to <br /> go uphill easily. In addition, the rear-wheel drive <br /> offers better
            acceleration stability and power <br /> efficiency.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={
          <>
            Rear-wheel drive for the best <br /> driving experience
          </>
        }
        textMobile={
          <>
            The KickScooter MAX G30LE can climb slopes up <br /> to 20 % thanks to its powerful motor, allowing it to go uphill easily. In addition, the rear-wheel drive <br /> offers better
            acceleration stability and power <br /> efficiency.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="content-top-mobile"
        titleDesktop={
          <>
            Choose your Riding <br /> mode on the LED <br /> Digital Dashboard
          </>
        }
        textDesktop={
          <>
            The LED digital dashboard can not only show you <br /> the battery level, speed information, Bluetooth <br /> connectivity at a glance, but can also allow you <br /> to easily choose one
            of the 3 riding modes. <br /> By clicking twice on the intuitive LED dashboard, you <br /> can directly switch between Eco, Standard, and <br /> Sports modes, depending on your envy and
            your <br /> riding style.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={354}
        titleMobile={
          <>
            Choose your Riding <br /> mode on the LED <br /> Digital Dashboard
          </>
        }
        textMobile={
          <>
            The LED digital dashboard can not only show you <br /> the battery level, speed information, Bluetooth <br /> connectivity at a glance, but can also allow you to <br /> easily choose one
            of the 3 riding modes. <br /> By clicking twice on the intuitive LED dashboard, <br /> you can directly switch between Eco, Standard, <br /> and Sports modes, depending on your envy and
            <br /> your riding style.
          </>
        }
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[6]} />
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
        customClass="wide-image"
        item={allData.segways.adultSegways[6]}
      />

      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[6]} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={allData.segways.adultSegways[6].galleryImages} />
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
