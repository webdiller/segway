import dynamic from 'next/dynamic';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

import { data } from '@/base/data';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-zing-e10/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-zing-e10/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-zing-e10/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-zing-e10/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-zing-e10/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-zing-e10/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-zing-e10/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-zing-e10/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-zing-e10/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-zing-e10/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '7”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '8.6 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '6.2 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '7%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: '44-110 lbs', description: 'Payload' },
  { icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant' },
  { icon: featuresIcon_8, title: '2550mAh', description: 'Battery' }
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-zing-e10/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-zing-e10/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-zing-e10/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-zing-e10/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-zing-e10/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-zing-e10/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-zing-e10/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-zing-e10/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-zing-e10/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-zing-e10/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-zing-e10/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-zing-e10/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-zing-e10/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-zing-e10/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-zing-e10/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-zing-e10/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-zing-e10/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-zing-e10/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {
  return (
    <>
      <CustomHead title="Kickscooter ZING E10" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> Zing e10
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            Zing e10
          </>
        }
        currentSegway={allData.segways[11]}
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
      <PackingListDinamic packingListImg={allData.segways[11].packingListImg} />
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

      <KickScooterOverviewDinamic
        titleDesktop={
          <>
            KickScooter overview <br />
            Segway Ninebot Kickscooter zing E10
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter zing E10</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            The New sensation <br />
            for big kids
          </>
        }
        textDesktop={
          <>
            With the uniquely tailored exterior and ergonomic fit, the zing E10 is <br />
            a perfect mobility companion for big kids. <br />
            Slim, lightweight, inconspicuous yet dazzling color scheme, <br />
            dynanic handlebar shape. With the zing E10 eKickScooter, be the <br />
            coolest kid in town
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={408}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={461}
        titleMobile={<>The New sensation for big kids</>}
        textMobile={
          <>
            With the uniquely tailored exterior and ergonomic <br />
            fit, the zing E10 is a perfect mobility companion for big <br />
            kids. Slim, lightweight, inconspicuous yet dazzling <br />
            color scheme, dynanic handlebar shape. With the <br />
            zing E10 eKickScooter, be the coolest kid in town
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            3M Reflective <br />
            Stickers
          </>
        }
        textDesktop={
          <>
            The 3M Reflective Sticker is installed on the <br />
            fender. It has high reflectivity, a wide reflection <br />
            angle, and strong adhesion, providing more safety <br />
            and security.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={480}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={482}
        titleMobile={<>3M Reflective Stickers</>}
        textMobile={
          <>
            The 3M Reflective Sticker is installed on the <br />
            fender. It has high reflectivity, a wide reflection <br />
            angle, and strong adhesion, providing more <br />
            safety and security.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Handbrake to <br />
            Your Full Control
          </>
        }
        textDesktop={
          <>
            The Ninebot eKickScooter ZING E10 is equipped with a high- <br />
            performance handbrake system, which also has the EBS energy <br />
            recovery brake function. In addition, the rear fender also has a <br />
            brake function. Braking is secure and safe on the ZING E10
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={443}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={526}
        titleMobile={
          <>
            Handbrake to <br />
            Your Full Control
          </>
        }
        textMobile={
          <>
            The Ninebot eKickScooter ZING E10 is equipped <br />
            with a high-performance handbrake system, which <br />
            also has the EBS energy recovery brake function. <br />
            In addition, the rear fender also has a brake <br />
            function. Braking is secure and safe on the <br />
            ZING E10
          </>
        }
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={
          <>
            Silicone <br />
            Foot Pad
          </>
        }
        textDesktop={
          <>
            The silicone foot pad has excellent anti-skid <br />
            properties and is easy to clean, making your <br />
            experience stable and comfortable.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={384}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={394}
        titleMobile={<>Silicone Foot Pad</>}
        textMobile={
          <>
            The silicone foot pad has excellent anti-skid <br />
            properties and is easy to clean, making your <br />
            experience stable and comfortable.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            One-Click <br />
            Switch
          </>
        }
        textDesktop={
          <>
            The one-click switch also takes into account the <br />
            switching function when riding. You can switch among <br />
            the three riding modes of throttle, cruise and safety* <br />
            just by clicking the button after starting up, very <br />
            simple and convenient.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={<>One-Click Switch</>}
        textMobile={
          <>
            The Ninebot eKickScooter ZING E8 is equipped <br />
            with a high-performance handbrake system, which <br />
            also has the EBS energy recovery brake function. <br />
            In addition, the rear fender also has a brake <br />
            function. Triple braking system, extra safety <br />
            precautions.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            40mm Front <br />
            Shock <br />
            Absorption <br />
            System
          </>
        }
        textDesktop={
          <>
            Get ready for a smooth ride like no other. In order to <br />
            deliver a comfortable riding experience In order to <br />
            bring a more comfortable riding experience, the ZING <br />
            E10 is equipped with a spring shock absorption <br />
            system, which can more effectively absorb the bumps <br />
            from sand, grass, and dirt roads. With the patented <br />
            anti-skid tubeless tires, you can just ride smoothly and <br />
            have fun.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={584}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={529}
        titleMobile={
          <>
            40mm Front Shock <br />
            Absorption System
          </>
        }
        textMobile={
          <>
            TGet ready for a smooth ride like no other. In order <br />
            to deliver a comfortable riding experience In order <br />
            to bring a more comfortable riding experience, the <br />
            ZING E10 is equipped with a spring shock <br />
            absorption system, which can more effectively <br />
            absorb the bumps from sand, grass, and dirt roads. <br />
            With the patented anti-skid tubeless tires, you can <br />
            just ride smoothly and have fun.
          </>
        }
      />

      {/* FIXME: ЗАкончил здесь. Выровнять на десктопе */}
      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="type-10"
        titleDesktop={
          <>
            Foldable <br />
            DESIGN
          </>
        }
        textDesktop={
          <>
            Easy to Store. Take It Anywhere. The body is slim <br />
            and light, with a thickness of only 1.3 inches (3.4cm), <br />
            and weighing only 18.7 lbs (8.5kg). It is a combination <br />
            of deisgn and portability. When folded, the whole <br />
            vehicle is very compact, easy to carry, and <br />
            convenient to store in the trunk.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={399}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={447}
        titleMobile={<>Foldable DESIGN </>}
        textMobile={
          <>
            Easy to Store. Take It Anywhere. The body is slim <br />
            and light, with a thickness of only 1.3 inches <br />
            (3.4cm), and weighing only 18.7 lbs (8.5kg). It is a <br />
            combination of deisgn and portability. When <br />
            folded, the whole vehicle is very compact, easy to <br />
            carry, and convenient to store in the trunk.
          </>
        }
      />

      <DownloadManualDinamic downloadManualHref={allData.segways[11].downloadManual} />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways[11]} />
      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ZING E10</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ZING E10</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={allData.segways[11]}
      />
      <OtherModelsDinamic items={allData.segways} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal images={allData.segways[11].galleryImages} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.segways[11],
      preparedProtection: data.accessoeries[2]
    }
  };
}
