import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';
import WholesaleImage from '@/base/wholesale-image.jpg';
import { useRef } from 'react';
import axios from 'axios';

export default function Wholesale() {
    // form
    const btnRef = useRef();
    const onSubmit = async e => {
      e.preventDefault();
      const formData = {};
      Array.from(e.currentTarget.elements).forEach(field => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });
  
      let config = {
        method: "post",
        url: `/api/mail`,
        headers: {
          "Content-Type": "application/json"
        },
        data: formData
      };
  
      btnRef.current.innerHTML = "<span>Sending...</span>";
      btnRef.current.classList.add("loading");
      try {
        const response = await axios(config);
  
        if (response.status === 200) {
          btnRef.current.innerHTML = "<span>Success</span>";
          btnRef.current.classList.remove("loading");
  
          setTimeout(() => {
            btnRef.current.innerHTML = "<span>Send</span>";
          }, 3000);
        }
      } catch (error) {
        alert('Error while sending form')
        btnRef.current.innerHTML = "<span>Error while sending</span>";
        setTimeout(() => {
          btnRef.current.innerHTML = "<span>Send</span>";
        }, 3000);
      }
  
    };
    // form
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
          <input name="formFromOtherModelsName" placeholder="Your name" type="text" className="wholesale__form-input" />
          <input name="formFromOtherModelsPhone" placeholder="+1 (888) ____-____" type="text" className="wholesale__form-input" />
            <button ref={btnRef} type="submit" className="ui-btn wholesale__form-btn"><span>DOWNLOAD NOW</span></button>
        </form>
      </div>
    </div>
  );
}
