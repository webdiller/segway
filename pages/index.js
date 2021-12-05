import { useEffect } from "react";
import DefaultLayout from "@/basic/DefaultLayout";
import Features from "@/sections/Features";
import KickScooterOverview from "@/sections/KickScooterOverview";
import TopStock from "@/sections/TopStock";
import SmartBattery from "@/sections/SmartBattery";
import DualBraking from "@/sections/DualBraking";
import BuildInFront from "@/sections/BuildInFront";
import OneStep from "@/sections/OneStep";
import DownloadManual from "@/sections/DownloadManual";
import TopSwiper from "@/sections/TopSwiper";
import SegwayProtect from "@/sections/SegwayProtect";
import Accessories from "@/sections/Accessories";
import CompareSpecifications from "@/sections/CompareSpecifications";
import PackingList from "@/sections/PackingList";
import OtherModels from "@/sections/OtherModels";
import Regenerative from "@/sections/Regenerative";
import EasyOneCord from "@/sections/EasyOneCord";
import RidingModes from "@/sections/RidingModes";
import ControllFromSmartphone from "@/sections/ControllFromSmartphone";
import Welcome from "@/sections/Welcome";
import Tabs from "@/sections/Tabs";
import SegwayNinebot from "@/sections/SegwayNinebot";
import {
  smallScooters,
  adultSegways,
  kickscooterMax,
  accessoeries,
  otherModels,
} from "@/base/data";

import FixedModal from "@/modals/FixedModal/FixedModal";

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
        <PackingList />
        <Accessories accessoeriesData={accessoeriesData} />
        <Features />
        <KickScooterOverview />
        <SmartBattery />
        <DualBraking />
        <BuildInFront />
        <OneStep />
        <Regenerative />
        <EasyOneCord />
        <RidingModes />
        <DownloadManual />
        <CompareSpecifications
          allSegwaysData={allSegwaysData}
          kickscooterMaxData={kickscooterMaxData}
        />
        <SegwayProtect />
        <ControllFromSmartphone />
        <SegwayNinebot />
        <OtherModels otherModelsData={otherModelsData} />

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
