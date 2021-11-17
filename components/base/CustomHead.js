import Head from 'next/head';
import MiddleNavigation from '../sections/MiddleNavigation';
import TopNavigation from '../sections/TopNavigation';

/** Кастомный head для страницы с СЕО */
export default function CustomHead({
  title = 'SegWay',
  description = 'Описание',
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <TopNavigation />
      <MiddleNavigation/>
    </>
  );
}
