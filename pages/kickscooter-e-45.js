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

import FeaturesDesktopImage from '@/base/ks-e22/other/features_desktop.jpg';
import FeaturesMobileImage from '@/base/ks-e22/other/features_mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-e22/features/feature-1.svg';
import featuresIcon_2 from '@/base/ks-e22/features/feature-2.svg';
import featuresIcon_3 from '@/base/ks-e22/features/feature-3.svg';
import featuresIcon_4 from '@/base/ks-e22/features/feature-4.svg';
import featuresIcon_5 from '@/base/ks-e22/features/feature-5.svg';
import featuresIcon_6 from '@/base/ks-e22/features/feature-6.svg';
import featuresIcon_7 from '@/base/ks-e22/features/feature-7.svg';
import featuresIcon_8 from '@/base/ks-e22/features/feature-8.svg';
const featuresItems = [
  {icon: featuresIcon_1, title: '10', description: 'Pneumatic Tires'},
  {icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights'},
  {icon: featuresIcon_3, title: '18.6 mph', description: 'Max Speed'},
  {icon: featuresIcon_4, title: '28 Miles', description: 'Max Range'},
  {icon: featuresIcon_5, title: '20%', description: 'Hill Grade'},
  {icon: featuresIcon_6, title: '55-220 lbs', description: 'Payload'},
  {icon: featuresIcon_7, title: 'IPX4', description: 'Water-Resistant'},
  {icon: featuresIcon_8, title: '18650mAh', description: 'Battery'}
];
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import KickScooterOverviewDesktopImage from '@/base/ks-e-45/other/kick-scooter-overview_desktop.jpg';
import KickScooterOverviewMobileImage from '@/base/ks-e-45/other/kick-scooter-overview_mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureFirstTypeTwoDesktopBackgroundImage from '@/base/ks-e-45/other/feature-first-type-two_desktop.jpg';
import FeatureFirstTypeTwoMobileBackgroundImage from '@/base/ks-e-45/other/feature-first-type-two_mobile.jpg';
const FeatureFirstTypeTwoDinamic = dynamic(() => import('@/sections/FeaturesBlocks/first/FeatureFirstTypeTwo'));

import FeatureSecondTypeOneDesktopImage from '@/base/ks-e-45/other/feature-second-type-one_desktop.jpg';
import FeatureSecondTypeOneMobileImage from '@/base/ks-e-45/other/feature-second-type-one_mobile.jpg';
import FeatureSecondTypeOneDesktopImage2 from '@/base/ks-e-45/other/feature-second-type-one_desktop2.jpg';
import FeatureSecondTypeOneMobileImage2 from '@/base/ks-e-45/other/feature-second-type-one_mobile2.jpg';
const FeatureSecondTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/second/FeatureSecondTypeOne'));

import FeatureThirdTypeOneDesktopImage from '@/base/ks-e-45/other/feature-third-type-one_desktop.png';
import FeatureThirdTypeOneMobileImage from '@/base/ks-e-45/other/feature-third-type-one_mobile.png';
const FeatureThirdTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/third/FeatureThirdTypeOne'));

import FeatureFourthTypeOneDesktopImage from '@/base/ks-e22/other/feature-fourth-type-one_desktop.png';
const FeatureFourthTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/fourth/FeatureFourthTypeOne'));

import FeatureFifthTypeOneDesktopBackgroundImage from '@/base/ks-e22/other/feature-fifth-type-one_desktop-background.jpg';
import FeatureFifthTypeOneMobileBackgroundImage from '@/base/ks-e22/other/feature-fifth-type-one_mobile-background.jpg';
import FeatureFifthTypeOneDesktopImage from '@/base/ks-e22/other/feature-fifth-type-one_desktop.png';
import FeatureFifthTypeOneMobileImage from '@/base/ks-e22/other/feature-fifth-type-one_mobile.png';
const FeatureFifthTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/fifth/FeatureFifthTypeOne'));

import FeatureSixthTypeTwoDesktopImage from '@/base/ks-e-45/other/feature-fifth-type_desktop.jpg';
const FeatureSixthTypeTwoDinamic = dynamic(() => import('@/sections/FeaturesBlocks/sixth/FeatureSixthTypeTwo'));

import FeatureSeventhTypeOneDesktopBackgroundImage from '@/base/ks-e22/other/feature-seventh-type-one_desktop-background.jpg';
import FeatureSeventhTypeOneMobileBackgroundImage from '@/base/ks-e22/other/feature-seventh-type-one_mobile-background.jpg';
import FeatureSeventhTypeOneDesktopImage from '@/base/ks-e22/other/feature-seventh-type-one_desktop.jpg';
import FeatureSeventhTypeOneMobileImage from '@/base/ks-e22/other/feature-seventh-type-one_mobile.jpg';
const FeatureSeventhTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/seventh/FeatureSeventhTypeOne'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), {ssr: false});
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import segwayImage from '@/base/ks-e-45/other/segway-ninebot-image.jpg';
const SegwayNinebotDinamic = dynamic(() => import('@/sections/SegwayNinebot'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), {ssr: false});
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), {ssr: false});
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), {ssr: false});

