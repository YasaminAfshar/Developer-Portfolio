import Layout from '@/components/Layout';
import ComputersCanvas from '@/subComponents/Computer';
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta
          name="description"
          content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex justify-between w-full h-screen mx-auto">
            <div className='w-9/12'>
              <ComputersCanvas />
            </div>
            <div className='w-1/2'>
              <p>Welcome to my portfolio</p>
              <h1>Hi, I'm Yasmin Afsharinejad</h1>
              <h3>
                Full Stack Developer/ Virtual Assistant Data Entry/ Digital
                Marketing
              </h3>
              <p>
                I offer a strong guarantee of reliable and high-quality
                services. My skills and expertise ensure that your projects are
                executed with precision, attention to detail, and a commitment
                to excellence. You can trust that I will consistently meet and
                exceed your expectations. Your success is my priority.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
