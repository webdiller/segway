import classNames from "classnames";
import Link from "next/link";

export default function Breadcrumbs({
  middleHref,
  activeLabelName
}) {
  return (
    <div className={classNames('breadcrumbs')}>
      <div className="container breadcrumbs__container">
        <Link href="/"><a className="breadcrumbs__link begin">Home</a></Link>
        <Link href={`/${middleHref}`}><a className="breadcrumbs__link middle">Catalog</a></Link>
        <span className="breadcrumbs__link">{activeLabelName}</span>
      </div>
    </div>
  )
}
