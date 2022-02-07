import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';
import {data} from '@/base/data';
import Welcome from '@/sections/Welcome';
import TopStock from '@/sections/TopStock';
import Tabs from '@/sections/Tabs';
import {FancyModal} from 'components/shared/Modal';
import CustomHead from '@/basic/CustomHead';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPrice, setSegway} from '@/actions/fixedModal';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-max/other/features_desktop.jpg';
import FeaturesMobileImage from '@/base/ks-max/other/features_mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import KickScooterOverviewDesktopImage from '@/base/ks-max/other/kick-scooter-overview_desktop.png';
import KickScooterOverviewMobileImage from '@/base/ks-max/other/kick-scooter-overview_mobile.png';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureFirstTypeOneDesktopBackgroundImage from '@/base/ks-max/other/feature-first-type-one_desktop-background.jpg';
import FeatureFirstTypeOneMobileBackgroundImage from '@/base/ks-max/other/feature-first-type-one_mobile-background.jpg';
import FeatureFirstTypeOneDesktopImage from '@/base/ks-max/other/feature-first-type-one_desktop.png';
import FeatureFirstTypeOneMobileImage from '@/base/ks-max/other/feature-first-type-one_mobile.png';
const FeatureFirstTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/first/FeatureFirstTypeOne'));

import FeatureSecondTypeOneDesktopImage from '@/base/ks-max/other/feature-second-type-one_desktop.png';
import FeatureSecondTypeOneMobileImage from '@/base/ks-max/other/feature-second-type-one_mobile.png';
const FeatureSecondTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/second/FeatureSecondTypeOne'));

import FeatureThirdTypeOneDesktopBackgroundImage from '@/base/ks-max/other/feature-third-type-one_desktop-background.jpg';
import FeatureThirdTypeOneMobileBackgroundImage from '@/base/ks-max/other/feature-third-type-one_mobile-background.jpg';
import FeatureThirdTypeOneDesktopImage from '@/base/ks-max/other/feature-third-type-one_desktop.png';
import FeatureThirdTypeOneMobileImage from '@/base/ks-max/other/feature-third-type-one_mobile.png';
const FeatureThirdTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/third/FeatureThirdTypeOne'));

import FeatureFourthTypeOneDesktopImage from '@/base/ks-max/other/feature-fourth-type-one_desktop.png';
const FeatureFourthTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/fourth/FeatureFourthTypeOne'));

import FeatureFifthTypeOneDesktopBackgroundImage from '@/base/ks-max/other/feature-fifth-type-one_desktop-background.jpg';
import FeatureFifthTypeOneMobileBackgroundImage from '@/base/ks-max/other/feature-fifth-type-one_mobile-background.jpg';
import FeatureFifthTypeOneDesktopImage from '@/base/ks-max/other/feature-fifth-type-one_desktop.png';
import FeatureFifthTypeOneMobileImage from '@/base/ks-max/other/feature-fifth-type-one_mobile.png';
const FeatureFifthTypeOneDinamic = dynamic(() => import('@/sections/FeaturesBlocks/fifth/FeatureFifthTypeOne'));

const EasyOneCordDinamic = dynamic(() => import('@/sections/EasyOneCord'));

