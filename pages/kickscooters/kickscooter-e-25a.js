import dynamic from 'next/dynamic';
import { data } from '@/base/data-test';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

// FIXME: Отрефакторить, сделать указание картинки в файле
import FeaturesDesktopImage from '@/base/ks-e25a/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-e25a/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

// FIXME: Отрефакторить, сделать указание в файле
import featuresIcon_1 from '@/base/ks-e25a/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-e25a/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-e25a/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-e25a/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-e25a/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-e25a/features-icons/feature-6.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '10W', description: 'Front LED Lights' },
  { icon: featuresIcon_2, title: '18 mph', description: 'Max Speed' },
  { icon: featuresIcon_3, title: '15.5 Miles', description: 'Max Range' },
  { icon: featuresIcon_4, title: '20%', description: 'Hill Grade' },
  { icon: featuresIcon_5, title: "IPX4", description: 'Water-Resistant' },
  { icon: featuresIcon_6, title: '4H', description: 'Fast Charging' },
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-e25a/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-e25a/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-e25a/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-e25a/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-e25a/features/feature-2-desktop.jpg';
import FeatureSimple_3_desktop from '@/base/ks-e25a/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-e25a/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-e25a/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-e25a/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-e25a/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-e25a/features/feature-5-mobile.jpg';
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));
const FeatureLiteDinamic = dynamic(() => import('@/sections/Feature/FeatureLite'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayPhoneHolderDinamic = dynamic(() => import('@/sections/SegwayPhoneHolder'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-e25a/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-e25a/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {

  return (
    <>
      <CustomHead title="Kickscooter E25A" ></CustomHead>
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter E25A
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            E25A
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
            Ninebot Kickscooter E25A
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter E25A</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
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
            Innovative Thread <br />
            Locking Technology
          </>
        }
        textDesktop={
          <>
            The vehicle body adopt the innovative thread <br />
            locking technology used in high-speed bullet <br />
            trains, and are strictly tested. After undergoing <br />
            6213 miles of , the frame of the E45 is still <br />
            in tip top shape.
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
            Innovative Thread <br />
            Locking Technology
          </>
        }
        textMobile={
          <>
            The vehicle body adopt the innovative thread <br />
            locking technology used in high-speed bullet <br />
            trains, and are strictly tested. After undergoing <br />
            6213 miles of , the frame of the E45 is still <br />
            in tip top shape.
          </>
        }
      />

      {/* 2 */}
      <FeatureLiteDinamic
        image={FeatureSimple_2_desktop}
        title={<>One-step Folding Mechanism</>}
        text={<>Ninebot KickScooter E25A can be easily folded <br /> and carried around in 3 seconds.</>}
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
            Smart Battery <br />
            Management System
          </>
        }
        textDesktop={
          <>
            The BMS system at Segway-Ninebot has undergone 7 years <br />
            of continuous technological development and produced 300 <br />
            million batteries. We are devoted to extending the battery <br />
            life, ensuring user safety, and accurate power display
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={
          <>
            Smart Battery <br />
            Management System
          </>
        }
        textMobile={
          <>
            The BMS system at Segway-Ninebot has <br />
            undergone 7 years of continuous technological <br />
            development and produced 300 million batteries. <br />
            We are devoted to extending the battery life, <br />
            ensuring user safety, and accurate power display

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
          'sm-align-items-center',
          'sm-text-center',
        ]}
        titleDesktop={
          <>
            9” Non- <br />
            Pneumatic <br />
            Tires
          </>
        }
        textDesktop={
          <>
            Three years in the making, the new inner <br />
            support technology has higher resilience than <br />
            ordinary solid tires, and is maintenance-free <br />
            with high shock absorption. The 9 inch wheel <br />
            size also provides additional comfort when <br />
            riding through tough terrains.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={668}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={437}
        titleMobile={
          <>
            9” Non-Pneumatic Tires
          </>
        }
        textMobile={
          <>
            Three years in the making, the new inner <br />
            support technology has higher resilience than <br />
            ordinary solid tires, and is maintenance-free with <br />
            high shock absorption. The 9 inch wheel size <br />
            also provides additional comfort when riding <br />
            through tough terrains.
          </>
        }
      />

      {/* 5 */}
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
            Innovative Thread <br />
            Locking Technology
          </>
        }
        textDesktop={
          <>
            The vehicle body adopt the innovative thread <br />
            locking technology used in high-speed bullet <br />
            trains, and are strictly tested. After undergoing <br />
            6213 miles of , the frame of the E45 is still <br />
            in tip top shape.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={
          <>
            Innovative Thread <br />
            Locking Technology
          </>
        }
        textMobile={
          <>
            The vehicle body adopt the innovative thread <br />
            locking technology used in high-speed bullet <br />
            trains, and are strictly tested. After undergoing <br />
            6213 miles of , the frame of the E45 is still <br />
            in tip top shape.
          </>
        }
      />

      <DownloadManualDinamic manualImgPath={product.manualImgPath} downloadManualHref={product.downloadManual} />
      <CompareSpecificationsDinamic
        items={allData.kickskooters}
        mainSegway={product} />
      <SegwayPhoneHolderDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      {/* FIXME: Заменить на hone holder */}
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>E25A</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>E25A</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={852}
        heightDesktop={470}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={248}
        customClass="ks-e-45"
        item={product}
      />

      <OtherModelsDinamic items={allData.kickskooters} />
      <DiscountModalDinamic />
      <FancyModal images={product.galleryImages} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  const currentProduct = data.kickskooters.find(({ id }) => id == 'id=019&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}
