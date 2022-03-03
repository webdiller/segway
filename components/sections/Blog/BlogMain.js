import TitleWithDescription from '@/blocks/TitleWithDescription';
import BlogItem from './BlogItem';

export default function BlogMain({blogPosts}) {
  return (
    <div className="blog">
      <div className="container blog__container">
        <TitleWithDescription
          customClass="reviews-block__title-with-description"
          titleDesktop={<>BLOG</>}
          titleMobile={<>BLOG</>}
          textDesktop={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis tortor eget nulla cursus <br /> sit. Aliquet nibh phasellus arcu in. A amet volutpat cursus hac nunc porttitor tristique
              id.
            </>
          }
          textMobile={
            <>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Non duis tortor eget nulla <br /> cursus sit. Aliquet nibh phasellus arcu in. A <br /> amet volutpat cursus hac nunc
              porttitor <br /> tristique id.
            </>
          }
        />
        <div className="blog__items">
          {blogPosts.map(({dateCreated, slug, title, excerpt, posterSrc}) => {
            return <BlogItem key={slug} dateCreated={dateCreated} slug={slug} title={title} excerpt={excerpt} posterSrc={posterSrc} />;
          })}
        </div>

        <div className="blog__see-more">
          <div className="ui-btn blog__see-more-btn"><span>SEE MORE</span></div>
        </div>
      </div>
    </div>
  );
}
