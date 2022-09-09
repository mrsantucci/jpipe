import '../styles/globals.css'
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
import '@aws-amplify/ui-react/styles.css'
import Layout from '../components/layout'

Amplify.configure({
  ...config, ssr: true
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp


