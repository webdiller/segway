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


export default function Home({ isMobile }) {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <TopSwiper />
        <TopStock />
        <PackingList />
        <Accessories />
        <Features />
        <KickScooterOverview isMobile={isMobile} />
        <SmartBattery />
        <DualBraking />
        <BuildInFront />
        <OneStep />
        <DownloadManual />
        <CompareSpecifications />
        <SegwayProtect />
        <Reviews />
        <OtherModels />
      </DefaultLayout>
    </div>
  );
}

export const getServerSideProps = ({ req }) => {
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }

  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { props: { isMobile } };
};
