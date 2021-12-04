import RemainTimeModalTimer from "../components/modals/RemainTimeModal/RemainTimeModalTimer";
import DefaultLayout from "../components/base/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModalTimer />
      </DefaultLayout>
    </div>
  );
}
