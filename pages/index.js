import dynamic from 'next/dynamic';
import DefaultLayout from '@/basic/DefaultLayout';

const WelcomeDinamic = dynamic(() => import('@/sections/Welcome'));
const TabsDinamic = dynamic(() => import('@/sections/Tabs'));
const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));
const SmartBatteryDinamic = dynamic(() => import('@/sections/SmartBattery'));
const DualBrakingDinamic = dynamic(() => import('@/sections/DualBraking'));
const BuildInFrontDinamic = dynamic(() => import('@/sections/BuildInFront'));
const OneStepDinamic = dynamic(() => import('@/sections/OneStep'));
const RegenerativeDinamic = dynamic(() => import('@/sections/Regenerative'));
const EasyOneCordDinamic = dynamic(() => import('@/sections/EasyOneCord'));
const RidingModesDinamic = dynamic(() => import('@/sections/RidingModes'));
const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), {ssr: false});
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));
const SegwayNinebotDinamic = dynamic(() => import('@/sections/SegwayNinebot'));
const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'));
const ProductAddedModalDinamic = dynamic(() => import('@/modals/ProductAddedModal'));

import {data} from '@/base/data';
// import useToggleScroll from '@/hooks/useToggleScroll';

export default function Home({allData}) {
  
  return (
    <div>
      <DefaultLayout items={allData} description="segway description" title="segway index">
        {/* <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <button onClick={useToggleScroll(updateClass=true)}>Toggle</button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div> */}
        <WelcomeDinamic item={allData.segways.adultSegways[5]} />
        <TabsDinamic />
        <PackingListDinamic />
        <AccessoriesSliderDinamic items={allData.accessoeries} />
        <FeaturesDinamic />
        <KickScooterOverviewDinamic />
        <SmartBatteryDinamic />
        <DualBrakingDinamic />
        <BuildInFrontDinamic />
        <OneStepDinamic />
        <RegenerativeDinamic />
        <EasyOneCordDinamic />
        <RidingModesDinamic />
        <DownloadManualDinamic />
        <CompareSpecificationsDinamic items={allData.segways} />
        <SegwayProtectDinamic />
        <ControllFromSmartphoneDinamic />
        <SegwayNinebotDinamic item={allData.segways.adultSegways[5]} />
        <OtherModelsDinamic items={allData.segways.adultSegways} />
        {/* <FixedModalDinamic anchor="?buyItNow=true&buyItNowFromFixedModal=true&id=006" /> */}
        <DiscountModalDinamic />
        <ProductAddedModalDinamic specificItem={allData.segways.adultSegways[5]} items={allData.segways.adultSegways} />
      </DefaultLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
