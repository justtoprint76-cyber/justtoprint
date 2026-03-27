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

      <section className="bg-[#F3EDE4] text-[#4A463F] px-6">
        <div className="max-w-5xl mx-auto pt-16 sm:pt-20 pb-6 sm:pb-8 text-center">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[280px] h-px bg-[#D9D0C3]" />
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 sm:gap-10 text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-black/70">
            <a
              href="/men"
              className="border-b border-black/40 pb-1 hover:opacity-60 transition"
            >
              Men
            </a>

            <a
              href="/women"
              className="border-b border-black/40 pb-1 hover:opacity-60 transition"
            >
              Women
            </a>
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
