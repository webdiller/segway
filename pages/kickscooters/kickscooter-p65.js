import dynamic from 'next/dynamic';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');
import Welcome from '@/sections/Welcome';

import Tabs from '@/sections/Tabs';
const FancyModal = dynamic(() => import('@/modals/FancyModal'), { ssr: false });
import CustomHead from '@/basic/CustomHead';

const PackingListDinamic = dynamic(() => import('@/sections/PackingList'));
const AccessoriesSliderDinamic = dynamic(() => import('@/sections/Accessories/AccessoriesSlider'));

// FIXME: Отрефакторить, сделать указание в файле
import featuresIcon_1 from '@/base/ks-p65/features-icons/feature-1.svg';
import featuresIcon_2 from '@/base/ks-p65/features-icons/feature-2.svg';
import featuresIcon_3 from '@/base/ks-p65/features-icons/feature-3.svg';
import featuresIcon_4 from '@/base/ks-p65/features-icons/feature-4.svg';
const featuresItems = [
  { icon: featuresIcon_1, title: '264 lbs', description: 'Payload' },
  { icon: featuresIcon_2, title: '21.7 mph', description: 'Max Speed' },
  { icon: featuresIcon_3, title: '40 Miles', description: 'Max Range' },
  { icon: featuresIcon_4, title: '4,5H', description: 'Fast Charging' }
];

const FeaturesDinamic = dynamic(() => import('@/sections/Features'));

import FeatureSimple_1_desktop from '@/base/ks-p65/features/feature-1-desktop.jpg';
import FeatureSimple_1_mobile from '@/base/ks-p65/features/feature-1-mobile.jpg';
import FeatureSimple_2_desktop from '@/base/ks-p65/features/feature-2-desktop.jpg';
import FeatureSimple_2_mobile from '@/base/ks-p65/features/feature-2-mobile.jpg';
import FeatureSimple_3_desktop from '@/base/ks-p65/features/feature-3-desktop.jpg';
import FeatureSimple_3_mobile from '@/base/ks-p65/features/feature-3-mobile.jpg';
const RefactoredFeatureDinamic = dynamic(() => import('@/sections/RefactoredFeature'));

const DownloadManualDinamic = dynamic(() => import('@/sections/DownloadManual'));
const CompareSpecificationsDinamic = dynamic(() => import('@/sections/CompareSpecifications'), { ssr: false });
const SegwayPhoneHolderDinamic = dynamic(() => import('@/sections/SegwayPhoneHolder'));
const ControllFromSmartphoneDinamic = dynamic(() => import('@/sections/ControllFromSmartphone'));

import FormWarrancy_desktop from '@/base/ks-p65/form-warrancy-desktop.jpg';
import FormWarrancy_mobile from '@/base/ks-p65/form-warrancy-mobile.jpg';
const WarrancyPaymentImageDinamic = dynamic(() => import('@/sections/WarrancyPaymentImage/warrancy-payment-image'));

