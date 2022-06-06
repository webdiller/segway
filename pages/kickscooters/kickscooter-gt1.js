import dynamic from 'next/dynamic';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

// FIXME: Отрефакторить, сделать указание в файле
import featuresIcon_1 from '@/base/ks-gt1/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-gt1/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-gt1/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-gt1/features-icons/feature-5.svg';
import featuresIcon_5 from '@/base/ks-gt1/features-icons/feature-4.svg';
import featuresIcon_6 from '@/base/ks-gt1/features-icons/feature-6.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '7.5 sec', description: '0-30 mph' },
  { icon: featuresIcon_2, title: '37.3 mph', description: 'Max Speed' },
  { icon: featuresIcon_3, title: '43.5 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_4, title: '11”', description: 'Tubeles Tires' },
  { icon: featuresIcon_6, title: '11H', description: 'Charging time' },
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import FeatureSimple_1_desktop from '@/base/ks-gt1/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-gt1/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-gt1/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-gt1/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-gt1/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-gt1/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-gt1/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-gt1/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-gt1/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-gt1/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-gt1/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-gt1/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-gt1/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-gt1/features/feature-7-mobile.jpg';
import FeatureSimple_8_desktop from '@/base/ks-gt1/features/feature-8-desktop.jpg';
import FeatureSimple_8_mobile from '@/base/ks-gt1/features/feature-8-mobile.jpg';
import FeatureSimple_9_desktop from '@/base/ks-gt1/features/feature-9-desktop.jpg';
import FeatureSimple_9_mobile from '@/base/ks-gt1/features/feature-9-mobile.jpg';
import FeatureSimple_10_desktop from '@/base/ks-gt1/features/feature-10-desktop.jpg';
import FeatureSimple_10_mobile from '@/base/ks-gt1/features/feature-10-mobile.jpg';
import FeatureSimple_11_desktop from '@/base/ks-gt1/features/feature-11-desktop.jpg';
import FeatureSimple_11_mobile from '@/base/ks-gt1/features/feature-11-mobile.jpg';
import FeatureSimple_12_desktop from '@/base/ks-gt1/features/feature-12-desktop.jpg';
import FeatureSimple_12_mobile from '@/base/ks-gt1/features/feature-12-mobile.jpg';
import FeatureSimple_13_desktop from '@/base/ks-gt1/features/feature-13-desktop.jpg';
import FeatureSimple_13_mobile from '@/base/ks-gt1/features/feature-13-mobile.jpg';
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayPhoneHolderDinamic = dynamic(() => import('@/sections/SegwayPhoneHolder'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-gt1/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-gt1/form-warrancy-mobile.jpg';

const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {

  return (
    <>
      <CustomHead title="Kickscooter GT1" ></CustomHead>
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter GT1
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            GT1
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

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      {/* 1 */}
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
            Perform <br />
            the Future
          </>
        }
        textDesktop={
          <>
            To create the incomparable GT series super scooter, <br />
            Segway integrated the top talents in all over the world <br />
            and established the Segway Innovation Group.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={631}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={441}
        titleMobile={
          <>
            Perform the Future
          </>
        }
        textMobile={
          <>
            To create the incomparable GT series super <br />
            scooter, Segway integrated the top talents in all <br />
            over the world and established the Segway <br />
            Innovation Group.
          </>
        }
      />

      {/* 2 */}
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
            3000W <br />
            Rear Wheel Drive <br />
            Air Cooled Hub <br />
            Motor
          </>
        }
        textDesktop={
          <>
            To reach the exciting 60 km/h top speed and 0-48 km/h <br />
            acceleration in 7.5 seconds, GT1 establishes one <br />
            hub motor, which generating 3000W maximum <br />
            motor power and reaching 50Nm peak torque.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={590}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={481}
        titleMobile={
          <>
            3000W Rear Wheel Drive <br />
            Air Cooled Hub Motor
          </>
        }
        textMobile={
          <>
            To reach the exciting 60 km/h top speed and 0-48 <br />
            km/h acceleration in 7.5 seconds, GT1 establishes <br />
            one hub motor, which generating 3000W <br />
            maximum motor power and reaching 50Nm <br />
            peak torque.
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

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            1008Wh <br />
            High-Performance <br />
            Battery
          </>
        }
        textDesktop={
          <>
            Segway engineered a 1008Wh High-Performance Battery with Heat <br />
            Flux Multi-Layer Cooling System to balance the heat generated in <br />
            furious driving condition.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={460}
        titleMobile={
          <>
            1008Wh High-Performance <br />
            Battery
          </>
        }
        textMobile={
          <>
            Segway engineered a 1008Wh High-Performance <br />
            Battery with Heat Flux Multi-Layer Cooling System <br />
            to balance the heat generated in furious driving <br />
            condition.
          </>
        }
      />

      {/* 4 */}
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
            Multi-functional <br />
            handlebar to easy <br />
            your ride
          </>
        }
        textDesktop={
          <>
            The P100SE&apos;s large handlebar has many functions in order to offer <br />
            your a more interactive experience. In addition, the well-thought-out <br />
            button positions will make your navigation very smooth. <br /><br />

            Aside from the horn, on/off button, and mode switch, this Segway <br />
            KickScooter also has an indicator switch, front light switch, NFC <br />
            connector/reader on the coloured LED dashboard, and a built-in USB <br />
            charging port to ensure that your smartphone is always fully charged. <br />
            No matter where you are.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
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
            button positions will make your navigation very <br />
            smooth. <br /><br />

            Aside from the horn, on/off button, and mode <br />
            switch, this Segway KickScooter also has an <br />
            indicator switch, front light switch, NFC connector/ <br />
            reader on the coloured LED dashboard, and a <br />
            built-in USB charging port to ensure that your <br />
            smartphone is always fully charged. No matter <br />
            where you are.
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

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            Rear <br />
            Trailing Arm <br />
            Suspension
          </>
        }
        textDesktop={
          <>
            GT series design the supercar level front double <br />
            wishbone suspension structures,which insures <br />
            the suspension stability as well as handling.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={450}
        titleMobile={
          <>
            Rear Trailing Arm <br />
            Suspension
          </>
        }
        textMobile={
          <>
            GT series design the supercar level front double <br />
            wishbone suspension structures,which insures the <br />
            suspension stability as well as handling.
          </>
        }
      />

      {/* 6 */}
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
            Hydraulic <br />
            Shock
          </>
        }
        textDesktop={
          <>
            The GT series equip front & rear 15-level damping <br />
            adjustable hydraulic shock, which can be personalized <br />
            according to various environment. No matter on flat <br />
            asphalt road, or off-road exploration on country lanes, <br />
            GT will be always in the perfect state.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={475}
        titleMobile={
          <>
            Hydraulic Shock
          </>
        }
        textMobile={
          <>
            The GT series equip front & rear 15-level damping <br />
            adjustable hydraulic shock, which can be <br />
            personalized according to various environment. <br />
            No matter on flat asphalt road, or off-road <br />
            exploration on country lanes, GT will be always in <br />
            the perfect state.
          </>
        }
      />

      {/* 7 */}
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
            Hydraulic <br />
            Disc Brake
          </>
        }
        textDesktop={
          <>
            To ensure a powerful braking performance in <br />
            furious driving condition, the GT series equip 0.8 <br />
            inchs front & rear dual-pistons and 5.5 inchs <br />
            diameter hydraulic disc brake , 0.1 inchs <br />
            thickness perforated brake pad.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={615}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={475}
        titleMobile={
          <>
            Hydraulic Disc Brake
          </>
        }
        textMobile={
          <>
            To ensure a powerful braking performance in <br />
            furious driving condition, the GT series equip 0.8 <br />
            inchs front & rear dual-pistons and 5.5 inchs <br />
            diameter hydraulic disc brake , 0.1 inchs thickness <br />
            perforated brake pad.
          </>
        }
      />

      {/* 8 */}
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
            Self-Sealing <br />
            Tires
          </>
        }
        textDesktop={
          <>
            The GT series equip 11-inch, 3.6 inchs width tubeless <br />
            tires with unique self-sealing function, providing an <br />
            ultimate road-gripping capacity and risking down tire <br />
            punctured in any road condition.
          </>
        }
        imgDesktop={FeatureSimple_8_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_8_mobile}
        imgMobileWidth={375}
        imgMobileHeight={415}
        titleMobile={
          <>
            Self-Sealing Tires
          </>
        }
        textMobile={
          <>
            The GT series equip 11-inch, 3.6 inchs width <br />
            tubeless tires with unique self-sealing function, <br />
            providing an ultimate road-gripping capacity and <br />
            risking down tire punctured in any road condition.
          </>
        }
      />

      {/* 9 */}
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
            Aluminum <br />
            Alloy Frame
          </>
        }
        textDesktop={
          <>
            To ensure the best body durability in “extreme” <br />
            conditions, the aircraft grade lightweight <br />
            aluminum alloy frame is used in all GT series.
          </>
        }
        imgDesktop={FeatureSimple_9_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_9_mobile}
        imgMobileWidth={375}
        imgMobileHeight={415}
        titleMobile={
          <>
            Aluminum Alloy Frame
          </>
        }
        textMobile={
          <>
            To ensure the best body durability in “extreme” <br />
            conditions, the aircraft grade lightweight aluminum <br />
            alloy frame is used in all GT series.
          </>
        }
      />

      {/* 10 */}
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
            Digital <br />
            LED Display
          </>
        }
        textDesktop={
          <>
            GT1 designs digital LED display. Information such as <br />
            Speed, Motor Power, Battery Left, Range, Drive Mode, <br />
            Lighting, are included.
          </>
        }
        imgDesktop={FeatureSimple_10_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_10_mobile}
        imgMobileWidth={375}
        imgMobileHeight={430}
        titleMobile={
          <>
            Digital LED Display
          </>
        }
        textMobile={
          <>
            GT1 designs digital LED display. Information such <br />
            as Speed, Motor Power, Battery Left, Range, Drive <br />
            Mode, Lighting, are included.
          </>
        }
      />

      {/* 11 */}
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
            900 Lumens <br />
            LED Light
          </>
        }
        textDesktop={
          <>
            900 lumens LED headlight, LED daylight and <br />
            front & rear turn light are in all GT series.
          </>
        }
        imgDesktop={FeatureSimple_11_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={615}
        imgMobile={FeatureSimple_11_mobile}
        imgMobileWidth={375}
        imgMobileHeight={390}
        titleMobile={
          <>
            900 Lumens LED Light
          </>
        }
        textMobile={
          <>
            900 lumens LED headlight, LED daylight <br />
            and front & rear turn light are in all GT series.
          </>
        }
      />

      {/* 12 */}
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
            Ambient <br />
            Lights
          </>
        }
        textDesktop={
          <>
            GT series design optional rear ambient lights. 11 light <br />
            modes can be chosen from Segway APP.
          </>
        }
        imgDesktop={FeatureSimple_12_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_12_mobile}
        imgMobileWidth={375}
        imgMobileHeight={385}
        titleMobile={
          <>
            Ambient Lights
          </>
        }
        textMobile={
          <>
            GT series design optional rear ambient lights. <br />
            11 light modes can be chosen from Segway APP.
          </>
        }
      />

      {/* 13 */}
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
            Double Safety <br />
            Quick-Folding <br />
            Structure
          </>
        }
        textDesktop={
          <>
            A safe, solid folding rod designed in all GT <br />
            series. GT can be easily folded down and <br />
            storage in narrow space.
          </>
        }
        imgDesktop={FeatureSimple_13_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={615}
        imgMobile={FeatureSimple_13_mobile}
        imgMobileWidth={375}
        imgMobileHeight={445}
        titleMobile={
          <>
            Double Safety <br />
            Quick-Folding Structure
          </>
        }
        textMobile={
          <>
            A safe, solid folding rod designed in <br />
            all GT series. GT can be easily folded down <br />
            and storage in narrow space.
          </>
        }
      />

      {product.downloadManual && (
        <DownloadManualDinamic manualImgPath={product.manualImgPath} downloadManualHref={product.downloadManual} />
      )}

      <CompareSpecificationsDinamic
        items={allData.kickskooters}
        mainSegway={product} />
      <SegwayPhoneHolderDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      {/* FIXME: Заменить на hone holder */}
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>GT1</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>GT1</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={342}
        heightMobile={318}
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
  const currentProduct = data.kickskooters.find(({ id }) => id == 'id=22&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}
