import dynamic from 'next/dynamic';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

import { data } from '@/base/data-test';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-es4/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-es4/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-es4/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-es4/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-es4/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-es4/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-es4/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-es4/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-es4/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-es4/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '8 & 7.5”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '18.6 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '28 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '15%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '55-220 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: 'Dual', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-es4/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-es4/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-es4/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-es4/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-es4/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-es4/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-es4/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-es4/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-es4/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-es4/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-es4/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-es4/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-es4/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-es4/features/feature-6-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-es4/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-es4/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {

  return (
    <>
      <CustomHead title="Kickscooter ES 4" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter ES4
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            ES4
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
        width={1376}
        height={802}
        mobileWidth={375}
        mobileHeight={406}
        imageAltText="Background image before features block"
        desktopImage={FeaturesDesktopImage}
        mobileImage={FeaturesMobileImage}
      />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic titleDesktop={
        <>
          KickScooter overview <br />
          Segway Ninebot Kickscooter ES4
        </>
      }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter ES4</>} desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={<>A Real Powerhouse</>}
        textDesktop={
          <>
            Experience greater power, range, and speed. With an internal <br />
            and external lithium ion battery, the Ninebot KickScooter by <br />
            Segway ES4 has a top speed of nearly 19 mph and a range of <br />
            up to 28 miles. The bar for high-performance e-scooters has <br />
            been raised.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={408}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={495}
        titleMobile={<>A Real Powerhouse</>}
        textMobile={
          <>
            Experience greater power, range, and speed. With <br />
            an internal and external lithium ion battery, the <br />
            Ninebot KickScooter by Segway ES4 has a top <br />
            speed of nearly 19 mph and a range of up to 28 <br />
            miles. The bar for high-performance e-scooters <br />
            has been raised.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="type-2"
        titleDesktop={
          <>
            The Next Level <br />
            of e-Scooter
          </>
        }
        textDesktop={
          <>
            Equipped with internal and external lithium ion <br />
            batteries, the Ninebot KickScooter by Segway ES4 has <br />
            a nominal capacity doubling that of the ES2. Travel <br />
            farther and reach your destination quicker than ever <br />
            before. The extra power comes with controlled <br />
            acceleration for a smoother ride and a cruise control <br />
            option so you can ride in comfort. Thanks to the <br />
            textured anti-slip handle, you’ll enjoy better <br />
            grip and control.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={424}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={514}
        titleMobile={<>The Next Level of e-Scooter</>}
        textMobile={
          <>
            Equipped with internal and external lithium ion <br />
            batteries, the Ninebot KickScooter by Segway <br />
            ES4 has a nominal capacity doubling that of the <br />
            ES2. Travel farther and reach your destination <br />
            quicker than ever before. The extra power comes <br />
            with controlled acceleration for a smoother ride <br />
            and a cruise control option so you can ride in <br />
            comfort. Thanks to the textured anti-slip handle, <br />
            you’ll enjoy better <br />
            grip and control.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            More Powerful <br />
            Battery
          </>
        }
        textDesktop={
          <>
            The Ninebot KickScooter by Segway ES4 battery is a powerhouse, clocking <br />
            in witha capacity of 374 Wh, with a nominal power of 300 W and a peak <br />
            power of 800 W. The batteries have overheating, short circuit, overcurrent, <br />
            and over-charge protection, ensuring hundreds of cycles without <br />
            compromising max capacity. Each ES4 comes with both an internal and <br />
            removable external lithium ion battery.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={<>More Powerful Battery</>}
        textMobile={
          <>
            The Ninebot KickScooter by Segway ES4 battery <br />
            is a powerhouse, clocking in witha capacity of 374 <br />
            Wh, with a nominal power of 300 W and a peak <br />
            power of 800 W. The batteries have overheating, <br />
            short circuit, overcurrent, and over-charge <br />
            protection, ensuring hundreds of cycles without <br />
            compromising max capacity. Each ES4 comes with <br />
            both an internal and removable external lithium ion <br />
            battery.
          </>
        }
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            Lightweight <br /> & Foldable
          </>
        }
        textDesktop={
          <>
            The one-click folding system allows this <br />
            lightweight electric Ninebot by Segway <br />
            KickScooter ES4 to be carried on public <br />
            transportation, stored in your car and more. It <br />
            conveniently goes anywhere.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={429}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={394}
        titleMobile={<>Lightweight & Foldable</>}
        textMobile={
          <>
            The one-click folding system allows this <br />
            lightweight electric Ninebot by Segway <br />
            KickScooter ES4 to be carried on public <br />
            transportation, stored in your car and more. It <br />
            conveniently goes anywhere.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Superior <br />
            Technology
          </>
        }
        textDesktop={
          <>
            The built-in LED display shows your speed and <br />
            remaining battery life, so you always have the <br />
            information you need. Turn on the headlight with a <br />
            quick click of the power button. Customize the color <br />
            of the rear and side lights to suit your style while <br />
            providing increased visibility during low light <br />
            conditions.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={455}
        titleMobile={<>Superior Technology</>}
        textMobile={
          <>
            The built-in LED display shows your speed and <br />
            remaining battery life, so you always have the <br />
            information you need. Turn on the headlight with a <br />
            quick click of the power button. Customize the <br />
            color of the rear and side lights to suit your style <br />
            while providing increased visibility during low light <br />
            conditions.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-2"
        titleDesktop={
          <>
            Built for <br />
            Performance <br />
            and Comfort
          </>
        }
        textDesktop={
          <>
            The Ninebot KickScooter by Segway ES4 has <br />
            built-in front and rear shock absorbers to provide <br />
            a smooth ride even at high speeds. It features <br />
            electrical and mechanical brakes for increased <br />
            safety.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={475}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={473}
        titleMobile={
          <>
            Built for Performance <br />
            and Comfort
          </>
        }
        textMobile={
          <>
            The Ninebot KickScooter by Segway ES3 has built- <br />
            in front shock absorption to provide a smooth ride <br />
            even at high speeds. It features electrical and <br />
            mechanical brakes for increased safety.
          </>
        }
      />

      <DownloadManualDinamic manualImgPath={product.manualImgPath} downloadManualHref={product.downloadManual} />
      <CompareSpecificationsDinamic items={allData.kickskooters} mainSegway={product} />
      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>ES4</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ES4</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={product}
      />
      <OtherModelsDinamic items={allData.kickskooters} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={product.galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  const currentProduct = data.kickskooters.find(({ id }) => id == 'id=010&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}