import Head from "next/head";
import dynamic from "next/dynamic";
import Storefront from "../components/Storefront";
import Manifesto from "../components/Manifesto";
import Values from "../components/Values";
import Footer from "../components/Footer";

const HomePage = dynamic(() => import("../components/HomePage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>JUSTTOPRINT — Modern Punjabi Streetwear</title>
        <meta
          name="description"
          content="JUSTTOPRINT is a cultural streetwear project inspired by Punjabi heritage. Modern silhouettes, premium design, first drop coming soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="JUSTTOPRINT — Modern Punjabi Streetwear" />
        <meta
          property="og:description"
          content="A cultural streetwear project inspired by Punjabi heritage. First drop coming soon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justtoprint.vercel.app" />
        <meta property="og:image" content="/ogimage.png" />
      </Head>

      <HomePage />

      {/* EDITORIAL CUT */}
      <section className="bg-[#F3EDE4] px-6">
        <div className="max-w-6xl mx-auto py-16 sm:py-24">
          <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] bg-[#E8DED1] overflow-hidden relative">
            {/* quando avrai immagine, mettila qui */}
            {/* 
            <img
              src="/editorial.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            */}

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0.05)_100%)]" />
          </div>
        </div>
      </section>

      <div id="shop" className="bg-[#F3EDE4] px-6 pt-2 pb-24">
        <div className="max-w-5xl mx-auto">
          <Storefront />
        </div>
      </div>

      <Manifesto />
      <Values />
      <Footer />
    </>
  );
}
