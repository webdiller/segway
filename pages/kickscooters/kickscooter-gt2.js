import dynamic from 'next/dynamic';
import { data } from '@/base/data-test';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

// FIXME: Отрефакторить, сделать указание в файле
import featuresIcon_1 from '@/base/ks-gt2/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-gt2/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-gt2/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-gt2/features-icons/feature-5.svg';
import featuresIcon_5 from '@/base/ks-gt2/features-icons/feature-4.svg';
import featuresIcon_6 from '@/base/ks-gt2/features-icons/feature-6.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '7.5 sec', description: '0-30 mph' },
  { icon: featuresIcon_2, title: '37.3 mph', description: 'Max Speed' },
  { icon: featuresIcon_3, title: '43.5 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_4, title: '11”', description: 'Tubeles Tires' },
  { icon: featuresIcon_6, title: '11H', description: 'Charging time' },
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import FeatureSimple_1_desktop from '@/base/ks-gt2/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-gt2/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-gt2/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-gt2/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-gt2/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-gt2/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-gt2/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-gt2/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-gt2/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-gt2/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-gt2/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-gt2/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-gt2/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-gt2/features/feature-7-mobile.jpg';
import FeatureSimple_8_desktop from '@/base/ks-gt2/features/feature-8-desktop.jpg';
import FeatureSimple_8_mobile from '@/base/ks-gt2/features/feature-8-mobile.jpg';
import FeatureSimple_9_desktop from '@/base/ks-gt2/features/feature-9-desktop.jpg';
import FeatureSimple_9_mobile from '@/base/ks-gt2/features/feature-9-mobile.jpg';
import FeatureSimple_10_desktop from '@/base/ks-gt2/features/feature-10-desktop.jpg';
import FeatureSimple_10_mobile from '@/base/ks-gt2/features/feature-10-mobile.jpg';
import FeatureSimple_11_desktop from '@/base/ks-gt2/features/feature-11-desktop.jpg';
import FeatureSimple_11_mobile from '@/base/ks-gt2/features/feature-11-mobile.jpg';
import FeatureSimple_12_desktop from '@/base/ks-gt2/features/feature-12-desktop.jpg';
import FeatureSimple_12_mobile from '@/base/ks-gt2/features/feature-12-mobile.jpg';
import FeatureSimple_13_desktop from '@/base/ks-gt2/features/feature-13-desktop.jpg';
import FeatureSimple_13_mobile from '@/base/ks-gt2/features/feature-13-mobile.jpg';
import FeatureSimple_14_desktop from '@/base/ks-gt2/features/feature-14-desktop.jpg';
import FeatureSimple_14_mobile from '@/base/ks-gt2/features/feature-14-mobile.jpg';
import FeatureSimple_15_desktop from '@/base/ks-gt2/features/feature-15-desktop.jpg';
import FeatureSimple_15_mobile from '@/base/ks-gt2/features/feature-15-mobile.jpg';
import FeatureSimple_16_desktop from '@/base/ks-gt2/features/feature-16-desktop.jpg';
import FeatureSimple_16_mobile from '@/base/ks-gt2/features/feature-16-mobile.jpg';
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayPhoneHolderDinamic = dynamic(() => import('@/sections/SegwayPhoneHolder'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-gt2/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-gt2/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter GT2" ></CustomHead>
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter GT2
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            GT2
          </>
        }
        currentSegway={allData.kickskooters[19]}
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
      <PackingListDinamic packingListYoutubeEmbedId={allData.kickskooters[19].packingListYoutubeEmbedId} packingListImg={allData.kickskooters[19].packingListImg} />
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
            6000W <br />
            Two Wheel Drive <br />
            Air Cooled Hub <br />
            Motor
          </>
        }
        textDesktop={
          <>
            To reach the exciting 70 km/h top speed and 0-48 km/h <br />
            acceleration in 3.9 seconds, GT1 establishes one hub motor, <br />
            which generating 3000W maximum motor power and <br />
            reaching 50Nm peak torque.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={586}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={481}
        titleMobile={
          <>
            6000W Two Wheel Drive <br />
            Air Cooled Hub Motor
          </>
        }
        textMobile={
          <>
            To reach the exciting 70 km/h top speed and 0-48 <br />
            km/h acceleration in 3.9 seconds, GT1 establishes <br />
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
            1512Wh <br />
            High-Performance <br />
            Battery
          </>
        }
        textDesktop={
          <>
            Segway engineered a 1512Wh High-Performance Battery with Heat <br />
            Flux Multi-Layer Cooling System to balance the heat generated in <br />
            furious driving condition.
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={616}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={460}
        titleMobile={
          <>
            1512Wh High-Performance <br />
            Battery
          </>
        }
        textMobile={
          <>
            Segway engineered a 1512Wh High-Performance <br />
            Battery with Heat Flux Multi-Layer Cooling System <br />
            to balance the heat generated in furious driving <br />
            condition.
          </>
        }
      />

      {/* 4 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-end',
          'lg-align-items-center',
          'lg-text-center',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            Boost Mode: Activate overpower <br />
            “Beast Mode “by one button.
          </>
        }
        textDesktop={
          <>
            Enjoy your “World Behind Moment”.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={616}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={418}
        titleMobile={
          <>
            Boost Mode: Activate <br />
            overpower “Beast Mode“ <br />
            by one button.
          </>
        }
        textMobile={
          <>
            Enjoy your “World Behind Moment”.
          </>
        }
      />

      {/* 5 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-end',
          'lg-align-items-center',
          'lg-text-center',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            SDTC
          </>
        }
        textDesktop={
          <>
            Segway engineered an unique Segway Dynamic Traction Control <br />
            System (SDTC) to prevent wheels idling under gravel and slippery <br />
            road, and to obtain better handling while turning on high speed.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={630}
        titleMobile={
          <>
            SDTC
          </>
        }
        textMobile={
          <>
            Segway engineered an unique Segway Dynamic <br />
            Traction Control System (SDTC) to prevent <br />
            wheels idling under gravel and slippery road, <br />
            and to obtain better handling while turning <br />
            on high speed.
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
            Front Double <br />
            Wishbone <br />
            Suspension
          </>
        }
        textDesktop={
          <>
            GT series design the supercar level front double wishbone suspension <br />
            structures,which insures the suspension stability as well as handling.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={480}
        titleMobile={
          <>
            Front Double <br />
            Wishbone Suspension
          </>
        }
        textMobile={
          <>
            GT series design the supercar level front <br />
            double wishbone suspension <br />
            structures,which insures the suspension <br />
            stability as well as handling.
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
            Rear <br />
            Trailing Arm <br />
            Suspension
          </>
        }
        textDesktop={
          <>
            The rear trailing arm suspension structures just <br />
            like the high-end motorcycle. Keeping the <br />
            suspension agility as well as the driving <br />
            comfortability.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_7_mobile}
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
            The rear trailing arm suspension structures just <br />
            like the high-end motorcycle. Keeping the <br />
            suspension agility as well as the driving <br />
            comfortability.
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
        imgDesktop={FeatureSimple_8_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_8_mobile}
        imgMobileWidth={375}
        imgMobileHeight={480}
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
        imgDesktop={FeatureSimple_9_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_9_mobile}
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
        imgDesktop={FeatureSimple_10_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_10_mobile}
        imgMobileWidth={375}
        imgMobileHeight={440}
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
        imgDesktop={FeatureSimple_11_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_11_mobile}
        imgMobileWidth={375}
        imgMobileHeight={475}
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
            Digital <br />
            LED Display
          </>
        }
        textDesktop={
          <>
            GT2 designs digital LED display. Information such as <br />
            Speed, Motor Power, Battery Left, Range, Drive Mode, <br />
            Lighting, are included.
          </>
        }
        imgDesktop={FeatureSimple_12_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_12_mobile}
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
        imgDesktop={FeatureSimple_13_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_13_mobile}
        imgMobileWidth={375}
        imgMobileHeight={410}
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

      {/* 14 */}
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
        imgDesktop={FeatureSimple_14_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_14_mobile}
        imgMobileWidth={375}
        imgMobileHeight={410}
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

      {/* 15 */}
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
        imgDesktop={FeatureSimple_15_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_15_mobile}
        imgMobileWidth={375}
        imgMobileHeight={450}
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

      {/* 16 */}
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
            Twin-Charging <br />
            Technology
          </>
        }
        textDesktop={
          <>
            To speed up the charging time, GT2 contains <br />
            two chargers in standard, allowing “Twin- <br />
            Charging” simultaneously. Also, you can <br />
            separate 2 chargers in different area to facilitate <br />
            your charging experience.
          </>
        }
        imgDesktop={FeatureSimple_16_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={610}
        imgMobile={FeatureSimple_16_mobile}
        imgMobileWidth={375}
        imgMobileHeight={475}
        titleMobile={
          <>
            Twin-Charging <br />
            Technology
          </>
        }
        textMobile={
          <>
            To speed up the charging time, GT2 contains two <br />
            chargers in standard, allowing “Twin-Charging” <br />
            simultaneously. Also, you can separate 2 chargers <br />
            in different area to facilitate your charging <br />
            experience.
          </>
        }
      />

      {allData.kickskooters[19].downloadManual && (
        <DownloadManualDinamic manualImgPath={allData.kickskooters[19].manualImgPath} downloadManualHref={allData.kickskooters[19].downloadManual} />
      )}
      <CompareSpecificationsDinamic
        items={allData.kickskooters}
        mainSegway={allData.kickskooters[19]} />
      <SegwayPhoneHolderDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      {/* FIXME: Заменить на hone holder */}
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>GT2</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>GT2</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={342}
        heightMobile={318}
        customClass="ks-e-45"
        item={allData.kickskooters[19]}
      />

      <OtherModelsDinamic items={allData.kickskooters} />
      <DiscountModalDinamic />
      <FancyModal images={allData.kickskooters[19].galleryImages} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.kickskooters[19],
      preparedProtection: data.accessoeries[7]
    }
  };
}
