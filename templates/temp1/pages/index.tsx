import Head from 'next/head'

import Nav from '../components/Nav'

export interface Props {
 title?: string
}

const data = {
 title: 'Shoptitle',
}

export const getStaticProps = async () => {
 return {
  props: {
   data,
  },
 }
}

const Home = ({ data }: { data: Props }) => {
 return (
  <div>
   <Head>
    <title>Shopster</title>
    <meta name='description' content='free ecommerce websites' />
    <link rel='icon' href='/favicon.ico' />
   </Head>
   <div className='p-5'>
    <Nav data={data} />
   </div>
   <h1 className='text-3xl font-bold underline'>Hello world!</h1>
  </div>
 )
}

export default Home
