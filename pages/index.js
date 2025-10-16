import dynamic from 'next/dynamic';

// Home hero nera & oro
const HomePage = dynamic(() => import('../components/HomePage'), { ssr: false });

// Storefront (già creato): lo mostriamo sotto la hero per ora
const Storefront = dynamic(() => import('../components/Storefront'), { ssr: false });

export default function Home() {
  return (
    <>
      <HomePage />
      <div id="shop">
        <Storefront />
      </div>
    </>
  );
}
