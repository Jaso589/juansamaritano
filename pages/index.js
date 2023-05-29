import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { works } from './projects'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import { FormContact } from '@/components/FormContact'
import SliderComponent from '@/components/SliderComponent'
import { getAllFilesMetadata } from '@/lib/mdx'
import SliderProject from '@/components/SliderProject'

const inter = Inter({ subsets: ['latin'] })

const techs = [
  {
    name:'java_tec',
    src: '/svg/javascript.svg',
  },
  {
    name:'react_tec',
    src: '/svg/react.svg',
  },
  {
    name:'node_tec',
    src: '/svg/nodejs.svg',
  },
  {
    name:'python_tec',
    src: '/svg/python.svg',
  },
  {
    name:'figma_tec',
    src: '/svg/figma.svg',
  }
]

const techSkill = ['HTML/CSS3', 'Figma', 'JavaScript', 'React', 'Adobe Ilustrator', 'Nodejs']

const services = [
  {
    service: 'Diseño UI & UX',
    icon: '/svg/diseño.svg',
    description:'Lorem ipsum dolor sit amet consectetur. In molestie aliquet auctor mauris consequat in.'
  },
  {
    service: 'Desarrollo',
    icon: '/svg/desarrollo.svg',
    description:'Lorem ipsum dolor sit amet consectetur. In molestie aliquet auctor mauris consequat in.'
  },
  {
    service: 'Automatizacion',
    icon: '/svg/automatizacion.svg',
    description:'Lorem ipsum dolor sit amet consectetur. In molestie aliquet auctor mauris consequat in.'
  },
  {
    service: 'Brandign SEO',
    icon: '/svg/branding.svg',
    description:'Lorem ipsum dolor sit amet consectetur. In molestie aliquet auctor mauris consequat in.'
  }
]

const posts =[
  {
    title:'hola1',
  },
  {
    title:'hola2'
  },
  {
    title:'hola3'
  }
]

export default function Home({ proyectoIndex, postIndex }) {
  const proyectos = [];
  const ite = () => {
    for (let i = 0; i < 4; i++) {
       proyectos.push(works[i])
    }
  }
  ite()
  // console.log(proyectoIndex)
  return (
    <>
      <Layout title_nav={'Home'}>
        <div className={styles.inicio}>
          <div className='container'>
            <div className={styles.content}>
              <div className={styles.blockTexts}>
                <div className={styles.text}>
                  <p>👋 Hola, mi nombre es</p>
                  <h2>
                    Juan Samaritano
                  </h2>
                  <h1>
                    Desarrollador web <br/>
                    Electronico Industrial 
                  </h1>
                  <button className={styles.contact_btn}><Link href={'#contact'}>Contactar</Link></button>
                </div>
                <div className={styles.tags_tech}>
                  {
                    techs.map(({src,name}) =>(
                      <div className={styles.tag_tech} key={name}>
                        <Image className={styles.img_tag}  src={src} width={54} height={54} alt={name}/>
                      </div>
                    ))
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
                      src={'/img/jasov.png'}
                      fill
                      alt={'foto_portafolio'}
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.posts_home}>
          <div className='container'>
            <h2>Explora mi blog</h2>
            <h3>Checa mis nuevos posts y entérate de las nuevas novedades que tengo para ti!!</h3>
            <div className={styles.slide_content}>
              <SliderComponent posts={postIndex}/>
            </div>
            
          </div>
        </section>
        <section className={styles.about_home}>
          <div className='container'>
            <div className={styles.about_container}>
              <div className={styles.text}>
                <h2>Sobre mi</h2>
                <h3>Quien soy?</h3>
                <p>Un profesional creativo, con capacidad de resiliencia y aprendizaje continuo. Me especializo en el desarrollo frontend y diseño UX/UI.</p>
                <p>Tengo estudios profesionales en Electrónica industrial, en este ámbito me dedico a explorar y estudiar proyectos de automatización</p>
                <h5>Aquí algunas tecnologías con los que he estado trabajando últimamente</h5>
                <ul>
                
                {
                  techSkill.map((a) =>(
                    <li key={a} > <Image className='check' src={'/svg/check.svg'} width={20} height={20} alt={a} /> {a}</li>
                  ))
                }
              </ul>
              </div>
              
            <div className={styles.about_img}>
              <Image
                src={'/img/jaso_tag.jpg'}
                fill
                alt='jaso_about'
              />
            </div>
            </div>
          </div>
        </section>
        <section className={styles.services_home}>
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
        <hr className='hr_div container'/>
        <section className={styles.projects_home}>
          <div className='container'>
              <h2>Proyectos</h2>
              <h3>Revisa algunos proyectos en los cuales he trabajado</h3>
              <div className={styles.slide_content}>
                <SliderProject projectHome={proyectoIndex}/>
              </div>
              
          </div>
        </section>
        <section className={styles.contact_home} id='contact'>
          <FormContact/>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const postIndex = await getAllFilesMetadata('blog');
  const proyectoIndex= await getAllFilesMetadata('projects');
  // console.log(proyectoIndex)
  return{
    props: {proyectoIndex, postIndex}
  }
}
