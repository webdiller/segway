import DefaultLayout from "@/basic/DefaultLayout";
import DiscountModal from "@/modals/DiscountModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <DiscountModal />
      </DefaultLayout>
    </div>
  );
}
