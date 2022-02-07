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

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import KickScooterOverviewDesktopImage from '@/base/ks-e22/other/kick-scooter-overview_desktop.png';
import KickScooterOverviewMobileImage from '@/base/ks-e22/other/kick-scooter-overview_mobile.png';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureFirstTypeOneDesktopBackgroundImage from '@/base/ks-e22/other/feature-first-type-one_desktop-background.jpg';
import FeatureFirstTypeOneMobileBackgroundImage from '@/base/ks-e22/other/feature-first-type-one_mobile-background.jpg';
import FeatureFirstTypeOneDesktopImage from '@/base/ks-e22/other/feature-first-type-one_desktop.png';
import FeatureFirstTypeOneMobileImage from '@/base/ks-e22/other/feature-first-type-one_mobile.png';
const FeatureFirstTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/first/FeatureFirstTypeOne'));

import FeatureSecondTypeOneDesktopImage from '@/base/ks-e22/other/feature-second-type-one_desktop.png';
import FeatureSecondTypeOneMobileImage from '@/base/ks-e22/other/feature-second-type-one_mobile.png';
const FeatureSecondTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/second/FeatureSecondTypeOne'));

import FeatureThirdTypeOneDesktopBackgroundImage from '@/base/ks-e22/other/feature-third-type-one_desktop-background.jpg';
import FeatureThirdTypeOneMobileBackgroundImage from '@/base/ks-e22/other/feature-third-type-one_mobile-background.jpg';
import FeatureThirdTypeOneDesktopImage from '@/base/ks-e22/other/feature-third-type-one_desktop.png';
import FeatureThirdTypeOneMobileImage from '@/base/ks-e22/other/feature-third-type-one_mobile.png';
const FeatureThirdTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/third/FeatureThirdTypeOne'));

import FeatureFourthTypeOneDesktopImage from '@/base/ks-e22/other/feature-fourth-type-one_desktop.png';
const FeatureFourthTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/fourth/FeatureFourthTypeOne'));

import FeatureFifthTypeOneDesktopBackgroundImage from '@/base/ks-e22/other/feature-fifth-type-one_desktop-background.jpg';
import FeatureFifthTypeOneMobileBackgroundImage from '@/base/ks-e22/other/feature-fifth-type-one_mobile-background.jpg';
import FeatureFifthTypeOneDesktopImage from '@/base/ks-e22/other/feature-fifth-type-one_desktop.png';
import FeatureFifthTypeOneMobileImage from '@/base/ks-e22/other/feature-fifth-type-one_mobile.png';
const FeatureFifthTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/fifth/FeatureFifthTypeOne'));

import FeatureSixthTypeTwoDesktopImage from '@/base/ks-e22/other/feature-sixth-type_desktop.png';
import FeatureSixthTypeTwoMobileImage from '@/base/ks-e22/other/feature-sixth-type_mobile.png';
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

import segwayImage from '@/base/ks-max/other/segway-ninebot-image.png';
const SegwayNinebotDinamic = dynamic(() => import('@/sections/SegwayNinebot'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'), {ssr: false});
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), {ssr: false});
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), {ssr: false});

