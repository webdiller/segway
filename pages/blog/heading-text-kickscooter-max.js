import CustomHead from '@/basic/CustomHead';
import { BlogPost } from '@/sections/Blog';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function BlogPostPage({ allData }) {
  return (
    <>
      <CustomHead title="blog" />
      <BlogPost />
      <ProductModalDinamic accessoeries={allData.accessoeries} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
