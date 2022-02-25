import Contacts from '@/sections/Contacts';
import {data} from '@/base/data';
import CustomHead from '@/basic/CustomHead';

export default function ContactsPage({allData}) {
  return (
    <>
      <CustomHead title="Contacts" />
      <Contacts />
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
