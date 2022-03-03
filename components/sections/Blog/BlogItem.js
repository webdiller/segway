import dynamic from 'next/dynamic';
import Image from 'next/image';
const Link = dynamic(() => import('next/link'));

export default function BlogItem({ dateCreated, slug, title, excerpt, posterSrc }) {
    return (
        <div className="blog__item">
            <div className="blog__item-content">
                <time dateTime={dateCreated} className="text text_25 blog__item-date">{dateCreated}</time>
                <p className="blog__item-title">{title}</p>
                <p className="text blog__item-excerpt">{excerpt}</p>
                <Link href={`/blog/heading-text-kickscooter-max`}>
                    <a className="text blog__item-link">Read more &gt;</a>
                </Link>
            </div>
            <div className="blog__item-img-wrapper">
                <Image width={268} height={268} objectFit="cover" src={posterSrc} alt={title} layout="fill" />
            </div>
        </div>
    );
}
