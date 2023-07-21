import Head from 'next/head';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anggar.in</title>
        <meta name="description" content="Hitung mimpimu dengan anggar.in " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-4 md:mx-24">
        <Header />
        <Content />
        <Footer />
      </main>
    </div>
  );
}
