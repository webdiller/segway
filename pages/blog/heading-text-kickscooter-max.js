import CustomHead from '@/basic/CustomHead';
import { BlogPost } from '@/sections/Blog';
import { data } from '@/base/data';

export default function BlogPostPage({ allData }) {
  return (
    <div>
      <CustomHead title="blog" />
      <BlogPost />
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
