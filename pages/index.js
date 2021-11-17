import DefaultLayout from "../components/base/DefaultLayout";
import Features from "../components/sections/Features";
import KickScooterOverview from "../components/sections/KickScooterOverview";
import TopStock from "../components/sections/TopStock";
import SmartBattery from "../components/sections/SmartBattery";
import DualBraking from "../components/sections/DualBraking";

export default function Home() {
  return (
    <div>
      <DefaultLayout title="segway">
        <TopStock/>
        <Features />
        <KickScooterOverview />
        <SmartBattery />
        <DualBraking />
      </DefaultLayout>
    </div>
  );
}
