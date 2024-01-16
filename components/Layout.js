import Head from 'next/head'
import Image from 'next/image'
import { Footer } from './Footer'
import { Navbar } from './Navbar'


const Layout = ({ children, title_nav }) => {
    // const playlistId = '5hHBJOmymJUUqZ6TAaLbRv';
   
  return (
    <>
        <Head>
            <title>{title_nav} | JASO</title>
            <meta name="description" content="Hola soy Juan Samaritano, soy un profesional electrónico y desarrollador web freelance, un profesional creativo, con capacidad de resiliencia y aprendizaje continuo." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/jaso_v.svg" />
            <script async src="https://sdk.scdn.co/spotify-player.js"></script>
        </Head>
        <Navbar></Navbar>
        
        <div className='div_btn_socials'>
          <input className='btn_social check_btn' type={'checkbox'}/>
          <button className='btn_social'>
            <Image
              src={'/svg/btn_socials.svg'}
              width={40}
              height={40}
              alt='btn_socials'
            />
          </button>
          <div className='socials'>
            <a className='social' href='https://wa.me/51974145588' target='_blank' rel="noopener noreferrer">
                <Image
                    src={'/svg/wsp.svg'}
                    width={40}
                    height={40}
                    alt={'wsp'}
                />
            </a>
            <a className='social' href='https://www.facebook.com/jaso.visual' target='_blank' rel="noopener noreferrer">
                <Image
                    src={'/svg/fb.svg'}
                    width={40}
                    height={40}
                    alt={'fb'}
                />
            </a>
            <a className='social' href='https://www.linkedin.com/in/juan-samaritano-ol%C3%B3rtegui-5a739419b/' target='_blank' rel="noopener noreferrer">
                <Image
                    src={'/svg/linkedin.svg'}
                    width={40}
                    height={40}
                    alt={'linkedin'}
                />
            </a>
            <a className='social' href='https://github.com/Jaso589' target='_blank' rel="noopener noreferrer">
                <Image
                    src={'/svg/github.svg'}
                    width={40}
                    height={40}
                    alt={'github'}
                />
            </a>
            </div>
        </div>
        <main>
            { children }
        </main>
        
        <Footer></Footer>
    </>
  )
}

export default Layout