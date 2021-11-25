import { useEffect } from "react";
import DefaultLayout from "../components/base/DefaultLayout";
import Features from "../components/sections/Features";
import KickScooterOverview from "../components/sections/KickScooterOverview";
import TopStock from "../components/sections/TopStock";
import SmartBattery from "../components/sections/SmartBattery";
import DualBraking from "../components/sections/DualBraking";
import BuildInFront from "../components/sections/BuildInFront";
import OneStep from "../components/sections/OneStep";
import DownloadManual from "../components/sections/DownloadManual";
import Reviews from "../components/sections/Reviews";
import TopSwiper from "../components/sections/TopSwiper";
import SegwayProtect from "../components/sections/SegwayProtect";
import Accessories from "../components/sections/Accessories";
import CompareSpecifications from "../components/sections/CompareSpecifications";
import PackingList from "../components/sections/PackingList";
import OtherModels from "../components/sections/OtherModels";
import Regenerative from "../components/sections/Regenerative";
import EasyOneCord from "../components/sections/EasyOneCord";
import RidingModes from "../components/sections/RidingModes";
import ControllFromSmartphone from "../components/sections/ControllFromSmartphone";
import Welcome from "../components/sections/Welcome";
import Tabs from "../components/sections/Tabs";
import SegwayNinebot from "../components/sections/SegwayNinebot";

export default function Home({ isMobile }) {

  useEffect(() => {
    console.info('Code author: Eugene Butkov');
    console.info('github: https://github.com/webdiller');
    console.info('telegram: webdillerru');
  }, [])

  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <TopSwiper />
        <TopStock />
        <Welcome />
        <Tabs />
        <PackingList />
        <Accessories />
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
        <CompareSpecifications />
        <SegwayProtect />
        <Reviews />
        <ControllFromSmartphone />
        <SegwayNinebot />
        <OtherModels />
      </DefaultLayout>
    </div>
  );
}
