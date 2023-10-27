import Layout from '@/components/Layout';
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta name="description" content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"/>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout>
          <div className='flex items-center justify-between w-full'>
            <div>
              imagen aplicada con ThreeJs
            </div>
            <div>
              texto
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
