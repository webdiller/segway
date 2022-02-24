import Head from 'next/head';

/** Кастомный head для страницы с СЕО */
export default function CustomHead({
  title = 'SegWay',
  description = 'Description',
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
}
