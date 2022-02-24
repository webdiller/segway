import MainPageLayout from '@/layouts/MainPageLayout';
import {MainPageItems} from '@/sections/MainPageItems';
import CustomHead from '@/basic/CustomHead';
import SegwayProtect from '@/sections/SegwayProtect';
import Tabs from '@/sections/Tabs';

export default function Categories() {
  return (
    <>
      <CustomHead title="Main page" />
      <div className="categories-page">
        <div className="categories-page__items">
          <MainPageItems />
        </div>
        <div className="categories-page__protect">
          <SegwayProtect customClass="type-2" />
        </div>
        <div className="categories-page__tabs">
          <Tabs />
        </div>
      </div>
    </>
  );
}

Categories.getLayout = function getLayout(page) {
  return <MainPageLayout>{page}</MainPageLayout>;
};
