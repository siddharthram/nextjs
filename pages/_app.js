import '../styles/globals.css'
import MainHeader from '../components/layout/main-header';
import Layout from '../components/layout/layout';
function MyApp({ Component, pageProps }) {
  return <Layout> 
 <Component {...pageProps} />
 </Layout>
}

export default MyApp;
