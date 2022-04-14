import dynamic from 'next/dynamic';
import { data } from '@/base/data';
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

import FeaturesDesktopImage from '@/base/ks-max/large-image-desktop.jpg';
import FeaturesMobileImage from '@/base/ks-max/large-image-mobile.jpg';
const LargeImageDinamic = dynamic(() => import('@/sections/LargeImage'));

import featuresIcon_1 from '@/base/ks-max/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-max/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-max/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-max/features-icons/feature-4.svg';
import featuresIcon_5 from '@/base/ks-max/features-icons/feature-5.svg';
import featuresIcon_6 from '@/base/ks-max/features-icons/feature-6.svg';
import featuresIcon_7 from '@/base/ks-max/features-icons/feature-7.svg';
import featuresIcon_8 from '@/base/ks-max/features-icons/feature-8.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '10”', description: 'Pneumatic Tires' },
  { icon: featuresIcon_2, title: 'LED', description: 'Front LED Lights' },
  { icon: featuresIcon_3, title: '18.6 mph', description: 'Max Speed' },
  { icon: featuresIcon_4, title: '40.4 Miles', description: 'Max Range' },
  { icon: featuresIcon_5, title: '20%', description: 'Hill Grade' },
  { icon: featuresIcon_6, title: 'IPX5', description: 'Water-Resistant' },
  { icon: featuresIcon_7, title: '6H', description: 'Fast Charging' },
  { icon: featuresIcon_8, title: '551Wh', description: 'Battery' }
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import OverviewImgDesktop from '@/base/ks-max/overview-desktop.jpg';
import OverviewImgMobile from '@/base/ks-max/overview-mobile.jpg';
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));

