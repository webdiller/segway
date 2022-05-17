import Contacts from '@/sections/Contacts';
import {data} from '@/base/data-test';
import CustomHead from '@/basic/CustomHead';

import dynamic from 'next/dynamic';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ContactsPage({allData}) {
  return (
    <>
      <CustomHead title="Contacts" />
      <Contacts />
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
