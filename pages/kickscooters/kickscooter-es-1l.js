import dynamic from 'next/dynamic';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-es-1l/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-es-1l/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-es-1l/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-es-1l/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-es-1l/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-es-1l/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-es-1l/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-es-1l/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-es-1l/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-es-1l/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '8”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '12.4 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '24.4 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '7%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '55-220 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: '5100mAh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-es-1l/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-es-1l/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-es-1l/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-es-1l/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-es-1l/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-es-1l/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-es-1l/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-es-1l/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-es-1l/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-es-1l/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-es-1l/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-es-1l/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-es-1l/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-es-1l/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-es-1l/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-es-1l/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-es-1l/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-es-1l/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {

  return (
    <>
      <CustomHead title="Kickscooter ES 1L" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter ES1L
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br />
            ES1L
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
          Segway Ninebot Kickscooter ES1L
        </>
      }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter ES1L</>} desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={`Front Shock <br/> Absorber`.split('<br/>').join('\n')}
        textDesktop={'A Smooth Ride Through Bumpy Roads. The spring in the <br/> shock absorber is designed to cushion the rider from <br/> bumps and dips. This allows for a smooth ride over rough <br/> surfaces.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={'Front Shock Absorber'.split('<br/>').join('\n')}
        textMobile={'A Smooth Ride Through Bumpy Roads. The spring <br/> in the shock absorber is designed to cushion the <br/> rider from bumps and dips. This allows for a <br/> smooth ride over rough surfaces.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={'One-Click <br/> Folding <br/> Mechanism'.split('<br/>').join('\n')}
        textDesktop={'Take it with you to wherever and whenever. <br/>You don’t need to look for a parking space <br/>like an ordinary vehicle, fold it with one foot, <br/>bring it around, and place it wherever <br/>you want.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={507}
        titleMobile={'One-Click Folding Mechanism <br/>'.split('<br/>').join('\n')}
        textMobile={'Take it with you to wherever and whenever. You <br/>don’t need to look for a parking space like an <br/>ordinary vehicle, fold it with one foot, bring it <br/>around, and place it wherever <br/>you want.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'2.5W Bright <br/>Anti-Glare <br/>Headlights'.split('<br/>').join('\n')}
        textDesktop={'Uncreased visibility up to 44 ft. The front LED <br/>headlight effectively increases visibility up to 44ft, <br/>even in conditions with low visibility.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={418}
        titleMobile={'2.5W Bright Anti-Glare <br/>Headlights'.split('<br/>').join('\n')}
        textMobile={'Uncreased visibility up to 44 ft. The front LED <br/>headlight effectively increases visibility up to <br/>44ft, even in conditions with low visibility.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={'Flat-Free Tire <br/>with Inner- <br/>Support <br/>Hollow Tires'.split('<br/>').join('\n')}
        textDesktop={'Combines the best of both solid and pneumatic <br/>tires. The new inner support technology, with <br/>special hollow processing technology, has higher <br/>resilience than ordinary solid tires, and has the <br/>advantages of no puncture, maintenance-free, and <br/>high shock absorption. With the new integrated <br/>features we are taking your riding experience <br/>to the next level.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={668}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={569}
        titleMobile={'Flat-Free Tire with Inner- <br/> Support Hollow Tires'.split('<br/>').join('\n')}
        textMobile={'Combines the best of both solid and <br/> pneumatic tires. The new inner support technology, with <br/> special hollow processing technology, has higher <br/> resilience than ordinary solid tires, and has the <br/> advantages of no puncture, maintenance-free, and <br/> high shock absorption. With the new integrated <br/> features we are taking your riding experience <br/> to the next level.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={'Double BMS <br/> Technology'.split('<br/>').join('\n')}
        textDesktop={'Double Battery Protection. Every Ninebot electric <br/> Kickscooter has dual BMS technology protection at the <br/> hardware level and software level. In addition to the <br/> hardware-level BMS protection provided, it also has a <br/> software-level BMS battery management system that has <br/> provided safety protection for 300 million lithium-ion <br/> batteries. We are going above and beyond to ensure battery <br/> safety and extend battery life.'
          .split('<br/>')
          .join('\n')}
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={476}
        titleMobile={'Double BMS Technology'.split('<br/>').join('\n')}
        textMobile={'Double Battery Protection. Every Ninebot electric <br/> Kickscooter has dual BMS technology protection at <br/> the hardware level and software level. In addition <br/> to the hardware-level BMS protection provided, it <br/> also has a software-level BMS battery management <br/> system that has provided safety protection for 300 <br/> million lithium-ion batteries. We are going above <br/> and beyond to ensure battery safety and extend <br/> battery life.'
          .split('<br/>')
          .join('\n')}
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={'3 Different <br/> Riding Modes to <br/> Fit Your Style'.split('<br/>').join('\n')}
        textDesktop={
          <>
            <b>Safety Mode</b> <br />
            Longer Range / Top Speed: 9.3mph / 12.4 miles
            <br />
            range
            <br />
            <br />
            <b>Standard Mode</b>
            <br />
            Better Riding Experience / Top Speed: 12.4 mph / A
            <br />
            Good Balance of Speed and Range
            <br />
            <br />
            <b>Sports Mode</b>
            <br />
            Full Speed Ahead / Quick Start, Full power,
            <br />
            Smoothers Inclines
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={641}
        titleMobile={'3 Different Riding Modes <br/> to Fit Your Style'.split('<br/>').join('\n')}
        textMobile={
          <>
            <b>Safety Mode</b>
            <br />
            Longer Range / Top Speed: 9.3mph / 12.4 miles
            <br />
            range
            <br />
            <br />
            <b>Standard Mode</b>
            <br />
            Better Riding Experience / Top Speed: 12.4 mph / A <br />
            Good Balance of Speed and Range
            <br />
            <br />
            <b>Sports Mode</b>
            <br />
            Full Speed Ahead / Quick Start, Full power,
            <br />
            Smoothers Inclines
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="type-7"
        titleDesktop={`Extra Light, <br/> Extra Stability`.split('<br/>').join('\n')}
        textDesktop={
          <>
            The aerospace-grade aluminum alloy body material <br /> weighs only one-third of steel, and its strength per unit <br /> density is 1.3 times that of steel. This gives it a portable <br />
            weight of 24.3lbs (11kg) in the ES family and a payload of <br /> 220lbs (100kg).
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={535}
        titleMobile={
          <>
            Extra Light, Extra Stability <br />
          </>
        }
        textMobile={
          <>
            The aerospace-grade aluminum alloy body <br /> material weighs only one-third of steel, and its <br /> strength per unit density is 1.3 times that of steel. <br /> This gives it a portable
            weight of 24.3lbs (11kg) in <br /> the ES family and a payload of 220lbs (100kg).
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
            SEGWAY Ninebot <br /> Kickscooter <b>ES1L</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ES1L</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={432}
        heightDesktop={511}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={368}
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
  const currentProduct = data.kickskooters.find(({ id }) => id == 'id=002&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}