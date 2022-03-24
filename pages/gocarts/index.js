import dynamic from 'next/dynamic';

import CustomHead from '@/basic/CustomHead';
import { data } from '@/base/data';
import InfoLink from '@/sections/InfoLink';

import TopCategoryLoader from '@/sections/TopCategorySlider/TopCategoryLoader';
const TopCategorySlider = dynamic(() => import('@/sections/TopCategorySlider'), {
  loading: () => TopCategoryLoader
})

import CategorySlider from '@/sections/CategorySlider';
import Breadcrumbs from '@/sections/Breadcrumbs';
import Videos from '@/sections/Videos';

export default function HomePage({ allData }) {
  return (
    <>
      <CustomHead title="All gocarts" />
      <div className="main-page">
        <TopCategorySlider />
        <div className="main-page__breadcrumbs">
          <Breadcrumbs activeLabelName="Gocarts" />
        </div>
        <div className="main-page__sliders">
          <CategorySlider allowTouchMove={false} customClassNames={['lg-title','disable-scroll-for-desktop']} title="Gocarts" products={allData.segways} />
        </div>
        <div className="main-page__info-link">
          <InfoLink label="How to choose a KICKSCOOTER?" />
        </div>
        <div className="main-page__videos"><Videos/></div>
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
