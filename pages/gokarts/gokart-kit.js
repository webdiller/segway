import dynamic from 'next/dynamic';
import { data } from '@/base/data-test';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/gocart-kit/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/gocart-kit/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));

import featuresIcon_1 from '@/base/gocart-kit/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/gocart-kit/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/gocart-kit/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/gocart-kit/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/gocart-kit/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/gocart-kit/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/gocart-kit/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/gocart-kit/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: 'HOLLOW', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: '0.2W LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '15 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '9 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '10%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '220 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: '6AA', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/gocart-kit/overview-desktop.jpg';
import OverviewImgMobile from '@/base/gocart-kit/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/gocart-kit/features/feature-1-desktop.jpg';
import FeatureSimple_2_desktop from '@/base/gocart-kit/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/gocart-kit/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/gocart-kit/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/gocart-kit/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/gocart-kit/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/gocart-kit/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/gocart-kit/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/gocart-kit/features/feature-5-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));
const FeatureLiteDinamic = dynamic(() => import('@/sections/Feature/FeatureLite'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import { CompareModels, Model } from '@/sections/CompareModels';

import FormWarrancy_desktop from '@/base/gocart-kit/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/gocart-kit/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {

  return (
    <>
      <CustomHead title="SEGWAY Ninebot Gokart Kit" />
      <Welcome
        bundles={[allData.bundles[0], allData.bundles[1]]}
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Gokart Kit
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Gokart <br />
            Kit
          </>
        }
        currentSegway={product}
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

      <PackingListDinamic packingListYoutubeEmbedId={product.packingListYoutubeEmbedId} packingListImg={product.packingListImg} />
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
        titleDesktop={<>Overview <br /> SEGWAY Ninebot GOKART KIT</>}
        titleMobile={<>Overview</>}
        subtitle={<>SEGWAY Ninebot GOKART KIT</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <FeatureLiteDinamic
        customClass="gokart-kit"
        image={FeatureSimple_1_desktop}
        title={
          <>
            Quickly Convert Your Ninebot <br />
            INTO A GOKART
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="type-12"
        titleDesktop={
          <>
            Designed to <br />
            Fit Most Riders
          </>
        }
        textDesktop={
          <>
            The Ninebot Gokart was designed with an <br />
            adjustable frame and steering wheel to fit <br />
            riders between 4&apos; 5&quot; to 6&apos; 3&quot; (130 cm - 190 <br />
            cm). The Ninebot Gokart has a maximum <br />
            payload of 220 pounds (100 kg).
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={436}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={548}
        titleMobile={<>Designed to Fit Most Riders</>}
        textMobile={
          <>
            The Ninebot Gokart was designed with an <br />
            adjustable frame and steering wheel to fit riders <br />
            between 4&apos; 5&quot; to 6&apos; 3&quot; (130 cm - 190 cm). The <br />
            Ninebot Gokart has a maximum payload of 220 <br /> pounds (100 kg).
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="type-11"
        titleDesktop={
          <>
            Redundant <br />
            Power <br />
            Application
          </>
        }
        textDesktop={
          <>
            Wired (main) and Bluetooth wireless (standby) <br />
            communication methods are used for communication <br />
            between the controller of the Ninebot Gokart and the <br />
            balance scooter; when the controller detects a <br />
            malfunction of the wired communication, it will switch <br />
            to Bluetooth communication instantly.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={454}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={428}
        titleMobile={<>Redundant Power Application</>}
        textMobile={
          <>
            Wired (main) and Bluetooth wireless (standby) <br />
            communication methods are used for <br />
            communication between the controller of the <br />
            Ninebot Gokart and the balance scooter; when <br />
            the controller detects a malfunction of the wired <br />
            communication, it will switch to Bluetooth <br />
            communication instantly.
          </>
        }
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-13"
        titleDesktop={
          <>
            Fun For Kids <br />
            of All Ages
          </>
        }
        textDesktop={
          <>
            The adjustable frame makes the Ninebot Gokart suitable <br />
            for people of all ages. Create memorable experiences on <br />
            your Gokart with your family.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={405}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={395}
        titleMobile={<>Fun For Kids of All Ages</>}
        textMobile={
          <>
            The adjustable frame makes the Ninebot Gokart <br />
            suitable for people of all ages. Create <br />
            memorable experiences on your Gokart with <br />
            your family.
          </>
        }
      />

      {/* 4 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-img-auto',
          'lg-justify-content-center',
          'lg-align-items-end',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-start',
          'sm-align-items-center',
          'sm-text-center',
        ]}
        titleDesktop={
          <>
            Convenient <br />
            and Portable
          </>
        }
        textDesktop={
          <>
            Collapsible for convenient portability, the Ninebot Gokart <br />
            Kit fits in the trunk of most cars so you can bring it <br />
            wherever you want to ride!
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={395}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={399}
        titleMobile={<>Convenient and Portable</>}
        textMobile={
          <>
            Collapsible for convenient portability, the <br />
            Ninebot Gokart Kit fits in the trunk of most cars <br />
            so you can bring it wherever you want to ride!
          </>
        }
      />

      <DownloadManualDinamic manualImgPath={product.manualImgPath} downloadManualHref={product.downloadManual} />

      <CompareModels>
        <Model hideIcons={true} width={206} height={144} model={product} />
        <Model width={206} height={144} model={allData.gokarts[0]} />
      </CompareModels>

      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> <b>GoKart KIT</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> <b>GoKart KIT</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={496}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={343}
        heightMobile={323}
        customClass="ks-e-45"
        item={product}
      />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={product.galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  const currentProduct = data.gokarts.find(({ id }) => id == 'id=015&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}
