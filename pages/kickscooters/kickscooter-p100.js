import dynamic from 'next/dynamic';
import { data } from '@/base/data-test';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

// FIXME: Отрефакторить, сделать указание в файле
import featuresIcon_1 from '@/base/ks-p100/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-p100/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-p100/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-p100/features-icons/feature-4.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '264 lbs', description: 'Payload' },
  { icon: featuresIcon_2, title: '21.7 mph', description: 'Max Speed' },
  { icon: featuresIcon_3, title: '40 Miles', description: 'Max Range' },
  { icon: featuresIcon_4, title: '4,5H', description: 'Fast Charging' }
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import FeatureSimple_1_desktop from '@/base/ks-p100/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-p100/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-p100/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-p100/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-p100/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-p100/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-p100/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-p100/features/feature-4-mobile.jpg';
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayPhoneHolderDinamic = dynamic(() => import('@/sections/SegwayPhoneHolder'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-p100/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-p100/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter P100" ></CustomHead>
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter P100
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            P100
          </>
        }
        currentSegway={allData.kickskooters[17]}
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
      <PackingListDinamic packingListYoutubeEmbedId={allData.kickskooters[17].packingListYoutubeEmbedId} packingListImg={allData.kickskooters[17].packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      {/* 1 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-center',
          'lg-text-center',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            A powerful city <br />
            cross-over
          </>
        }
        textDesktop={
          <>
            The Segway KickScooter P100SE is the ride you&apos;ve been looking for <br />
            when it comes to long commutes. With our longest range of up to 100 <br />
            km, this is what you need for traversing your city. This KickScooter <br />
            comes with our boldest technology yet. When turning on this model, a <br />
            welcome light will be projected onto the ground by the KickScooter. <br />
            Cool, right?
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={522}
        titleMobile={
          <>
            A powerful city cross-over
          </>
        }
        textMobile={
          <>
            The Segway KickScooter P100SE is the ride you&apos;ve <br />
            been looking for when it comes to long commutes. <br />
            With our longest range of up to 100 km, this is <br />
            what you need for traversing your city. This <br />
            KickScooter comes with our boldest technology <br />
            yet. When turning on this model, a welcome light <br />
            will be projected onto the ground by the <br />
            KickScooter. Cool, right?
          </>
        }
      />

      {/* 2 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-start',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            Discover new horizons thanks <br />
            to SegPower Cross Season tyres <br />
            and dual suspension
          </>
        }
        textDesktop={
          <>
            Challenge the new SegPower Cross Season tyres which allows you to ride in <br />
            rough weather conditions and are also self-healing, thanks to the jelly layer inside <br />
            the tyres. <br /><br />

            In addition to these new designed tyres, the Segway KickScooter P100SE also <br />
            benefit from both front and rear suspension shock absorbers. This ensures at the <br />
            same time a comfortable and safe riding experience. <br /><br />

            The combination of the large all-weather 10.5 inch tyres and dual suspensions <br />
            means that you can ride on more challenging surfaces.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={800}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={700}
        titleMobile={
          <>
            Discover new horizons thanks <br />
            to SegPower Cross Season <br />
            tyres <br />
            and dual suspension
          </>
        }
        textMobile={
          <>
            Challenge the new SegPower Cross Season tyres <br />
            which allows you to ride in rough weather <br />
            conditions and are also self-healing, thanks to the <br />
            jelly layer inside the tyres. <br /><br />

            In addition to these new designed tyres, the <br />
            Segway KickScooter P100SE also benefit from <br />
            both front and rear suspension shock absorbers. <br />
            This ensures at the same time a comfortable and <br />
            safe riding experience. <br /><br />

            The combination of the large all-weather 10.5 inch <br />
            tyres and dual suspensions means that you can <br />
            ride on more challenging surfaces.
          </>
        }
      />

      {/* 3 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-end',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            Welcoming &lsquo;&lsquo;Segway&lsquo;&lsquo; <br />
            ambient lights
          </>
        }
        textDesktop={
          <>
            Do you want to stand out from other KickScooter owners? <br /><br />

            Well, the Segway KickScooter P100SE will be your perfect match as it <br />
            comes with a different ambient light design. This product has a <br />
            Welcome Light upon powering that projects the Segway brand name <br />
            by the sides of the rear wheel. <br /><br />

            This feature can be activated or deactivated through the Segway-<br />
            Ninebot mobile App.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={800}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={587}
        titleMobile={
          <>
            Welcoming &lsquo;&lsquo;Segway&lsquo;&lsquo; <br />
            ambient lights
          </>
        }
        textMobile={
          <>
            Do you want to stand out from other <br />
            KickScooter owners? <br /><br />

            Well, the Segway KickScooter P100SE will be your <br />
            perfect match as it comes with a different ambient <br />
            light design. This product has a Welcome Light <br />
            upon powering that projects the Segway brand <br />
            name by the sides of the rear wheel. <br /><br />

            This feature can be activated or deactivated <br />
            through the Segway-Ninebot mobile App.
          </>
        }
      />

      {/* 4 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-start',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            Multi-functional <br />
            handlebar to easy <br />
            your ride
          </>
        }
        textDesktop={
          <>
            The P100SE&apos;s large handlebar has many functions in order to offer <br />
            your a more interactive experience. In addition, the well-thought-out <br />
            button positions will make your navigation very smooth. <br /> <br />

            Aside from the horn, on/off button, and mode switch, this Segway <br />
            KickScooter also has an indicator switch, front light switch, NFC <br />
            connector/reader on the coloured LED dashboard, and a built-in USB <br />
            charging port to ensure that your smartphone is always fully charged. <br />
            No matter where you are.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={800}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={630}
        titleMobile={
          <>
            Multi-functional handlebar <br />
            to easy your ride
          </>
        }
        textMobile={
          <>
            The P100SE&apos;s large handlebar has many functions <br />
            in order to offer your a more interactive <br />
            experience. In addition, the well-thought-out <br />
            button positions will make your navigation very
            <br /> smooth. <br /><br />

            Aside from the horn, on/off button, and mode <br />
            switch, this Segway KickScooter also has an <br />
            indicator switch, front light switch, NFC connector/reader <br />
            on the coloured LED dashboard, and a <br />
            built-in USB charging port to ensure that your <br />
            smartphone is always fully charged. No matter <br />
            where you are.
          </>
        }
      />

      {/* FIXME: Добавить мануал */}
      <DownloadManualDinamic manualImgPath={allData.kickskooters[17].manualImgPath} downloadManualHref={allData.kickskooters[17].downloadManual} />
      <CompareSpecificationsDinamic
        items={allData.kickskooters}
        mainSegway={allData.kickskooters[17]} />
      <SegwayPhoneHolderDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      {/* FIXME: Заменить на hone holder */}
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>P100</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>P100</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={414}
        heightDesktop={547}
        imgMobile={FormWarrancy_mobile}
        widthMobile={343}
        heightMobile={323}
        customClass="ks-e-45"
        item={allData.kickskooters[17]}
      />

      <OtherModelsDinamic
        title={<>Other Self-Balancing</>}
        description={<>Check out the entire line of Segway scooters</>}
        items={[
          data.kickskooters[14],
          data.kickskooters[15],
          data.kickskooters[16],
          data.kickskooters[17],
          data.kickskooters[18],
          data.kickskooters[19],
        ]}
      />
      <DiscountModalDinamic />
      <FancyModal images={allData.kickskooters[17].galleryImages} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.kickskooters[17],
      preparedProtection: data.accessoeries[7]
    }
  };
}