export default function Home({allData}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSegway(allData.segways.adultSegways[4]));
    dispatch(setPrice(allData.segways.adultSegways[4].price));
  }, []);

  return (
    <>
      <CustomHead title="kickscooter-e-45" />
      <TopStock />
      <Welcome title="SEGWAY Ninebot Kickscooter E45" currentSegway={allData.segways.adultSegways[4]} />
      <Tabs />
      <PackingListDinamic toster_type="type_2" />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic imageAltText="Background image before features block" desktopImage={FeaturesDesktopImage} mobileImage={FeaturesMobileImage} />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic
        desktopTitle="KickScooter overview SEGWAY Ninebot Kickscooter E45"
        mobileTitle="KickScooter overview"
        subtitle="SEGWAY Ninebot Kickscooter E45"
        mobileImage={KickScooterOverviewMobileImage}
        desktopImage={KickScooterOverviewDesktopImage}
      />

      <FeatureFirstTypeTwoDinamic
        customClass="ks-e-45"
        desktopBackgroundImage={FeatureFirstTypeTwoDesktopBackgroundImage}
        mobileBackgroundImage={FeatureFirstTypeTwoMobileBackgroundImage}
        title="Innovative Thread Locking Technology"
        text="The vehicle body adopt the innovative thread locking technology used in high-speed bullet trains, and are strictly tested. After undergoing 6213 miles of testing, the frame of the E45 is still in tip top shape."
      />

      <FeatureSecondTypeOneDinamic
        desktopImage={FeatureSecondTypeOneDesktopImage}
        mobileImage={FeatureSecondTypeOneMobileImage}
        customClass="ks-e-45"
        title="Classic Foldable Design"
        text="The E45 features the classic folding design that is easy to carry and fits perfectly inside a car’s trunk. Weighing approximately 30 lbs. It can be easily carried and towed around, fits perfectly in the back of car trunks."
      />

      <FeatureThirdTypeOneDinamic
        desktopImage={FeatureThirdTypeOneDesktopImage}
        mobileImage={FeatureThirdTypeOneMobileImage}
        customClass="ks-e-45"
        title="2.5W Front LED Lights"
        text="Up to 44 ft extended illumination distance."
      />

      <FeatureSixthTypeTwoDinamic
        desktopImage={FeatureSixthTypeTwoDesktopImage}
        mobileImage={FeatureSixthTypeTwoDesktopImage}
        customClass="ks-e-45"
        title="9” Non-Pneumatic Tires"
        text="Three years in the making, the new inner support technology has higher resilience than ordinary solid tires, and is maintenance-free with high shock absorption. The 9 inch wheel size also provides additional comfort when riding through tough terrains."
      />

      <FeatureFifthTypeOneDinamic
        desktopBackgroundImage={FeatureFifthTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureFifthTypeOneMobileBackgroundImage}
        desktopImage={FeatureFifthTypeOneDesktopImage}
        mobileImage={FeatureFifthTypeOneMobileImage}
        customClass="ks-e22"
        title="Smart Battery Management System"
        text="The BMS system at Segway-Ninebot has undergone 7 years of continuous technological development and produced 300 million batteries. We are devoted to extending the battery life, ensuring user safety, and accurate power display"
      />

      <FeatureSecondTypeOneDinamic
        desktopImage={FeatureSecondTypeOneDesktopImage2}
        mobileImage={FeatureSecondTypeOneMobileImage2}
        customClass="ks-e-45-alt"
        title="Intuitive Digital Dashboard"
        text="Driving information is clear at a glance."
      />

      <FeatureFirstTypeTwoDinamic
        customClass="ks-e-45"
        desktopBackgroundImage={FeatureFirstTypeTwoDesktopBackgroundImage}
        mobileBackgroundImage={FeatureFirstTypeTwoMobileBackgroundImage}
        title="Innovative Thread Locking Technology"
        text="The vehicle body adopt the innovative thread locking technology used in high-speed bullet trains, and are strictly tested. After undergoing 6213 miles of testing, the frame of the E45 is still in tip top shape."
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[4]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />

      <SegwayNinebotDinamic
        mainImage={segwayImage}
        customClass="ks-e-45"
        lastWord="E45"
        titleDesktop="SEGWAY Ninebot Kickscooter E45"
        titleMobile={'SEGWAY Ninebot <br/> Kickscooter <br/> E45'.split('<br/>').join('\n')}
        item={allData.segways.adultSegways[4]}
      />
      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[4]} />
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