import FeatureSimple_1_desktop from '@/base/ks-max/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-max/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-max/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-max/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-max/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-max/features/feature-3-mobile.jpg';
import FeatureSimple_4_desktop from '@/base/ks-max/features/feature-4-desktop.jpg';
import FeatureSimple_5_desktop from '@/base/ks-max/features/feature-5-desktop.jpg';
import FeatureSimple_5_mobile from '@/base/ks-max/features/feature-5-mobile.jpg';
import FeatureSimple_6_desktop from '@/base/ks-max/features/feature-6-desktop.jpg';
import FeatureSimple_6_mobile from '@/base/ks-max/features/feature-6-mobile.jpg';
import FeatureSimple_7_desktop from '@/base/ks-max/features/feature-7-desktop.jpg';
import FeatureSimple_7_mobile from '@/base/ks-max/features/feature-7-mobile.jpg';
const FeatureSimpleDinamic = dynamic(() => import('@/sections/Feature/FeatureSimple'));
const FeatureLiteDinamic = dynamic(() => import('@/sections/Feature/FeatureLite'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-max/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-max/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData }) {

  return (
    <>
      <CustomHead title="Kickscooter Max" />
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter MAX
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            MAX
          </>
        }
        currentSegway={allData.segways[0]}
      />

      <Tabs />

      <PackingListDinamic packingListImg={allData.segways[0].packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <LargeImageDinamic
        desktopWidth={1376}
        desktopHeight={567}
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
            Segway Ninebot Kickscooter MAX
          </>
        }
        titleMobile={<>KickScooter overview</>}
        subtitle={<>Segway Ninebot Kickscooter MAX</>}
        desktopImage={OverviewImgDesktop}
        mobileImage={OverviewImgMobile}
      />

      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Smart battery <br /> Management system <br /> (Smart-BMS)
          </>
        }
        textDesktop={
          <>
            The Smart-BMS closely monitors the battery status with multiple <br /> protection mechanisms to ensure the battery durability
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={471}
        titleMobile={
          <>
            Smart battery <br /> Management system <br /> (Smart-BMS)
          </>
        }
        textMobile={
          <>
            The Smart-BMS closely monitors the battery status <br /> with multiple protection mechanisms to ensure the <br /> battery durability
          </>
        }
      />

      <FeatureSimpleDinamic
        customClass="content-align-right-and-black"
        titleDesktop={
          <>
            Dual Braking <br /> System
          </>
        }
        textDesktop={
          <>
            Simultaneous mechanical front drum brake <br /> and regenerative electric back brake provide <br /> both stability and steerability. <br /> <br /> *IPX5 water resistance
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={507}
        titleMobile={<>Dual Braking System</>}
        textMobile={
          <>
            Simultaneous mechanical front drum brake and <br /> regenerative electric back brake provide both <br /> stability and steerability. <br /> <br /> *IPX5 water resistance
          </>
        }
      />

      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Built-In Front <br /> LED Light
          </>
        }
        textDesktop={
          <>
            Front-facing lights are designed with 2.5w high-brightness LED light to <br /> illuminate the path ahead of you and increase your visibility to others <br /> around you.
          </>
        }
        descriptionDesktop="*Disclaimer: for your safety, please try not to ride at night"
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={483}
        titleMobile={
          <>
            Smart battery <br /> Management system <br /> (Smart-BMS)
          </>
        }
        textMobile={
          <>
            The Smart-BMS closely monitors the battery status <br /> with multiple protection mechanisms to ensure the <br /> battery durability
          </>
        }
        descriptionMobile="*Disclaimer: for your safety, please try not to ride at night"
      />

      <FeatureLiteDinamic
        image={FeatureSimple_4_desktop}
        title="One-step Folding Mechanism"
        text={'Ninebot KickScooter MAX can be easily folded <br/> and carried around in 3 seconds.'.split('<br/>').join('\n')}
      />

      <FeatureSimpleDinamic
        customClass="ks-air-t15"
        titleDesktop={
          <>
            Regenerative Brake for <br /> Power Recycle
          </>
        }
        textDesktop={
          <>
            The innovative regenerative brake system turns Ninebot KickScooter MAX <br /> into an electric vehicle powered by electricity and recycled energy from <br /> riding. Energy will be
            collected from regenerative braking and distributed <br /> when you need a boost.
          </>
        }
        imgDesktop={FeatureSimple_5_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_5_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={
          <>
            Regenerative Brake <br /> for Power Recycle
          </>
        }
        textMobile={
          <>
            The innovative regenerative brake system turns <br /> Ninebot KickScooter MAX into an electric vehicle <br /> powered by electricity and recycled energy from <br /> riding. Energy will be
            collected from regenerative <br /> braking and distributed when you need a boost.
          </>
        }
      />

      <FeatureSimpleDinamic
        customClass="type-3"
        titleDesktop={
          <>
            Easy One Cord <br /> Fast Charging
          </>
        }
        textDesktop={
          <>
            The built-in charger lets riders recharge it easily <br /> when on the go without having to carry along a <br /> bulky charging adapter. 3A fast charge will give <br />
            Ninebot KickScooter MAX a full charge in 6 hours.
          </>
        }
        imgDesktop={FeatureSimple_6_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={505}
        imgMobile={FeatureSimple_6_mobile}
        imgMobileWidth={375}
        imgMobileHeight={434}
        titleMobile={
          <>
            Regenerative Brake <br /> for Power Recycle
          </>
        }
        textMobile={
          <>
            The innovative regenerative brake system turns <br /> Ninebot KickScooter MAX into an electric vehicle <br /> powered by electricity and recycled energy from <br /> riding. Energy will be
            collected from regenerative <br /> braking and distributed when you need a boost.
          </>
        }
      />

      <FeatureSimpleDinamic
        customClass="content-top-mobile"
        titleDesktop={<>3 Riding Modes</>}
        textDesktop={
          <>
            Eco, Standard, and Sports modes can be directly <br /> accessed by the intuitive LED dashboard, which also <br /> displays maintenance signals, power levels, <br />
            Bluetooth connectivity and more.
          </>
        }
        imgDesktop={FeatureSimple_7_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_7_mobile}
        imgMobileWidth={375}
        imgMobileHeight={354}
        titleMobile={<>3 Riding Modes</>}
        textMobile={
          <>
            Eco, Standard, and Sports modes can be directly <br /> accessed by the intuitive LED dashboard, which <br /> also displays maintenance signals, power levels, <br /> Bluetooth connectivity
            and more.
          </>
        }
      />

      <DownloadManualDinamic downloadManualHref={allData.segways[0].downloadManual} />
      <CompareSpecificationsDinamic
        items={allData.segways}
        mainSegway={allData.segways[0]} />
      <SegwayProtectDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter MAX
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> MAX
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={852}
        heightDesktop={470}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={248}
        customClass="wide-image"
        item={allData.segways[0]}
      />

      <OtherModelsDinamic items={allData.segways} />
      <DiscountModalDinamic />
      <FancyModal images={allData.segways[0].galleryImages} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      product: data.segways[0],
      preparedProtection: data.accessoeries[2]
    }
  };
}
