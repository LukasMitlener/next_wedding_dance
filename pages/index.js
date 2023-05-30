import Head from 'next/head'
import Navbar1 from "../components/Navbar1"
import Hero1 from "../components/Hero1"
import About from "../components/About"
import Testimonials1 from "../components/Testimonials1"
import Blog from "../components/Blog"
import Features from "../components/Features"
import Cta1 from "../components/Cta1"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-bg-color overflow-hidden font-montserrat">
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
      <Navbar1 />
      <Hero1 />
      <About />
      <Features />
      <Blog />
      <Testimonials1 />
      <Cta1 />
      <Footer />
    </div>
  )
}