export default function Home({allData}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSegway(allData.segways.adultSegways[0]));
    dispatch(setPrice(allData.segways.adultSegways[0].price));
  }, []);

  return (
    <>
      <CustomHead title="ks-e-22" />
      <TopStock />
      <Welcome title="SEGWAY Ninebot Kickscooter E22" currentSegway={allData.segways.adultSegways[0]} />
      <Tabs />
      <PackingListDinamic toster_type="type_2" />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic imageAltText="Background image before features block" desktopImage={FeaturesDesktopImage} mobileImage={FeaturesMobileImage} />

      <FeaturesDinamic title="IMPRESSIVE FEATURES" desktopImage={FeaturesDesktopImage} mobileImage={FeaturesMobileImage} />

      <KickScooterOverviewDinamic
        desktopTitle="KickScooter overview SEGWAY Ninebot Kickscooter E22"
        mobileTitle="KickScooter overview"
        subtitle="SEGWAY Ninebot Kickscooter E22"
        mobileImage={KickScooterOverviewMobileImage}
        desktopImage={KickScooterOverviewDesktopImage}
      />

      <FeatureFirstTypeOneDinamic
        customClass="ks-e22"
        desktopBackgroundImage={FeatureFirstTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureFirstTypeOneMobileBackgroundImage}
        desktopImage={FeatureFirstTypeOneDesktopImage}
        mobileImage={FeatureFirstTypeOneMobileImage}
        title="Brushless Direct Current Motor"
        text="The Ninebot KickScooter E22 strives to reach new heights of performance with the BDLC. The upgrade comes in the form of greater riding dynamic provided by faster acceleration plus stronger 15% hill grade capability."
        mobileWidth={375}
        mobileHeight={291}
        desktopWidth={720}
        desktopHeight={547}
      />

      <FeatureSecondTypeOneDinamic
        desktopImage={FeatureSecondTypeOneDesktopImage}
        mobileImage={FeatureSecondTypeOneMobileImage}
        customClass="ks-e22"
        title="Multiple Shock Absorption Designs"
        text="With thickened shock absorbing foam cushion seat, seapost suspension and dual shock absorbing balls delivers a smooth ride on all types of terrain."
      />

      <FeatureThirdTypeOneDinamic
        desktopBackgroundImage={FeatureThirdTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureThirdTypeOneMobileBackgroundImage}
        desktopImage={FeatureThirdTypeOneDesktopImage}
        mobileImage={FeatureThirdTypeOneMobileImage}
        customClass="ks-e22"
        title="2.5W LED Headlamp"
        text="The 44.3 ft. range headlight delivers Increased safety in dark surroundings. Based on the Bright/Dark Cut-Off Line, focusing the lights at a low angle on the road will provide extra visibility and safety."
      />

      <FeatureFourthTypeOneDinamic
        customClass="ks-e22"
        desktopImage={FeatureFourthTypeOneDesktopImage}
        title="One-step Folding Mechanism"
        text="Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds."
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

      <FeatureSixthTypeTwoDinamic
        desktopImage={FeatureSixthTypeTwoDesktopImage}
        mobileImage={FeatureSixthTypeTwoMobileImage}
        customClass="ks-e22"
        title="Effortless Installation"
        text="For those longer rides, easily add the addle seat, no additional drilling required. Sit and ride in comfort when the seat is attached, or remove the seat when you want a more traditional ride."
      />

      <FeatureSeventhTypeOneDinamic
        desktopBackgroundImage={FeatureSeventhTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureSeventhTypeOneMobileBackgroundImage}
        desktopImage={FeatureSeventhTypeOneDesktopImage}
        mobileImage={FeatureSeventhTypeOneMobileImage}
        desktopWidth={992}
        desktopHeight={542}
        customClass="ks-e22"
        titleDesktop="Supreme Shock Absorption, No Tire Punctures"
        titleMobile={'3 Supreme Shock,<br/> Absorption,<br/> No Tire Punctures'.split('<br/>').join('\n')}
        text="Developed and fine-tuned for 3 years, FlatFree Tires* fill the inner tube with a new PU foaming material. This design tackles the pain point of possible tire leakage with pneumatic tires, while retaining the comfort of the riding, and the practicality of little maintenance needed."
        text2="The upgraded 9-inch tires deliver more stability and comfort than the previous 8-inch tires, so you don’t have to worry about bumpy roads."
        text3="*FlatFree Tire Technology: Unlike common solid tires, it fills the inner tube with a new PU foaming material. This design solves the problem of possible tire leakage with pneumatic tires, while retaining the comfort of the riding, and the practicality of little maintenance needed."
      />

      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[0]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />

      <SegwayNinebotDinamic
        mainImage={segwayImage}
        customClass="ks-e22"
        lastWord="E22"
        titleDesktop="SEGWAY Ninebot Kickscooter E22"
        titleMobile={'SEGWAY Ninebot <br/> Kickscooter <br/> E22'.split('<br/>').join('\n')}
        item={allData.segways.adultSegways[0]}
      />
      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[0]} />
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
