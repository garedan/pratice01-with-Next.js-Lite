import App from 'next/app'
import Layout from '../components/Layout/layout'
import '../globals.css';
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  <Head>
        <title>Next and MDX Blog</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous" />
  </Head>
  return (
    <div className="container">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}