import FeatureSeventhTypeOneDesktopBackgroundImage from '@/base/ks-max/other/feature-seventh-type-one_desktop-background.jpg';
import FeatureSeventhTypeOneMobileBackgroundImage from '@/base/ks-max/other/feature-seventh-type-one_mobile-background.jpg';
import FeatureSeventhTypeOneDesktopImage from '@/base/ks-max/other/feature-seventh-type-one_desktop.png';
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
    dispatch(setSegway(allData.segways.adultSegways[5]));
    dispatch(setPrice(allData.segways.adultSegways[5].price));
  }, []);

  return (
    <>
      <CustomHead title="kickscooter-max" />
      <TopStock />

      <Welcome title="SEGWAY Ninebot Kickscooter MAX" currentSegway={allData.segways.adultSegways[5]} />
      <Tabs />
      <PackingListDinamic />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic imageAltText="Background image before features block" desktopImage={FeaturesDesktopImage} mobileImage={FeaturesMobileImage} />

      <FeaturesDinamic title="IMPRESSIVE FEATURES" />

      <KickScooterOverviewDinamic
        desktopTitle="KickScooter overview Segway Ninebot Kickscooter MAX"
        mobileTitle="KickScooter overview"
        subtitle="Segway Ninebot Kickscooter MAX"
        mobileImage={KickScooterOverviewMobileImage}
        desktopImage={KickScooterOverviewDesktopImage}
      />

      <FeatureFirstTypeOneDinamic
        desktopBackgroundImage={FeatureFirstTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureFirstTypeOneMobileBackgroundImage}
        desktopImage={FeatureFirstTypeOneDesktopImage}
        mobileImage={FeatureFirstTypeOneMobileImage}
        title="Smart battery Management system (Smart-BMS)"
        text="The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability"
        mobileWidth={375}
        mobileHeight={291}
        desktopWidth={720}
        desktopHeight={547}
      />

      <FeatureSecondTypeOneDinamic
        desktopImage={FeatureSecondTypeOneDesktopImage}
        mobileImage={FeatureSecondTypeOneMobileImage}
        customClass="ks-max"
        title="Dual Braking System"
        text="Simultaneous mechanical front drum brake and regenerative electric back brake provide both stability and steerability."
      />

      <FeatureThirdTypeOneDinamic
        desktopBackgroundImage={FeatureThirdTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureThirdTypeOneMobileBackgroundImage}
        desktopImage={FeatureThirdTypeOneDesktopImage}
        mobileImage={FeatureThirdTypeOneMobileImage}
        title="Built-In Front LED Lightp"
        text="Front-facing lights are designed with 2.5w high-brightness LED light to illuminate the path ahead of you and increase your visibility to others around you."
        lastText="*IPX5 water resistance"
      />

      <FeatureFourthTypeOneDinamic
        customClass="ks-max"
        desktopImage={FeatureFourthTypeOneDesktopImage}
        title="One-step Folding Mechanism"
        text="Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds."
      />

      <FeatureFifthTypeOneDinamic
        desktopBackgroundImage={FeatureFifthTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureFifthTypeOneMobileBackgroundImage}
        desktopImage={FeatureFifthTypeOneDesktopImage}
        mobileImage={FeatureFifthTypeOneMobileImage}
        title="Regenerative Brake for Power Recycle"
        text="The innovative regenerative brake system turns Ninebot KickScooter MAX into an electric vehicle powered by electricity and recycled energy from riding. Energy will be collected from regenerative braking and distributed when you need a boost."
      />

      <EasyOneCordDinamic />
      <FeatureSeventhTypeOneDinamic
        desktopBackgroundImage={FeatureSeventhTypeOneDesktopBackgroundImage}
        mobileBackgroundImage={FeatureSeventhTypeOneMobileBackgroundImage}
        desktopImage={FeatureSeventhTypeOneDesktopImage}
        mobileImage={FeatureSeventhTypeOneDesktopImage}
        titleDesktop="3 Riding Modes"
        titleMobile="3 Riding Modes"
        text="Eco, Standard, and Sports modes can be directly accessed by the intuitive LED dashboard, which also displays maintenance signals, power levels, Bluetooth connectivity and more."
      />
      <DownloadManualDinamic />
      <CompareSpecificationsDinamic items={allData.segways} mainSegway={allData.segways.adultSegways[5]} />
      <SegwayProtectDinamic />
      <ControllFromSmartphoneDinamic />

      <SegwayNinebotDinamic
        mainImage={segwayImage}
        titleDesktop="SEGWAY Ninebot Kickscooter MAX"
        titleMobile={'SEGWAY Ninebot <br/> Kickscooter <br/> MAX'.split('<br/>').join('\n')}
        item={allData.segways.adultSegways[5]}
      />
      
      <OtherModelsDinamic items={[...allData.segways.adultSegways, ...allData.segways.kidsSegways]} />
      <FixedModalDinamic segwayItem={allData.segways.adultSegways[5]} />
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
