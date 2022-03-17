import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';
import WholesaleImage from '@/base/wholesale-image.jpg';
import { useEffect, useRef } from 'react';
import ReactInputMask from 'react-input-mask';
import { setUserName, setUserPhone } from 'store/slices/discountModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '@/hooks/useForm';

export default function Wholesale() {
  const dispatch = useDispatch()

  const btnRef = useRef(null);
  const { onSubmit, curentRefSet, loading } = useForm()

  const { userPhone, userName } = useSelector((state) => state.discountModal);

  useEffect(() => {
    curentRefSet(btnRef)
  }, [btnRef, curentRefSet])

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
        <form onSubmit={onSubmit} className="wholesale__form">
          <p className="wholesale__form-title">DOWNLOAD <br /> WHOLESALE CATALOG</p>
          <div className="wholesale__form-img-wrapper">
            <Image objectFit='contain' width={419} height={294} placeholder="blur" src={WholesaleImage} alt="wholesale image for form" />
          </div>
          <ReactInputMask name="formFromOtherModelsName" onChange={(e) => dispatch(setUserName(e.target.value))} value={userName} placeholder="Your name" maxLength={50} className='ui-input wholesale__form-input' />
          <ReactInputMask name="formFromOtherModelsPhone" onChange={(e) => dispatch(setUserPhone(e.target.value))} value={userPhone} placeholder="+1 (888) ____-____" mask="+1 999 999 99 99" className='ui-input wholesale__form-input' />
          <button ref={btnRef} type="submit" className="ui-btn wholesale__form-btn"><span>DOWNLOAD NOW</span></button>
        </form>
      </div >
    </div >
  );
}
