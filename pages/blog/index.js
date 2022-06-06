import CustomHead from '@/basic/CustomHead';
import { BlogMain } from '@/sections/Blog';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function BlogPage({ allData }) {
  return (
    <>
      <CustomHead title="blog" />
      <BlogMain blogPosts={allData.blog} />
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
