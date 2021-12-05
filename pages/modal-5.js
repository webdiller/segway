import DefaultLayout from "@/basic/DefaultLayout";
import ProductAddedModal from "@/modals/ProductAddedModal/ProductAddedModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <ProductAddedModal />
      </DefaultLayout>
    </div>
  );
}
