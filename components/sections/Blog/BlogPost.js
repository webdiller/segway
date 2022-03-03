import Image from "next/image";
import PostImage1 from '@/base/blog/blog-3.jpg'
import PostImage2 from '@/base/blog/blog-4.jpg'

export default function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <div className="container blog-post__container">
        <h1 className="title blog-post__title">In viverra urna quis</h1>
        <p className="text blog-post__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          fermentum malesuada gravida enim augue. Condimentum sit libero neque,
          vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
          Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam.
          At nibh sodales amet, praesent. Viverra tristique hac tristique magna dignissim
          nulla congue maecenas. Accumsan velit aliquam ipsum dolor. Nibh sed.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum malesuada gravida enim augue.
          Condimentum sit libero neque, vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
          Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam. At nibh sodales amet,
        </p>

        <div className="blog-post__rich blog-post__rich_bg-grey">
          <div className="blog-post__rich-content">
            <p className="blog-post__rich-title">In viverra urna quis</p>
            <p className="blog-post__rich-text">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi fermentum malesuada gravida enim augue. Condimentum sit
              libero neque, vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
              Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam. At nibh sodales
              amet, praesent. Viverra tristique hac tristique magna dignissim nulla congue maecenas. Accumsan
              velit aliquam ipsum dolor. Nibh sed.</p>
          </div>
          <div className="blog-post__rich-img-wrapper">
            <Image width={442} height={280} objectPosition="center" objectFit="cover" src={PostImage1} alt="Post image" layout="responsive" />
          </div>
        </div>

        <div className="blog-post__columns">
          <p className="blog-post__columns-title">In viverra urna quis</p>
          <div className="blog-post__columns-items">
            <p className="blog-post__columns-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi fermentum malesuada gravida enim augue. Condimentum sit libero neque,
              vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
              Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam.
              At nibh sodales amet, praesent. Viverra tristique hac tristique magna dignissim nulla congue maecenas.
              Accumsan velit aliquam ipsum dolor. Nibh sed.
            </p>
            <br />
            <br />
            <p className="blog-post__columns-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi fermentum malesuada gravida enim augue. Condimentum sit libero neque,
              vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
              Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam.
              At nibh sodales amet, praesent. Viverra tristique hac tristique magna dignissim nulla congue maecenas.
              Accumsan velit aliquam ipsum dolor. Nibh sed.
            </p>
            <br />
            <br />
            <p className="blog-post__columns-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi fermentum malesuada gravida enim augue. Condimentum sit libero neque,
              vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
              Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam.
              At nibh sodales amet, praesent. Viverra tristique hac tristique magna dignissim nulla congue maecenas.
              Accumsan velit aliquam ipsum dolor. Nibh sed.
            </p>
            <br />
            <br />
            <p className="blog-post__columns-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi fermentum malesuada gravida enim augue. Condimentum sit libero neque,
              vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
              Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam.
              At nibh sodales amet, praesent. Viverra tristique hac tristique magna dignissim nulla congue maecenas.
              Accumsan velit aliquam ipsum dolor. Nibh sed.
            </p>
          </div>
        </div>

        <div className="blog-post__rich">
          <div className="blog-post__rich-content">
            <p className="blog-post__rich-title">In viverra urna quis</p>
            <p className="blog-post__rich-text">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi fermentum malesuada gravida enim augue. Condimentum sit
              libero neque, vitae mauris, nibh. Ipsum ac mauris sed ante sed amet arcu ullamcorper.
              Vitae fringilla nulla duis ultrices et suspendisse nibh ullamcorper nullam. At nibh sodales
              amet, praesent. Viverra tristique hac tristique magna dignissim nulla congue maecenas. Accumsan
              velit aliquam ipsum dolor. Nibh sed.</p>
          </div>
          <div className="blog-post__rich-img-wrapper">
            <Image width={442} height={280} objectPosition="center" objectFit="cover" src={PostImage2} alt="Post image" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
