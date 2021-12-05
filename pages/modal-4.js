import DefaultLayout from "@/basic/DefaultLayout";
import { RemainTimeModalWithTimer } from "@/modals/RemainTimeModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <RemainTimeModalWithTimer />
      </DefaultLayout>
    </div>
  );
}
