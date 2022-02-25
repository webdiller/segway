import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';
import WholesaleImage from '@/base/wholesale-image.jpg';

export default function Wholesale() {
  return (
    <div className="wholesale">
      <div className="container wholesale__container">
        <TitleWithDescription
          customClass="wholesale__title-with-description"
          titleDesktop={<>SEGWAY wholesale</>}
          titleMobile={<>SEGWAY wholesale</>}
          textDesktop={
            <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis tortor eget nulla cursus sit. Aliquet nibh phasellus arcu in. A amet volutpat cursus hac nunc porttitor tristique id.</>
          }
          textMobile={
            <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis tortor eget nulla cursus sit. Aliquet nibh phasellus arcu in. A amet volutpat cursus hac nunc porttitor tristique id.</>
          }
        />
        <form className="wholesale__form">
          <p className="wholesale__form-title">DOWNLOAD <br /> WHOLESALE CATALOG</p>
          <div className="wholesale__form-img-wrapper">
            <Image objectFit='contain' width={419} height={294} placeholder="blur" src={WholesaleImage} alt="wholesale image for form" />
          </div>
          <input placeholder="Your name" type="text" className="wholesale__form-input" />
          <input placeholder="+1 (888) ____-____" type="text" className="wholesale__form-input" />
            <button type="button" className="ui-btn wholesale__form-btn"><span>DOWNLOAD NOW</span></button>
        </form>
      </div>
    </div>
  );
}
