import '../styles/global.css'
import type { AppProps } from 'next/app'

function Downforce({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Downforce
