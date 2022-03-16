import { MainPageItems } from '@/sections/MainPageItems';
import CustomHead from '@/basic/CustomHead';
import SegwayProtect from '@/sections/SegwayProtect';
import Tabs from '@/sections/Tabs';
import { data } from '@/base/data';

export default function HomePage({allData}) {
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
