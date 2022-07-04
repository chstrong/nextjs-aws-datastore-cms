import '../styles/globals.css'
import { Amplify } from 'aws-amplify'
import config from '../aws-exports'
import Navbar from '../components/Navbar'

Amplify.configure({
  ...config, ssr: true
})

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <div className="py-8 px-16">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
