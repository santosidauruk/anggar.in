import Head from 'next/head';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>anggar.in - hitung potensi investasi kamu!</title>
        <meta
          name="title"
          content="anggar.in - hitung potensi investasi kamu!"
        />
        <meta
          name="description"
          content="Anggar.in bantu kamu memperkirakan dana yang akan kamu miliki, berapa dana yang harus kamu investasi dan kapan kamu akan mencapai mimpimu"
        />
        <meta
          name="keywords"
          content="investasi, dana masa depan, kalkulator investasi"
        />
        <meta name="robots" content="index, follow" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.anggar.in" />
        <meta
          property="og:title"
          content="anggar.in - hitung potensi investasi kamu!"
        />
        <meta
          property="og:description"
          content="Anggar.in bantu kamu memperkirakan dana yang akan kamu miliki, berapa dana yang harus kamu investasi dan kapan kamu akan mencapai mimpimu"
        />
        <meta
          property="og:image"
          content="https://www.anggar.in/meta-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.anggar.in" />
        <meta
          property="twitter:title"
          content="anggar.in - hitung potensi investasi kamu!"
        />
        <meta
          property="twitter:description"
          content="Anggar.in bantu kamu memperkirakan dana yang akan kamu miliki, berapa dana yang harus kamu investasi dan kapan kamu akan mencapai mimpimu"
        />
        <meta
          property="twitter:image"
          content="https://www.anggar.in/meta-image.png"
        />
      </Head>

      <main className="mx-4 md:mx-24">
        <Header />
        <Content />
        <Footer />
      </main>
    </div>
  );
}
