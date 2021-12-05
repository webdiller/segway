import DefaultLayout from "@/basic/DefaultLayout";
import RemainTimeModal from "@/modals/RemainTimeModal/RemainTimeModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModal />
      </DefaultLayout>
    </div>
  );
}
