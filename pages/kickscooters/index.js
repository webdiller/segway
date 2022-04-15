import CustomHead from '@/basic/CustomHead';
import { data } from '@/base/data';
import InfoLink from '@/sections/InfoLink';

import CategorySlider from '@/sections/CategorySlider';
import Videos from '@/sections/Videos';

export default function HomePage({ allData }) {
  return (
    <>
      <CustomHead title="All kickscooters" />
      <div className="main-page">
        <div className="main-page__sliders">
          <CategorySlider
            keySlider="categoryPageSliderKickscooters"
            allowTouchMove={false}
            customClassNames={['lg-title', 'disable-scroll-for-desktop']}
            title="KICKSCOOTER"
            products={allData.segways} />
        </div>
        <div className="main-page__info-link">
          <InfoLink label="How to choose a KICKSCOOTER?" />
        </div>
        <div className="main-page__videos"><Videos /></div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data,
      preparedProtection: data.accessoeries[2]
    }
  };
}
