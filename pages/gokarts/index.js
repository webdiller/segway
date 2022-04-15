
import CustomHead from '@/basic/CustomHead';
import { data } from '@/base/data';

import CategorySlider from '@/sections/CategorySlider';
import Videos from '@/sections/Videos';

export default function HomePage({ allData }) {

  return (
    <>
      <CustomHead title="All gokarts" />
      <div className="main-page">
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
