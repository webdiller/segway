import dynamic from 'next/dynamic';

import CustomHead from '@/basic/CustomHead';
import { data } from '@/base/data';
import InfoLink from '@/sections/InfoLink';

import TopCategoryLoader from '@/sections/TopCategorySlider/TopCategoryLoader';
const TopCategorySlider = dynamic(() => import('@/sections/TopCategorySlider'), {
  loading: TopCategoryLoader
})

import CategorySlider from '@/sections/CategorySlider';
import Breadcrumbs from '@/sections/Breadcrumbs';
import Videos from '@/sections/Videos';

export default function HomePage({ allData }) {
  return (
    <>
      <CustomHead title="All gokarts" />
      <div className="main-page">
        <TopCategorySlider />
        <div className="main-page__breadcrumbs">
          <Breadcrumbs middleHref="/gokarts" activeLabelName="Gokarts" />
        </div>
        <div className="main-page__sliders">
          <CategorySlider
            keySlider="categoryPageSliderGokarts"
            allowTouchMove={false}
            customClassNames={['lg-title', 'disable-scroll-for-desktop']}
            title="Gokarts"
            products={allData.gokarts} />
        </div>
        <div className="main-page__videos"><Videos /></div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
