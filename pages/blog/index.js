import CustomHead from '@/basic/CustomHead';
import { BlogMain } from '@/sections/Blog';
import { data } from '@/base/data';

export default function BlogPage({ allData }) {
  return (
    <div>
      <CustomHead title="blog" />
      <BlogMain blogPosts={allData.blog} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
