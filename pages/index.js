import dynamic from 'next/dynamic';

import CustomHead from '@/basic/CustomHead';
import Tabs from '@/sections/Tabs';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

import MainModelSlider from '@/sections/MainModelSlider';
import InfoLink from '@/sections/InfoLink';
import Reviews from '@/sections/Reviews/ReviewsSlider';

import CategorySlider from '@/sections/CategorySlider';

export default function HomePage({ allData }) {
  return (
    <>
      <CustomHead title="Main page" />
      <div className="main-page">
        <MainModelSlider />
        <div className="main-page__sliders">
          <CategorySlider
            keySlider="mainPageSliderKickscooters"
            title="KICKSCOOTER"
            products={allData.kickskooters} />

          <br /><br />

          {/* Расскоментировать при необходимости */}
          {/* <div className="main-page__info-link">
            <InfoLink label="How to choose a KICKSCOOTER?" />
          </div> */}

          <CategorySlider
            keySlider="mainPageSliderGokarts"
            customClassNames="main-page__margin-slider"
            title="GOKART"
            products={allData.gokarts} />
          <CategorySlider
            addToCartOnClick
            keySlider="mainPageSliderAccessoeries"
            customClassNames={['accessoeries']}
            typeScrollBar="white"
            typeItemName="accessories"
            title="Accessories"
            products={allData.accessoeries} />
        </div>

        <div className="main-page__reviews">
          <Reviews />
        </div>
        <div className="main-page__tabs">
          <Tabs
            showApp
            tab_4_title={<>APP <br />Controll</>}
            title_4_desktop={<>Access More Features <br /> And Functions Like A Pro</>}
            title_4_mobile={<>Access More Features <br /> And Functions Like A Pro</>}
            text_4_desktop={
              <>
                Explore the various tabs to learn about the health of the device.<br />
                Checking the battery level, speed limiter, mileage calculator <br />
                tool and more.
              </>
            }
            text_4_mobile={<>
              Explore the various tabs to learn about <br />
              the health of the device. Checking the battery <br />
              level, speed limiter, mileage calculator <br />
              tool and more.
            </>}
          />
        </div>
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
