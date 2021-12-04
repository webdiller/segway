import RemainTimeModal from "../components/modals/RemainTimeModal/RemainTimeModal";
import DefaultLayout from "../components/base/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModal />
      </DefaultLayout>
    </div>
  );
}
