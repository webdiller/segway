import kickscooter from '@/base/categories/kickscooter.jpg';
import kickscooterHover from '@/base/categories/kickscooter-hover.jpg';

import kids from '@/base/categories/kids.jpg';
import kidsHover from '@/base/categories/kids-hover.jpg';

import emoped from '@/base/categories/emoped.jpg';
import emopedHover from '@/base/categories/emoped-hover.jpg';

import gocart from '@/base/categories/gocart.jpg';
import gocartHover from '@/base/categories/gocart-hover.jpg';

import selfBalancing from '@/base/categories/self-balancing.jpg';
import selfBalancingHover from '@/base/categories/self-balancing-hover.jpg';

import loomo from '@/base/categories/loomo.jpg';
import loomoHover from '@/base/categories/loomo-hover.jpg';

import mechaKit from '@/base/categories/mecha-kit.jpg';
import mechaKitHover from '@/base/categories/mecha-kit-hover.jpg';

import dirtEbike from '@/base/categories/dirt-ebike.jpg';
import dirtEbikeHover from '@/base/categories/dirt-ebike-hover.jpg';

import driftW1 from '@/base/categories/drift-w1.jpg';
import driftW1Hover from '@/base/categories/drift-w1-hover.jpg';

import accessories from '@/base/categories/accessories.jpg';
import accessoriesHover from '@/base/categories/accessories-hover.jpg';

import MainPageItem from './MainPageItem';
import styles from './index.module.scss';

export default function MainPageItems() {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        <div className={styles.categories__items}>
          <MainPageItem href="/kickscooters" name={<>Ninebot <br /> kickscooter </>} mainImg={kickscooter} hoverImg={kickscooterHover} />
          <MainPageItem name={<>KIDS </>} mainImg={kids} hoverImg={kidsHover} />
          <MainPageItem name={<>EMOPED </>} mainImg={emoped} hoverImg={emopedHover} />
          <MainPageItem href="/gocarts" name={<>GOKART </>} mainImg={gocart} hoverImg={gocartHover} />
          <MainPageItem name={<>SELF <br />BALANCING </>} mainImg={selfBalancing} hoverImg={selfBalancingHover} />
          <MainPageItem name={<>LOOMO </>} mainImg={loomo} hoverImg={loomoHover} />
          <MainPageItem name={<>MECHA <br /> KIT </>} mainImg={mechaKit} hoverImg={mechaKitHover} />
          <MainPageItem name={<>DIRT <br /> EBIKE </>} mainImg={dirtEbike} hoverImg={dirtEbikeHover} />
          <MainPageItem name={<>DRIFT <br /> W1 </>} mainImg={driftW1} hoverImg={driftW1Hover} />
          <MainPageItem name={<>Accessories </>} mainImg={accessories} hoverImg={accessoriesHover} />
        </div>
      </div>
    </div>
  );
}
