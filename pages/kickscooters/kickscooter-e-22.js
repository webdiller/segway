import dynamic from 'next/dynamic';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-e22/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-e22/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-e22/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-e22/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-e22/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-e22/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-e22/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-e22/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-e22/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-e22/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '9”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '12.4 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '13.7 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '15%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '55-220 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: '3,5H', description: 'Fast Charging' },
  { icon: featuresIcon_8, title: '5100mAh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-e22/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-e22/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-e22/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-e22/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-e22/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-e22/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-e22/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-e22/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-e22/features/feature-4-desktop.jpg';
import FeatureSimple_5_desktop from '@/base/ks-e22/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-e22/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-e22/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-e22/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-e22/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-e22/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));
const FeatureLiteDinamic = dynamic(() => import('@/sections/Feature/FeatureLite'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-e22/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-e22/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {
  return (
    <>
      <CustomHead title="Kickscooter E22" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter E22
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            E22
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
        height={567}
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
            KickScooter overview <br /> Segway Ninebot Kickscooter E22
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter E22</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'Brushless Direct <br/> Current Motor'.split('<br/>').join('\n')}
        textDesktop={'The Ninebot KickScooter E22 strives to reach new heights <br/> of performance with the BDLC. The upgrade comes in the <br/> form of greater riding dynamic provided by faster  <br/> acceleration plus stronger 15% hill grade capability.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={'Brushless Direct <br/> Current Motor'.split('<br/>').join('\n')}
        textMobile={'The Ninebot KickScooter E22 strives to reach  <br/> new heights of performance with the BDLC. <br/> The upgrade comes in the form of greater riding <br/> dynamic provided by faster acceleration plus  <br/> stronger 15% hill grade capability.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={'Multiple Shock <br/> Absorption  <br/> Designs'.split('<br/>').join('\n')}
        textDesktop={'With thickened shock absorbing foam cushion <br/> seat, seapost suspension and dual shock  <br/> absorbing balls delivers a smooth ride on all  <br/> types of terrain.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={507}
        titleMobile={'Multiple Shock <br/> Absorption Designs'.split('<br/>').join('\n')}
        textMobile={'With thickened shock absorbing foam cushion <br/> seat, seapost suspension and dual shock  <br/> absorbing balls delivers a smooth ride on all <br/> types of terrain.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'2.5W LED <br/> Headlamp'.split('<br/>').join('\n')}
        textDesktop={'The 44.3 ft. range headlight delivers Increased safety in dark <br/> surroundings. Based on the Bright/Dark Cut-Off Line, focusing <br/> the lights at a low angle on the road will provide extra visibility <br/> and safety.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={'2.5W LED Headlamp'.split('<br/>').join('\n')}
        textMobile={'The 44.3 ft. range headlight delivers Increased <br/> safety in dark surroundings. Based on the <br/> Bright/Dark Cut-Off Line, focusing the lights at a <br/> low angle on the road will provide extra visibility <br/> and safety.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 4 */}
      <FeatureLiteDinamic
        image={FeatureSimple_4_desktop}
        title="One-step Folding Mechanism"
        text={'Ninebot KickScooter E22 can be easily folded <br/> and carried around in 3 seconds.'.split('<br/>').join('\n')}
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'Smart Battery <br/> Management System'.split('<br/>').join('\n')}
        textDesktop={'The BMS system at Segway-Ninebot has undergone 7 years <br/> of continuous technological development and produced 300 <br/> million batteries. We are devoted to extending the battery <br/> life, ensuring user safety, and accurate power display'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={'Smart Battery <br/> Management System'.split('<br/>').join('\n')}
        textMobile={'The BMS system at Segway-Ninebot has <br/> undergone 7 years of continuous technological <br/> development and produced 300 million batteries. <br/> We are devoted to extending the battery life, <br/> ensuring user safety, and accurate power display'
          .split('<br/>')
          .join('\n')}
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={'Effortless <br/> Installation'.split('<br/>').join('\n')}
        textDesktop={'For those longer rides, easily add the addle seat, <br/> no additional drilling required. Sit and ride in <br/> comfort when the seat is attached, or remove the <br/> seat when you want a more traditional ride.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={'Effortless Installation'.split('<br/>').join('\n')}
        textMobile={'For those longer rides, easily add the addle <br/> seat, no additional drilling required. Sit and ride <br/> in comfort when the seat is attached, or remove <br/> the seat when you want a more traditional ride.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'Supreme Shock <br/> Absorption,  <br/> No Tire Punctures'.split('<br/>').join('\n')}
        textDesktop={'Developed and fine-tuned for 3 years, FlatFree Tires* fill <br/> the inner tube with a new PU foaming material. This <br/> design tackles the pain point of possible tire leakage <br/> with pneumatic tires, while retaining the comfort of the <br/> riding, and the practicality of little maintenance needed. <br/> <br/>The upgraded 9-inch tires deliver more stability and <br/> comfort than the previous 8-inch tires, so you don’t have <br/> to worry about bumpy roads.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={668}
        titleMobile={'3 Supreme Shock  <br/> Absorption, <br/> No Tire Punctures'.split('<br/>').join('\n')}
        textMobile={'Developed and fine-tuned for 3 years, FlatFree <br/> Tires* fill the inner tube with a new PU foaming <br/> material. This design tackles the pain point of  <br/> possible tire leakage with pneumatic tires, while <br/> retaining the comfort of the riding, and the  <br/> practicality of little maintenance needed. <br/><br/> The upgraded 9-inch tires deliver more stability  <br/> and comfort than the previous 8-inch tires, so you <br/> don’t have to worry about bumpy roads.'
          .split('<br/>')
          .join('\n')}
        descriptionMobile={'*FlatFree Tire Technology: Unlike common solid tires, it fills the <br/> inner tube with a new PU foaming material. This design solves <br/> the problem of possible tire leakage with pneumatic tires, while  <br/> retaining the comfort of the riding, and the practicality of little  <br/> maintenance needed.'
          .split('<br/>')
          .join('\n')}
      />

      <DownloadManualDinamic manualImgPath={product.manualImgPath} downloadManualHref={product.downloadManual} />
      <CompareSpecificationsDinamic items={allData.kickskooters} mainSegway={product} />
      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>E22</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>E22</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={608}
        heightDesktop={525}
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
  const currentProduct = data.kickskooters.find(({ id }) => id == 'id=001&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}
