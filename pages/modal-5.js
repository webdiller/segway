import DefaultLayout from "../components/base/DefaultLayout";
import ProductAddedModal from "../components/modals/ProductAddedModal/ProductAddedModal";

export default function Home() {
  return (
    <div>
      <DefaultLayout description="segway description" title="segway index">
        <ProductAddedModal />
      </DefaultLayout>
    </div>
  );
}