const OtherModelsDinamic = dynamic(() => import('@/sections/OtherModels'));
const DiscountModalDinamic = dynamic(() => import('@/modals/DiscountModal'), { ssr: false });
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ModelPage({ allData, product }) {

  return (
    <>
      <CustomHead title="Kickscooter P65" ></CustomHead>
      <Welcome
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter P65
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br />
            Kickscooter <br />
            P65
          </>
        }
        currentSegway={product}
      />
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
      <PackingListDinamic packingListYoutubeEmbedId={product.packingListYoutubeEmbedId} packingListImg={product.packingListImg} />
      <AccessoriesSliderDinamic items={allData.accessoeries} />

      <FeaturesDinamic customClass="ks-max" features={featuresItems} title="IMPRESSIVE FEATURES" />

      {/* 1 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-center',
          'lg-text-center',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
          'sm-text-left',
        ]}
        titleDesktop={
          <>
            An Urban Cruiser <br />
            to Change The Game!
          </>
        }
        textDesktop={
          <>
            The Segway KickScooter P65E offers you the ability to cruise through <br />
            the city for a range of up to 65 km and at a maximum speed of 25 km/ <br />
            h. This is one of our few models that come with SegPower <br />
            CrossSeason tyres, allowing you to ride through any kind of weather <br />
            safely. The P65E is also a smart KickScooter that can be (un)locked <br />
            with close-range NFC technology located on the coloured LED <br />
            dashboard, as well as with your smartphone.
          </>
        }
        imgDesktop={FeatureSimple_1_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={547}
        imgMobile={FeatureSimple_1_mobile}
        imgMobileWidth={375}
        imgMobileHeight={570}
        titleMobile={
          <>
            An Urban Cruiser <br />
            to Change The Game!
          </>
        }
        textMobile={
          <>
            The Segway KickScooter P65E offers you the <br />
            ability to cruise through the city for a range of up <br />
            to 65 km and at a maximum speed of 25 km/h. <br />
            This is one of our few models that come with <br />
            SegPower CrossSeason tyres, allowing you to ride <br />
            through any kind of weather safely. The P65E is <br />
            also a smart KickScooter that can be (un)locked <br />
            with close-range NFC technology located on the <br />
            coloured LED dashboard, as well as with your smartphone.
          </>
        }
      />

      {/* 2 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-start',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-end'
        ]}
        titleDesktop={
          <>
            Ride through anything <br />
            with the large SegPower <br />
            Cross Season tyres
          </>
        }
        textDesktop={
          <>
            With a range of up to 65 km, the Segway KickScooter P65 will get you <br />
            through almost every kind of terrain and weather in a safe manner. <br />
            Dealing with heavy rain or snow? The large 10.5-inch Segpower Cross <br />
            Season Tyres are designed to give you enough grip and avoid slipping <br />
            during your ride. <br /><br />

            In addition, with the integrated jelly layer inside the tyres, there are <br />
            lower puncture risks so you can ride with peace of mind.
          </>
        }
        imgDesktop={FeatureSimple_2_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={650}
        imgMobile={FeatureSimple_2_mobile}
        imgMobileWidth={375}
        imgMobileHeight={606}
        titleMobile={
          <>
            Ride through anything <br />
            with the large SegPower <br />
            Cross Season tyres
          </>
        }
        textMobile={
          <>
            With a range of up to 65 km, the Segway <br />
            KickScooter P65 will get you through almost every <br />
            kind of terrain and weather in a safe manner. <br />
            Dealing with heavy rain or snow? The large 10.5- <br />
            inch Segpower Cross Season Tyres are designed <br />
            to give you enough grip and avoid slipping during <br />
            your ride. <br /><br />

            In addition, with the integrated jelly layer inside <br />
            the tyres, there are lower puncture risks so you <br />
            can ride with peace of mind.
          </>
        }
      />

      {/* 3 */}
      <RefactoredFeatureDinamic
        additionalClasses={[
          'lg-justify-content-center',
          'lg-align-items-end',
          'lg-text-left',
          'lg-content-white',

          'sm-justify-content-end',
          'sm-align-items-start',
        ]}
        titleDesktop={
          <>
            Making your <br />
            commutes smarter <br />
            and safer
          </>
        }
        textDesktop={
          <>
            he P65 comes with some outstanding features that make this <br />
            KickScooter smarter: <br /><br />

            • USB port on the structure of the KickScooter that allows you to <br />
            recharge your phone while you ride <br /><br />

            • Ability to (un)lock your KickScooter with one of these two options: <br />
            either with the NFC technology or your smartphone via the Segway- <br />
            Ninebot App <br /><br />

            • Integrated indicators in the front and rear for you and those around <br />
            you to commute in a safer manner
          </>
        }
        imgDesktop={FeatureSimple_3_desktop}
        imgDesktopWidth={1376}
        imgDesktopHeight={800}
        imgMobile={FeatureSimple_3_mobile}
        imgMobileWidth={375}
        imgMobileHeight={630}
        titleMobile={
          <>
            Making your commutes <br />
            smarter and safer
          </>
        }
        textMobile={
          <>
            he P65 comes with some outstanding features <br />
            that make this KickScooter smarter: <br /><br />

            • USB port on the structure of the KickScooter that <br />
            allows you to recharge your phone while you ride <br /><br />

            • Ability to (un)lock your KickScooter with one of <br />
            these two options: either with the NFC technology <br />
            or your smartphone via the Segway-Ninebot App <br /><br />

            • Integrated indicators in the front and rear for you <br />
            and those around you to commute in a safer <br />
            manner
          </>
        }
      />
      {product.downloadManual && (
        <DownloadManualDinamic manualImgPath={product.manualImgPath} downloadManualHref={product.downloadManual} />
      )}

      <CompareSpecificationsDinamic
        items={allData.kickskooters}
        mainSegway={product} />
      <SegwayPhoneHolderDinamic customClass="type-1" />
      <ControllFromSmartphoneDinamic />

      {/* FIXME: Заменить на hone holder */}
      <WarrancyPaymentImageDinamic
        titleDesktop={
          <>
            SEGWAY Ninebot <br /> Kickscooter <b>P65</b>
          </>
        }
        titleMobile={
          <>
            SEGWAY Ninebot <br /> Kickscooter <br /> <b>P65</b>
          </>
        }
        imgDesktop={FormWarrancy_desktop}
        widthDesktop={852}
        heightDesktop={470}
        imgMobile={FormWarrancy_mobile}
        widthMobile={375}
        heightMobile={248}
        customClass="ks-e-45"
        item={product}
      />

      <OtherModelsDinamic items={allData.kickskooters} />
      <DiscountModalDinamic />
      <FancyModal images={product.galleryImages} />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  const currentProduct = data.kickskooters.find(({ id }) => id == 'id=20&warranty=null&color=null');
  return {
    props: {
      allData: data,
      product: currentProduct,
      preparedProtection: data.accessoeries[7]
    }
  };
}
