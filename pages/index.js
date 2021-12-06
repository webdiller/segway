import dynamic from 'next/dynamic';
import {useEffect} from 'react';
import DefaultLayout from '@/basic/DefaultLayout';

const TopStockDinamic = dynamic(() => import('@/sections/TopStock'));
const TopSwiperDinamic = dynamic(() => import('@/sections/TopSwiper'));
const SegwayProtectDinamic = dynamic(() => import('@/sections/SegwayProtect'));
const WelcomeDinamic = dynamic(() => import('@/sections/Welcome'));
const TabsDinamic = dynamic(() => import('@/sections/Tabs'));
const AccessoriesDinamic = dynamic(() => import('@/sections/Accessories'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'));
const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const FeaturesDinamic = dynamic(() => import('@/sections/Features'));
const BuildInFrontDinamic = dynamic(() => import('@/sections/BuildInFront'));
const OneStepDinamic = dynamic(() => import('@/sections/OneStep'));
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'));
const SmartBatteryDinamic = dynamic(() => import('@/sections/SmartBattery'));
const DualBrakingDinamic = dynamic(() => import('@/sections/DualBraking'));
const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const RegenerativeDinamic = dynamic(() => import('@/sections/Regenerative'));
const EasyOneCordDinamic = dynamic(() => import('@/sections/EasyOneCord'));
const RidingModesDinamic = dynamic(() => import('@/sections/RidingModes'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));
const SegwayNinebotDinamic = dynamic(() => import('@/sections/SegwayNinebot'));
const FixedModalDinamic = dynamic(() => import('@/modals/FixedModal'));

import {smallScooters, adultSegways, kickscooterMax, accessoeries, otherModels} from '@/base/data';

export default function Home({smallScootersData, allSegwaysData, kickscooterMaxData, accessoeriesData, otherModelsData}) {
  useEffect(() => {
    console.info('Code author: Eugene Butkov');
    console.info('github: https://github.com/webdiller');
    console.info('telegram: webdillerru');
  }, []);

  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <TopSwiperDinamic smallScootersData={smallScootersData} />
        <TopStockDinamic />
        <WelcomeDinamic />
        <TabsDinamic />
        <PackingListDinamic />
        <AccessoriesDinamic accessoeriesData={accessoeriesData} />
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
        <CompareSpecificationsDinamic allSegwaysData={allSegwaysData} kickscooterMaxData={kickscooterMaxData} />
        <SegwayProtectDinamic />
        <ControllFromSmartphoneDinamic />
        <SegwayNinebotDinamic />
        <OtherModelsDinamic otherModelsData={otherModelsData} />

        {/* MODALS */}
        <FixedModalDinamic />
      </DefaultLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      smallScootersData: smallScooters,
      allSegwaysData: adultSegways,
      kickscooterMaxData: kickscooterMax,
      accessoeriesData: accessoeries,
      otherModelsData: otherModels
    }
  };
}
