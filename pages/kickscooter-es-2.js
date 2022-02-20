import dynamic from 'next/dynamic';
import ModelLayout from '@/layouts/ModelLayout';
import Welcome from '@/sections/Welcome';
import TopStock from '@/sections/TopStock';
import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), {ssr:false});
import CustomHead from '@/basic/CustomHead';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPrice, setSegway} from '@/actions/fixedModal';
import {data} from '@/base/data';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-es2/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-es2/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-es2/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-es2/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-es2/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-es2/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-es2/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-es2/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-es2/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-es2/features-icons/feature-8.svg';
const featuresItems = [
  {icon: featuresIcon_1, title: '5 & 7.5”', description: 'Pneumatic Tires'},
  {icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights'},
  {icon: featuresIcon_3, title: '15.5 mph', description: 'Max Speed'},
  {icon: featuresIcon_4, title: '15.5 Miles', description: 'Max Range'},
  {icon: featuresIcon_5, title: '10%', description: 'Hill Grade'},
  {icon: featuresIcon_6, title: '55-220 lbs', description: 'Payload'},
  {icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant'},
  {icon: featuresIcon_8, title: '187Wh', description: 'Battery'}
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-es2/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-es2/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-es2/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-es2/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-es2/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-es2/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-es2/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-es2/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-es2/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-es2/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-es2/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-es2/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-es2/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-es2/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-es2/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-es2/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), {ssr: false});
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-es2/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-es2/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), {ssr: false});
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), {ssr: false});
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), {ssr: false});

export default function Home({allData}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSegway(allData.segways.adultSegways[7]));
    dispatch(setPrice(allData.segways.adultSegways[7].price));
  }, []);

  return (
    <>
      <CustomHead title="Kickscooter ES2" />
      <TopStock />
      <Welcome titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter ES2
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            ES2
          </>
        } currentSegway={allData.segways.adultSegways[7]} />
      <Tabs />
      <PackingListDinamic poster_type="type_2" />
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

      <KickScooterOverviewDinamic title="KickScooter overview" subtitle="SEGWAY Ninebot Kickscooter ES2" desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={<>Powerful Machine</>}
        textDesktop={
          <>
            The Ninebot KickScooter by Segway ES2 has motor power up <br />
            to 700W and can go up to 15 mph. The battery system is <br />
            equipped with energy recovery system that takes riders further. <br /> <br />
            Our Smart Battery Management System (Smart-BMS) closely <br />
            monitors the battery cells to ensure the battery safety and to <br />
            extend the battery life.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={408}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={<>Powerful Machine</>}
        textMobile={
          <>
            The Ninebot KickScooter by Segway ES2 has <br />
            motor power up to 700W and can go up to 15 mph. <br />
            The battery system is equipped with energy <br />
            recovery system that takes riders further. <br /> <br />
            Our Smart Battery Management System (Smart-
            <br />
            BMS) closely monitors the battery cells to ensure <br />
            the battery safety and to extend the battery life.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            When Function <br />
            Meets Fashion
          </>
        }
        textDesktop={
          <>
            The Ninebot KickScooter by Segway ES2 is built with <br />
            high-strength, lightweight aerospace-graded aluminum <br />
            alloy. The one-click folding system allows the ES2 to <br />
            be carried on public transportation, stored in your car <br />
            and more. Featured with a customizable LED display, <br />
            the silver-gray body of the ride makes a bold yet <br />
            sophisticated statement bringing fashion and <br />
            technology to the fullest.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={475}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={586}
        titleMobile={<>When Function Meets Fashion</>}
        textMobile={
          <>
            The Ninebot KickScooter by Segway ES2 is built <br />
            with high-strength, lightweight aerospace-graded <br />
            aluminum alloy. The one-click folding system <br />
            allows the ES2 to be carried on public <br />
            transportation, stored in your car and more. <br />
            Featured with a customizable LED display, the <br />
            silver-gray body of the ride makes a bold yet <br />
            sophisticated statement bringing fashion and <br />
            technology to the fullest.
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Built-In Front <br />
            LED Light
          </>
        }
        textDesktop={
          <>
            Front-facing lights are designed with 1.5w high-brightness LED light to <br />
            illuminate the path ahead of you and increase your visibility to others <br />
            around you.
          </>
        }
        descriptionDesktop={<>*Disclaimer: for your safety, please try not to ride at night</>}
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={<>Built-In Front LED Light</>}
        textMobile={
          <>
            Built-In Front LED Light Front-facing lights are designed with 1.5w high- <br />
            brightness LED light to illuminate the path <br />
            ahead of you and increase your visibility to <br />
            others around you.
          </>
        }
        descriptionMobile={<>*Disclaimer: for your safety, please try not to ride at night</>}
      />

      {/* 4 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            One-step <br />
            Folding <br />
            System
          </>
        }
        textDesktop={
          <>
            Ninebot Kickscooter by Segway ES2 Generation <br />
            2 is sleek, lightweight and features a one-step <br />
            folding system. Now our riders can carry it on <br />
            public transportation, store it in their car and <br />
            take it to any destination they desire.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={443}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={391}
        titleMobile={<>One-step Folding System</>}
        textMobile={
          <>
            Ninebot Kickscooter by Segway ES2 Generation <br />
            2 is sleek, lightweight and features a one-step <br />
            folding system. Now our riders can carry it on <br />
            public transportation, store it in their car and <br />
            take it to any destination they desire.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Manage your <br />
            every trip
          </>
        }
        textDesktop={
          <>
            Ninebot Kickscooter by Segway ES2 has its own <br />
            mobile APP to manage rides at your fingertips at anytime and <br />
            anywhere to customize your experience.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={404}
        titleMobile={<>Manage your every trip</>}
        textMobile={
          <>
            Ninebot Kickscooter by Segway ES2 has its own <br />
            mobile APP to manage rides at your fingertips at <br />
            anytime and anywhere to customize your experience.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-8"
        titleDesktop={
          <>
            Stop and Go <br />
            with the Push <br />
            of Your Thumb
          </>
        }
        textDesktop={
          <>
            With a single push of your thumb, you have full <br />
            control over your ride.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={468}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={404}
        titleMobile={
          <>
            Stop and Go with
            <br />
            the Push of Your Thumb
          </>
        }
        textMobile={
          <>
            With a single push of your thumb, you have full <br />
            control over your ride.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="type-9"
        titleDesktop={<>Safeguards You <br/>
          Along the Way</>}
        textDesktop={<>The vehicle&rsquo;s structure was carefully analyzed by a <br/>
        CAE simulation system and passed through 6,214 <br/>
        miles of road ride testing. Smart Battery <br/>
        Management System (Smart-BMS) constantly <br/>
        monitors the battery&rsquo;s safety.</>}
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={542}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={479}
        titleMobile={<>Safeguards You <br/>
          Along the Way</>}
        textMobile={<>The vehicle&apos;s structure was carefully analyzed by a <br/>
        CAE simulation system and passed through 6,214 <br/>
        miles of road ride testing. Smart Battery <br/>
        Management System (Smart-BMS) constantly <br/>
        monitors the battery&apos;s safety.</>}
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[7]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>ES2</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>ES2</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={allData.segways.adultSegways[7]}
      />
      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[7]} />
      <DiscountModalDinamic />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
      <FancyModal />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}

Home.getLayout = function getLayout(page) {
  return <ModelLayout items={data}>{page}</ModelLayout>;
};
