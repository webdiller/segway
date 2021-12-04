import DefaultLayout from "../components/base/DefaultLayout";
import DiscountModal from "../components/modals/DiscountModal/DiscountModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <DiscountModal />
      </DefaultLayout>
    </div>
  );
}
