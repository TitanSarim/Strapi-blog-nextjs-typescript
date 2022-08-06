import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {Navbar, Footer, Tabs} from '../components'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
      <div className='container mx-auto font-sans'>

        <NextNProgress/>

          <Navbar/>  

          <main className='pb-32'>
            <Component {...pageProps} />
          </main>
          
          <Footer/>

      </div>
  </>
  );
}

export default MyApp
