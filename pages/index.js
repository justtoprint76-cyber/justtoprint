import Reveal from "../components/Reveal";
import CookieBanner from "../components/CookieBanner";
import Head from "next/head";
import dynamic from "next/dynamic";

import Storefront from "../components/Storefront";
import Manifesto from "../components/Manifesto";
import Footer from "../components/Footer";

// HomePage caricata senza SSR
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

        {/* Open Graph (WhatsApp / Instagram) */}
        <meta
          property="og:title"
          content="JUSTTOPRINT — Modern Punjabi Streetwear"
        />
        <meta
          property="og:description"
          content="A cultural streetwear project inspired by Punjabi heritage. First drop coming soon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justtoprint.vercel.app" />
        <meta property="og:image" content="/ogimage.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JUSTTOPRINT — Modern Punjabi Streetwear"
        />
        <meta
          name="twitter:description"
          content="A cultural streetwear project inspired by Punjabi heritage. First drop coming soon."
        />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>

      {/* HERO */}
      <HomePage />

      {/* STACCO EDITORIAL */}
      <section className="bg-[#F3EDE4] text-[#4A463F] px-6">
        <div className="max-w-5xl mx-auto pt-24 pb-14 text-center">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
            THE COLLECTION
          </p>

          <h2
            className="mt-6 text-[28px] sm:text-[34px] leading-[1.2] tracking-[0.04em]"
            style={{ fontFamily: "serif", color: "#6B6256" }}
          >
            Explore the pieces.
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-[#7A7267] max-w-[62ch] mx-auto">
            Designed with intention — modern silhouettes, cultural roots.
          </p>

          <div className="mt-12 h-px w-full bg-[#D9D0C3]" />
        </div>
      </section>

      {/* SHOP */}
      <div id="shop" className="bg-[#F3EDE4] px-6 pt-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <Storefront />
        </div>
      </div>

      {/* MANIFESTO / ABOUT */}
      <Manifesto />

      {/* FOOTER / CONTACT */}
      <Footer />
        <CookieBanner />
    </>
  );
}
