import dynamic from 'next/dynamic';
import CustomHead from '@/basic/CustomHead';

const BreadcrumbsDynamic = dynamic(() => import('@/sections/Breadcrumbs'));

export default function AdminLayout({ title = 'Admin page', description = 'admin page', children, allData }) {
  return (
    <>
      <CustomHead description={description} title={title} />
      <BreadcrumbsDynamic />
      {children}
    </>
  );
}
