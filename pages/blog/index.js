import CustomHead from '@/basic/CustomHead';
import { BlogMain } from '@/sections/Blog';
import { data } from '@/base/data-test';

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
