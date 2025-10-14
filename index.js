import dynamic from 'next/dynamic'
const Storefront = dynamic(() => import('../components/Storefront'), { ssr: false })
export default function Home(){ return <Storefront/> }
