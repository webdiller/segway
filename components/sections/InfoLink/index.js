import iconQuestion from '@/base/icon-info-link-question.svg';
import iconArrow from '@/base/icon-info-link-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function InfoLink({ label }) {
  return (
    <div className='info-link'>
      <div className="container info-link__container">
        <div className="info-link__content">
          <Link href="/"><a className="info-link__link"></a></Link>
          <div className="info-link__icon-question"><Image src={iconQuestion} alt="icon question" /></div>
          <p className="info-link__text">{label}</p>
          <div className="info-link__icon-arrow"><Image src={iconArrow} alt="icon arrow" /></div>
        </div>
      </div>
    </div>
  )
}
