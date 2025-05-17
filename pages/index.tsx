import Head from "next/head";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Projects from '../components/Projects';

export default function Home() {
    return (
      <>
        <Head>
          <title>Fatin Sadab Mansoor | Portfolio</title>
        </Head>
        <main className = "min-h-screen bg-background text-foreground">
          <Header />
          <Hero />
          <Projects />
          <Footer />
        </main>
      </>
    )
}

