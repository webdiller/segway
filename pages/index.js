import dynamic from 'next/dynamic';
import {useEffect} from 'react';
import DefaultLayout from '@/basic/DefaultLayout';

const TopSwiperDinamic = dynamic(() => import('@/sections/TopSwiper'));
const TopStockDinamic = dynamic(() => import('@/sections/TopStock'));
const WelcomeDinamic = dynamic(() => import('@/sections/Welcome'));
const TabsDinamic = dynamic(() => import('@/sections/Tabs'));
const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesDinamic = dynamic(() => import('@/sections/Accessories'));
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
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));
const SegwayNinebotDinamic = dynamic(() => import('@/sections/SegwayNinebot'));
const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'));

import {data} from '@/base/data';

export default function Home({allData}) {
  useEffect(() => {
    console.info('Code author: Eugene Butkov');
    console.info('github: https://github.com/webdiller');
    console.info('telegram: webdillerru');
  }, []);

  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <TopSwiperDinamic items={allData} />
        <TopStockDinamic />
        <WelcomeDinamic />
        <TabsDinamic />
        <PackingListDinamic />
        <AccessoriesDinamic items={allData.accessoeries} />
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
        <SegwayNinebotDinamic />
        <OtherModelsDinamic items={allData.segways.adultSegways} />
        <FixedModalDinamic />
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
