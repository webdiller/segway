import dynamic from 'next/dynamic';
import {useEffect} from 'react';
import DefaultLayout from '@/basic/DefaultLayout';

export default function Home() {
  useEffect(() => {
    console.info('Code author: Eugene Butkov');
    console.info('github: https://github.com/webdiller');
    console.info('telegram: webdillerru');
  }, []);

  return (
    <div>
      <DefaultLayout description="segway description" title="Order Product">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="title">Order Product Page</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </DefaultLayout>
    </div>
  );
}
