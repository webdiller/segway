import Link from "next/link";

export default function Breadcrumbs({activeLabelName}) {
  return (
    <div className='breadcrumbs'>
      <div className="container breadcrumbs__container">
        <Link href="/"><a className="breadcrumbs__link begin">Home</a></Link>
        <Link href="/"><a className="breadcrumbs__link middle">Catalog</a></Link>
        <Link href="/"><a className="breadcrumbs__link">{activeLabelName}</a></Link>
      </div>
    </div>
  )
}
