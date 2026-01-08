import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO BASE */}
        <title>JUSTTOPRINT — Modern Punjabi Streetwear</title>
        <meta
          name="description"
          content="JUSTTOPRINT is a cultural project inspired by Punjabi heritage. Modern streetwear designed with intention, identity, and respect."
        />

        {/* OPEN GRAPH / WHATSAPP / INSTAGRAM */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JUSTTOPRINT — Modern Punjabi Streetwear" />
        <meta
          property="og:description"
          content="A cultural project inspired by Punjabi heritage. Collection coming soon."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:url" content="https://justtoprint.vercel.app" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JUSTTOPRINT — Modern Punjabi Streetwear" />
        <meta
          name="twitter:description"
          content="Modern Punjabi streetwear inspired by heritage and identity."
        />
        <meta name="twitter:image" content="/ogimage.png" />

        {/* FAVICON */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
