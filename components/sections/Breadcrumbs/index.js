import getBreadcrumbs from "@/helpers/getBreadcrumbs";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Breadcrumbs() {
  const router = useRouter();
  const paths = getBreadcrumbs(router.pathname);
  if (paths.length > 0) {
    return (
      (
        <div className={classNames('breadcrumbs')}>
          <div className="container breadcrumbs__container">
            <Link href="/"><a className="breadcrumbs__link">Home</a></Link>
            {paths.map((item, indx, arr) => {
              const { label, href } = item;
              return (
                <Link key={href} href={href}><a key={href} className="breadcrumbs__link">{label}</a></Link>
              )
            })}
          </div>
        </div>
      )
    )
  } else {
    return null
  }
}
