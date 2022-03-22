import Link from 'next/link'
import { useRouter } from 'next/router'
import iconCheck from '@/base/icon-color-check.svg'
import Image from 'next/image'

export default function Colors({ colors, productName }) {
  const router = useRouter()
  return (
    <div className="form-colors">
      <div className="form-colors__wrapper">
        <p className="text form-colors__title-desktop">
          Select color
        </p>
        <p className="text form-colors__title-mobile">
          <b>Select color</b> <br /> <span>{productName}</span>
        </p>
        <div className="form-colors__items">
          {colors.map(({ color, urlWithCategory }) => {
            let isMatch = urlWithCategory === router.asPath;
            return (
              <div style={{ backgroundColor: `#${color}` }} key={color} className={isMatch ? "form-colors__item active" : "form-colors__item"}>
                <Link scroll={false} href={urlWithCategory}>
                  <a className="form-colors__item-link"></a>
                </Link>
                {isMatch && <Image src={iconCheck} alt="Selected color icon" />}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
