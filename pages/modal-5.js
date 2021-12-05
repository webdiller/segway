import DefaultLayout from "@/basic/DefaultLayout";
import { RemainTimeModalWithoutTimer } from "@/modals/RemainTimeModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModalWithoutTimer />
      </DefaultLayout>
    </div>
  );
}
