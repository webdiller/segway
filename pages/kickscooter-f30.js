import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';
import Welcome from '@/sections/Welcome';
import TopStock from '@/sections/TopStock';
import Tabs from '@/sections/Tabs';
import {FancyModal} from 'components/shared/Modal';
import CustomHead from '@/basic/CustomHead';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPrice, setSegway} from '@/actions/fixedModal';
import {data} from '@/base/data';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-f30/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-f30/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-f30/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-f30/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-f30/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-f30/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-f30/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-f30/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-f30/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-f30/features-icons/feature-8.svg';
const featuresItems = [
  {icon: featuresIcon_1, title: '10”', description: 'Pneumatic Tires'},
  {icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights'},
  {icon: featuresIcon_3, title: '15.5 mph', description: 'Max Speed'},
  {icon: featuresIcon_4, title: '18.6 Miles', description: 'Max Range'},
  {icon: featuresIcon_5, title: '15%', description: 'Hill Grade'},
  {icon: featuresIcon_6, title: '66-220 lbs', description: 'Payload'},
  {icon: featuresIcon_7, title: '5H', description: 'Water-Resistant'},
  {icon: featuresIcon_8, title: '7650mAh', description: 'Battery'}
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-f30/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-f30/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-f30/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-f30/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-f30/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-f30/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-f30/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-f30/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-f30/features/feature-4-desktop.jpg';
import FeatureSimple_4_mobile from '@/base/ks-f30/features/feature-4-mobile.jpg';
import FeatureSimple_5_desktop from '@/base/ks-f30/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-f30/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-f30/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-f30/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-f30/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-f30/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), {ssr: false});
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-f30/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-f30/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), {ssr: false});
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), {ssr: false});
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), {ssr: false});

export default function Home({allData}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSegway(allData.segways.adultSegways[3]));
    dispatch(setPrice(allData.segways.adultSegways[3].price));
  }, []);

  return (
    <>
      <CustomHead title="Kickscooter F30" />
      <TopStock />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter F30
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br />
            F30
          </>
        }
        currentSegway={allData.segways.adultSegways[3]}
      />
      <Tabs />
      <PackingListDinamic poster_type="type_3" />
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

      <FeaturesDinamic features={featuresItems} title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic title="KickScooter overview" subtitle="SEGWAY Ninebot Kickscooter F30" desktopImage={OverviewImgDesktop} mobileImage={OverviewImgMobile} />

      {/* 1 */}
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
            Equipped with an upgraded 2.1W high-brightness <br />
            LED light designed to illuminate the path ahead <br />
            of you and increase your visibility to others around you.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={634}
        titleMobile={<>Built-In Front LED Light</>}
        textMobile={
          <>
            Equipped with an upgraded 2.1W high-brightness <br />
            LED light designed to illuminate the path <br />
            aheadof you and increase your visibility <br />
            to others around you.
          </>
        }
      />

      {/* 2 */}
      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            Thicken <br />
            Fully-enclosed <br />
            Footboard
          </>
        }
        textDesktop={
          <>
            Reduces the vibration and ensures a <br />
            comfortable with additional padding for your <br />
            feet.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={432}
        titleMobile={
          <>
            Thicken Fully-enclosed <br />
            Footboard
          </>
        }
        textMobile={
          <>
            Reduces the vibration and ensures a comfortable <br />
            with additional padding for your feet .
          </>
        }
      />

      {/* 3 */}
      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Smart battery <br />
            Management system
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
        imgMobileHeight={380}
        titleMobile={
          <>
            Smart battery <br />
            Management system
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
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={
          <>
            10-inch High- <br />
            elasticity <br />
            Tire
          </>
        }
        textDesktop={
          <>
            The 10-inch pneumatic tires, with superior <br />
            shock absorption, make your ride smoother <br />
            and more stable even on bumpy terrain or <br />
            rough surfaces.
          </>
        }
        imgDesktop={FeatureSimple_4_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={645}
        imgMobile={FeatureSimple_4_mobile}
        imgMobileWidth={375}
        imgMobileHeight={522}
        titleMobile={<>10-inch High-elasticity Tire</>}
        textMobile={
          <>
            The 10-inch pneumatic tires, with superior shock <br />
            absorption, make your ride smoother and more <br />
            stable even on bumpy terrain or rough surfaces.
          </>
        }
      />

      {/* 5 */}
      <FeatureSimpleDinamic
        customClass="type-1"
        titleDesktop={
          <>
            Quick <br />
            Folding <br />
            System
          </>
        }
        textDesktop={
          <>
            With the Quick Folding System, the F Series can be easily <br />
            folded in 1 second to store in the trunk. Also, equipped <br />
            with the folding mechanism of the high-end folding <br />
            scooters, it is safe and durable.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={366}
        titleMobile={<>Quick Folding System</>}
        textMobile={
          <>
            With the Quick Folding System, the F Series can be <br />
            easily folded in 1 second to store in the trunk. Also, <br />
            equipped with the folding mechanism of the high- <br />
            end folding scooters, it is safe and durable.
          </>
        }
      />

      {/* 6 */}
      <FeatureSimpleDinamic
        customClass="type-5"
        titleDesktop={
          <>
            E-ABS <br /> Electronic <br />
            Brake & <br /> Disc Brake
          </>
        }
        textDesktop={
          <>
            Equipped with a front-wheel mechanical drum <br />
            brake and a regenerative electric rear brake, <br />
            the dual brake system offers more stability and better <br />
            steering to ensure a safe ride. In addition, the 140 mm <br />
            disc brakes increase reaction time by up <br />
            to 27% and respond in 0.1 s.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={474}
        titleMobile={
          <>
            E-ABS Electronic <br />
            Brake & Disc Brake
          </>
        }
        textMobile={
          <>
            Equipped with a front-wheel mechanical drum <br />
            brake and a regenerative electric rear brake, the <br />
            dual brake system offers more stability and better <br />
            steering to ensure a safe ride. In addition, the 140 <br />
            mm disc brakes increase reaction time by up to 27% <br />
            and respond in 0.1 s.
          </>
        }
      />

      {/* 7 */}
      <FeatureSimpleDinamic
        customClass="content-top-mobile"
        titleDesktop={
          <>
            High <br />
            Durability <br />
            Motor
          </>
        }
        textDesktop={
          <>
            With the powerful brushless direct current motor, the <br />
            Ninebot KickScooter F Series delivers a fast and <br />
            sturdy riding experience. The use of a high power <br />
            heat dissipation force increases the service life of <br />
            the motor, and the low heat prevents the motor from <br />
            burning out.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        widthDesktop={1376}
        heightDesktop={542}
        imgMobile={FeatureSimple_7_mobile}
        widthMobile={375}
        heightMobile={467}
        titleMobile={<>High Durability Motor</>}
        textMobile={
          <>
            With the powerful brushless direct current motor, <br /> the Ninebot KickScooter F Series delivers a fast <br /> and sturdy riding experience. The use of a high <br /> power heat
            dissipation force increases the service <br /> life of the motor, and the low heat prevents the <br /> motor from burning out.
          </>
        }
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[3]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>F30</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>F30</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={397}
        heightDesktop={496}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={354}
        customClass="ks-e-45"
        item={allData.segways.adultSegways[3]}
      />

      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[3]} />
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
  return <DefaultLayout items={data}>{page}</DefaultLayout>;
};
