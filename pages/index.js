import dynamic from 'next/dynamic';
import { useEffect } from "react";
import DefaultLayout from "@/basic/DefaultLayout";
import TopStock from "@/sections/TopStock";
import TopSwiper from "@/sections/TopSwiper";
import SegwayProtect from "@/sections/SegwayProtect";
import Welcome from "@/sections/Welcome";
import Tabs from "@/sections/Tabs";
import FixedModal from "@/modals/FixedModal";

const AccessoriesDinamic = dynamic(() => import('@/sections/Accessories'),{ loading: () => <p>AccessoriesDinamic...</p> })
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'),{ loading: () => <p>CompareSpecifications...</p> })
const PackingListDinamic = dynamic(() => import('@/sections/PackingList'),{ loading: () => <p>PackingList...</p> })
const FeaturesDinamic = dynamic(() => import('@/sections/Features'),{ loading: () => <p>Features...</p> })
const BuildInFrontDinamic = dynamic(() => import('@/sections/BuildInFront'),{ loading: () => <p>BuildInFront...</p> })
const OneStepDinamic = dynamic(() => import('@/sections/OneStep'),{ loading: () => <p>OneStep...</p> })
const KickScooterOverviewDinamic = dynamic(() => import('@/sections/KickScooterOverview'),{ loading: () => <p>KickScooterOverview...</p> })
const SmartBatteryDinamic = dynamic(() => import('@/sections/SmartBattery'),{ loading: () => <p>SmartBattery...</p> })
const DualBrakingDinamic = dynamic(() => import('@/sections/DualBraking'),{ loading: () => <p>DualBraking...</p> })
const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'),{ loading: () => <p>DownloadManual...</p> })
const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'),{ loading: () => <p>OtherModels...</p> })
const RegenerativeDinamic = dynamic(() => import('@/sections/Regenerative'),{ loading: () => <p>Regenerative...</p> })
const EasyOneCordDinamic = dynamic(() => import('@/sections/EasyOneCord'),{ loading: () => <p>EasyOneCord...</p> })
const RidingModesDinamic = dynamic(() => import('@/sections/RidingModes'),{ loading: () => <p>RidingModes...</p> })
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'),{ loading: () => <p>ControllFromSmartphone...</p> })
const SegwayNinebotDinamic = dynamic(() => import('@/sections/SegwayNinebot'),{ loading: () => <p>SegwayNinebot...</p> })

import {
  smallScooters,
  adultSegways,
  kickscooterMax,
  accessoeries,
  otherModels,
} from "@/base/data";

export default function Home({
  smallScootersData,
  allSegwaysData,
  kickscooterMaxData,
  accessoeriesData,
  otherModelsData,
}) {
  useEffect(() => {
    console.info("Code author: Eugene Butkov");
    console.info("github: https://github.com/webdiller");
    console.info("telegram: webdillerru");
  }, []);

  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <TopSwiper smallScootersData={smallScootersData} />
        <TopStock />
        <Welcome />
        <Tabs />
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
        <CompareSpecificationsDinamic
          allSegwaysData={allSegwaysData}
          kickscooterMaxData={kickscooterMaxData}
        />
        <SegwayProtect />
        <ControllFromSmartphoneDinamic />
        <SegwayNinebotDinamic />
        <OtherModelsDinamic otherModelsData={otherModelsData} />

        {/* MODALS */}
        <FixedModal />
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
      otherModelsData: otherModels,
    },
  };
}
