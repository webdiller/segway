/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document';
const isProduction = process.env.NODE_ENV === 'production' ? true : false;
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US" >
        <Head>
          {/* <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                _affirm_config = {
                  public_api_key: "${process.env.NEXT_PUBLIC_AFFIRM_PUBLIC_KEY}",
                  script: "https://cdn1-sandbox.affirm.com/js/v2/affirm.js"
                };
                (function(m,g,n,d,a,e,h,c){var b=m[n]||{},k=document.createElement(e),p=document.getElementsByTagName(e)[0],l=function(a,b,c){return function(){a[b]._.push([c,arguments])}};b[d]=l(b,d,"set");var f=b[d];b[a]={};b[a]._=[];f._=[];b._=[];b[a][h]=l(b,a,h);b[c]=function(){b._.push([h,arguments])};a=0;for(c="set add save post open empty reset on off trigger ready setProduct".split(" ");a<c.length;a++)f[c[a]]=l(b,d,c[a]);a=0;for(c=["get","token","url","items"];a<c.length;a++)f[c[a]]=function(){};k.async=
                !0;k.src=g[e];p.parentNode.insertBefore(k,p);delete g[e];f(g);m[n]=b})(window,_affirm_config,"affirm","checkout","ui","script","ready","jsReady");
                `}}
          /> */}
          {isProduction && (<script
            async
            dangerouslySetInnerHTML={{
              __html: `
                <!-- Google Tag Manager -->
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TVTTG66');</script>
                <!-- End Google Tag Manager -->
                `}}
          />)}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
          {isProduction && (<script
            async
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Google Tag Manager (noscript) -->
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVTTG66"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              <!-- End Google Tag Manager (noscript) -->
                `}}
          />)}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
