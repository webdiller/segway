import dynamic from 'next/dynamic';
import { data } from '@/base/data-test';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

// FIXME: Отрефакторить, сделать указание картинки в файле
import FeaturesDesktopImage from '@/base/ks-zing-c8/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-zing-c8/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

// FIXME: Отрефакторить, сделать указание в файле
import featuresIcon_1 from '@/base/ks-zing-c8/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-zing-c8/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-zing-c8/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-zing-c8/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-zing-c8/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-zing-c8/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-zing-c8/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-zing-c8/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '110 lbs', description: 'Payload' },
  { icon: featuresIcon_2, title: '6-12', description: 'Years' },
  { icon: featuresIcon_3, title: '10 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '6.2 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: "3'9''-4'9''", description: 'Height' },
  { icon: featuresIcon_6, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_7, title: '3H', description: 'Fast Charging' },
  { icon: featuresIcon_8, title: '2500mAh', description: 'Battery' }
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-zing-c8/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-zing-c8/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-zing-c8/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-zing-c8/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-zing-c8/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-zing-c8/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-zing-c8/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-zing-c8/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-zing-c8/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-zing-c8/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-zing-c8/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-zing-c8/features/feature-5-mobile.jpg';
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayPhoneHolderDinamic = dynamic(() => import('@/sections/SegwayPhoneHolder'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-zing-c8/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-zing-c8/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter Zing c8" ></CustomHead>
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter Zing c8
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            Zing c8
          </>
        }
        currentSegway={allData.kickskooters[14]}
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
      <PackingListDinamic packingListYoutubeEmbedId={allData.kickskooters[14].packingListYoutubeEmbedId} packingListImg={allData.kickskooters[14].packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        desktopWidth={1376}
        desktopHeight={722}
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
            KickScooter overview Segway<br />
            Ninebot Kickscooter Zing c8
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter Zing c8</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-start',
          'lg-text-left',
          'lg-content-black',

          'sm-justify-content-end'
        ]}
        titleDesktop={
          <>
            Brand-new Electric  <br />
            Operation – Even <br />
            More Fun to Ride
          </>
        }
        textDesktop={
          <>
            &#9679; Safe Mode <br />
            &#9679; Turbo Mode <br />
            &#9679; Cruise Mode
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
            Brand-new Electric Operation <br /> – Even More Fun to Ride
          </>
        }
        textMobile={
          <>
            &#9679; Safe Mode <br />
            &#9679; Turbo Mode <br />
            &#9679; Cruise Mode
          </>
        }
      />

      {/* 2 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-end',
          'lg-text-left',
          'lg-content-black',

          'sm-justify-content-end',
          'sm-align-items-start'
        ]}
        titleDesktop={
          <>
            Ergonomic  <br />
            Design <br />
            For Kids
          </>
        }
        textDesktop={
          <>
            An extra-low pedal, handbrakes with smaller <br />
            gripping distance, and a streamlined curved body <br />
            with no angles. Suitable for 8 to 14-year-olds.
            <br />
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={
          <>
            Ergonomic  <br />
            Design For Kids
          </>
        }
        textMobile={
          <>
            An extra-low pedal, handbrakes with <br />
            smaller gripping distance, and a <br />
            streamlined curved body with no angles. <br />
            Suitable for 8 to 14-year-olds.
          </>
        }
      />

      {/* 3 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-start',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-end'
        ]}
        titleDesktop={
          <>
            Stunning  <br />
            Appearance – Stand <br />
            Out In The Crowd
          </>
        }
        textDesktop={
          <>
            Lightweight body, trendy and lively combinations <br />
            of colors, and a dynamic handlebar design. Ride  <br />
            on, and stand out.
            <br />
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={502}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={
          <>
            Stunning Appearance – Stand <br /> Out In The Crowd

          </>
        }
        textMobile={
          <>
            Lightweight body, trendy and lively  <br />
            combinations of colors, and a dynamic  <br />
            handlebar design. Ride on, and stand out.
          </>
        }
      />

      {/* 4 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-end',
          'lg-text-left',
          'lg-content-black',

          'sm-justify-content-end',
          'sm-align-items-start'
        ]}
        titleDesktop={
          <>
            Safe And  <br />
            Reliable For  <br />
            Worry-Free <br />
            Riding
          </>
        }
        textDesktop={
          <>
            The mechanical contracting handbrake used is <br />
            durable and reliable. It’s built-in switch sensor is  <br />
            capable of detecting braking actions in a real-time <br />
            manner resulting in a quickly cut off power output <br />
            to make braking easier and timelier.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={541}
        titleMobile={
          <>
            Safe And Reliable For <br />
            Worry-Free Riding
          </>
        }
        textMobile={
          <>
            The mechanical contracting handbrake <br />
            used is durable and reliable. It’s built-in <br />
            switch sensor is capable of detecting <br />
            braking actions in a real-time manner <br />
            resulting in a quickly cut off power output <br />
            to make braking easier and timelier.
          </>
        }
      />

      {/* 5 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-start',
          'lg-text-left',
          'lg-content-black',

          'sm-justify-content-end'
        ]}
        titleDesktop={
          <>
            Mechanical <br />
            Braking System
          </>
        }
        textDesktop={
          <>
            Using a durable and reliable mechanical braking <br />
            system with built-in sensor, the scooter can cut off <br />
            the power immediately when the braking action is <br />
            detected. Riders can brake timely with ease.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={552}
        titleMobile={
          <>
            Mechanical <br /> Braking System
          </>
        }
        textMobile={
          <>
            Using a durable and reliable mechanical <br />
            braking system with built-in sensor, the <br />
            scooter can cut off the power immediately <br />
            when the braking action is detected. Riders <br />
            can brake timely with ease.
          </>
        }
      />
      {/* FIXME: Добавить мануал */}
      <DownloadManualDinamic manualImgPath={allData.kickskooters[14].manualImgPath} downloadManualHref={allData.kickskooters[14].downloadManual} />
      <CompareSpecificationsDinamic
        items={allData.kickskooters}
        mainSegway={allData.kickskooters[14]} />
      <SegwayPhoneHolderDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      {/* FIXME: Заменить на hone holder */}
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>Zing c8</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>Zing c8</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={852}
        heightDesktop={470}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={248}
        customClass="ks-e-45"
        item={allData.kickskooters[14]}
      />

      <OtherModelsDinamic items={allData.kickskooters} />
      <DiscountModalDinamic />
      <FancyModal images={allData.kickskooters[14].galleryImages} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.kickskooters[14],
      preparedProtection: data.accessoeries[7]
    }
  };
}
