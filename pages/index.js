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
    {/* <div className="bg-gradient-to-tl from-main-bg-onecolor to-main-bg-light-pink overflow-hidden font-poppins">
    <div className="bg-gradient-to-tl from-main-pink-alt2 via-main-bg-onecolor to-main-bg-light-blue overflow-hidden font-poppins">
    <div className="bg-gradient-to-tl from-main-pink-alt1 via-main-bg-onecolor to-main-green-alt1 overflow-hidden font-poppins"> */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kolečkové lyže s unikátními jízdními vlastnostmi. Množství barevných provedení."></meta>
        <meta name="keywords" content="originální, unikátní, kolečkové lyže, jak vybrat, letní trénink, letní běžky, bežky na kolečkách, běžky v létě na suchu, klasika, skate, na soupaž, barevné provedení"></meta>
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
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
