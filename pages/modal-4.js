import DefaultLayout from "@/basic/DefaultLayout";
import RemainTimeModalTimer from "@/modals/RemainTimeModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModalTimer />
      </DefaultLayout>
    </div>
  );
}
