import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import { FormContact } from '@/components/FormContact'
import SliderComponent from '@/components/SliderComponent'
import SpotifyPlayerComponent from '@/components/SpotifyPlayer'
import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

const inter = Inter({ subsets: ['latin'] })

const services = [
  {
    service: 'Diseño UI & UX',
    icon: '/svg/diseño.svg',
    description:'Creamos interfaces intuitivas y atractivas que cautivan a tus usuarios.'
  },
  {
    service: 'Desarrollo',
    icon: '/svg/desarrollo.svg',
    description:'Creamos soluciones digitales personalizadas que impulsan tu negocio.'
  },
  {
    service: 'Automatizacion',
    icon: '/svg/automatizacion.svg',
    description:'Optimizamos tus procesos empresariales y aumentamos tu eficiencia.'
  },
  {
    service: 'Brandign SEO',
    icon: '/svg/branding.svg',
    description:'Construimos marcas memorables que conectan con tu audiencia y mejoran tu visibilidad online.'
  }
]


export default function Home({ projects, posts }) {
  const [token, setToken] = useState('');
  const idList = '5hHBJOmymJUUqZ6TAaLbRv';
  // console.log(posts)
  // useEffect(() => {
  // //   // Llama a tu API para obtener el token de acceso
  // //   fetch('/api/spotifyToken')
  // //     .then((response) => response.json())
  // //     .then((data) => setToken(data.token))
  // //     .catch((error) => console.error('Error fetching Spotify token:', error));
  // // }, []);
  // const playlistId = '5hHBJOmymJUUqZ6TAaLbRv';
  
  // console.log(proyectoIndex)
  return (
    <>
      <Layout title_nav={'Home'}>
        <div className={styles.inicio}>
          <div className={styles.bg_dark}></div>
          <div className='container'>
            <div className={styles.content}>
              <div className={styles.blockTexts}>
                <div className={styles.text}>
                  <p>👋 Hola!</p>
                  
                  <h2>
                    Soy Juan Samaritano
                  </h2>
                  <h1>
                  Soy un Desarrollador Web<br/>y 
                  Electronico Industrial 
                  </h1>
                  <div className={styles.links_home}>
                    <Link className={styles.link_about} href={'/about'}>Leer más</Link>  
                    <button className={styles.contact_btn}><Link href={'#contact'}>Contactar</Link></button>
                  </div>
                </div>
                <div className='spotify_home'>
                    {
                      <SpotifyPlayerComponent playlistUri={idList}/>
                    }
                  </div>
              </div>
              <div className={styles.animated}>
                <div className={'circle'}>
                  <div className="rotate">
                    <span>S</span><span>i</span><span> </span><span>n</span><span>o</span><span> </span><span>p</span><span>u</span><span>e</span><span>d</span><span>e</span><span>s</span><span> </span><span>o</span><span>b</span><span>t</span><span>e</span><span>n</span><span>e</span><span>r</span><span> </span><span>u</span><span>n</span><span> </span><span>m</span><span>i</span><span>l</span><span>a</span><span>g</span><span>r</span><span>o</span><span>,</span><span> </span><span>c</span><span>o</span><span>n</span><span>v</span><span>i</span><span>é</span><span>r</span><span>t</span><span>e</span><span>t</span><span>e</span><span> </span><span>e</span><span>n</span><span> </span><span>é</span><span>l</span>
                  </div>
                </div>
                <div className={styles.img_jaso}>
                  <div className={styles.jaso}>
                    <Image
                      src={'/img/jaso_.jpg'}
                      fill
                      alt={'foto_portafolio'}
                    />

                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <section className={styles.posts_home} id='projects'>
          <div className='container'>
              <h2>Proyectos</h2>
              <p>Revisa algunos proyectos en los cuales he trabajado</p>
              <div className={styles.project_content}>
                {
                  projects.map((project)=>(
                    <Link key={project.slug.current} href={`project/${project.slug.current}`}>
                      <div className={styles.project_card}>
                        <div className={styles.project_img}>
                          <Image
                            className={styles.img_card}
                            src={urlForImage(project.mainImage)}
                            fill
                            alt=''
                          />
                        </div>
                        <div className={styles.data}>
                          <h2>{project.title}</h2>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
              
          </div>
        </section>
        <section className={styles.posts_home}>
          <div className='container'>
            <h2>Explora mi blog</h2>
            <p>Checa mis nuevos posts y entérate de las nuevas novedades que tengo para ti!!</p>
            <div className={styles.slide_content}>
              <SliderComponent posts={posts}/>
            </div>
            
          </div>
        </section>
        <section className={styles.services_home}>
          <div className={styles.bg_dark}></div>
          <div className='container'>
            <h2>Servicios</h2>
            <h3>Puedes contar con algunos servicios que ofrezco</h3>
            <div className={styles.services_container}>
              {
                services.map(({service, icon, description}) => (
                  <div className={styles.card_service} key={service}>
                    <div>
                      <Image className='card_img'  src={icon} width={40} height={40} alt={service}/>
                      <h4>{service}</h4>
                      <p>{description}</p>
                    </div>
                    
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* <hr className='hr_div container'/> */}
        
        <section className={styles.contact_home} id='contact'>
          <FormContact/>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // Consulta a Sanity para obtener los datos de los posts
  const posts = await client.fetch('*[_type == "post"]');
  const projects = await client.fetch('*[_type == "project"]');

  return {
    props: {
      posts,
      projects
    },
  };
}