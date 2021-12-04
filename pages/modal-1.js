import DefaultLayout from "../components/base/DefaultLayout";
import DidntFindModal from "../components/modals/DidntFindModal/DidntFindModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <DidntFindModal />
      </DefaultLayout>
    </div>
  );
}
