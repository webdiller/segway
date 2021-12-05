import DefaultLayout from "@/basic/DefaultLayout";
import DidntFindModal from "@/modals/DidntFindModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <DidntFindModal isWhiteMode={false} />
      </DefaultLayout>
    </div>
  );
}
