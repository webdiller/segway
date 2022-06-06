import Head from 'next/head';

/** Кастомный head для страницы с СЕО */
export default function CustomHead({
  title = 'SegWay',
  description = 'Description',
  keywords,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    </>
  );
}
