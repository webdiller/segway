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
  const { onSubmit, curentRefSet, loading } = useForm({ fromWhere: "страница wholesale" })

  const { userPhone, userName } = useSelector((state) => state.discountModal);

  useEffect(() => {
    curentRefSet(btnRef)
  }, [btnRef, curentRefSet])

  return (
    <div className="wholesale">
      <div className="container wholesale__container">
        {/* TODO: Унифицировать по возможности */}
        <TitleWithDescription
          customClass="wholesale__title-with-description"
          titleDesktop={<>SEGWAY wholesale</>}
          titleMobile={<>SEGWAY wholesale</>}
          textDesktop={
            <>If you need to purchase a large number of Segway products at once, we can provide you with extremely favorable conditions. Leave your contacts and our manager will contact you shortly and discuss possible options for cooperation.</>
          }
          textMobile={
            <>If you need to purchase a large number of Segway products at once, we can provide you with extremely favorable conditions. Leave your contacts and our manager will contact you shortly and discuss possible options for cooperation.</>
          }
        />
        <form onSubmit={onSubmit} className="wholesale__form"> 
          <p className="wholesale__form-title">Request <br /> Wholesale catalog</p>
          <div className="wholesale__form-img-wrapper">
            <Image objectFit='contain' width={419} height={294} placeholder="blur" src={WholesaleImage} alt="wholesale image for form" />
          </div>
          <ReactInputMask name="formFromOtherModelsName" onChange={(e) => dispatch(setUserName(e.target.value))} value={userName} placeholder="Your name" maxLength={50} className='ui-input wholesale__form-input' />
          <ReactInputMask name="formFromOtherModelsPhone" onChange={(e) => dispatch(setUserPhone(e.target.value))} value={userPhone} placeholder="+1 ___ ___ __ __" mask="+1 999 999 99 99" className='ui-input wholesale__form-input' />
          <button ref={btnRef} type="submit" className="ui-btn wholesale__form-btn"><span>Send</span></button>
        </form>
      </div >
    </div >
  );
}
