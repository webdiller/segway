import DefaultLayout from "@/basic/DefaultLayout";
import RemainTimeModalTimer from "@/modals/RemainTimeModal/RemainTimeModalTimer";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModalTimer />
      </DefaultLayout>
    </div>
  );
}
