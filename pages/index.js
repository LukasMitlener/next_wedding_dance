import Head from 'next/head'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Lektorka from "../components/Lektorka"
import Testimonials from "../components/Testimonials"
import Blog from "../components/Blog"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="relative bg-bg-color overflow-hidden font-montserrat">
      <Head>
        <title>Svatební tance</title>
        <meta name="description" content="Kurzy netradičních svatebních tanců vytvořených na míru"></meta>
        <meta name="keywords" content="Svatební tance, první tanec, netradiční tance, kurzy tanců, svatební příprava, taneční lekce, svatební choreografie, taneční kurs, svatební tanec na míru, osobní taneční lekce, profesionální choreografie, jedinečný svatební tanec, kreativní svatební tance, svatební tanec pro páry, taneční trénink, taneční instruktor, překvapivý svatební tanec, svatební tanec lekce, tanec družiček"></meta>
        <meta
          property="og:image"
          content="https://svatebnitance.cz/images/wedd6.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Lektorka />
      <Features />
      <Blog />
      <Testimonials />
      <Pricing />

      <Cta />
      <Footer />
    </div>
  )
}
