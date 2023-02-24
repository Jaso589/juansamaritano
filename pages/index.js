import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { works } from './projects'
import Link from 'next/link'

import { FormContact } from '@/components/FormContact'

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
    icon: '/svg/ui_ux.svg'
  },
  {
    service: 'Desarrollo web',
    icon: '/svg/brackets.svg'
  },
  {
    service: 'Branding y posicionamiento',
    icon: '/svg/seo.svg'
  }
]



export default function Home() {
  const proyectos = [];
  const ite = () => {
    for (let i = 0; i < 4; i++) {
       proyectos.push(works[i])
    }
  }
  ite()
  return (
    <>
      <Layout title_nav={'Home'}>
        <div className='inicio'>
          <div className='content container'>
            <div className='blockTexts'>
              <p>👋 Hola, mi nombre es</p>
              <h2>
                Juan Samaritano
              </h2>
              <h1>
                Desarrollador web y electrónico 
              </h1>
              <button className='contact_btn'><Link href={'#contact'}>Contactar</Link></button>
              <div className='tags_tech'>
                {
                  techs.map(({src,name}) =>(
                    <div className='tag_tech' key={name}>
                      <Image className='img_tag'  src={src} width={54} height={54} alt={name}/>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='img_jaso'>
            <div className="circle">
              <div className="rotate">
                <span>S</span><span>i</span><span> </span><span>n</span><span>o</span><span> </span><span>p</span><span>u</span><span>e</span><span>d</span><span>e</span><span>s</span><span> </span><span>o</span><span>b</span><span>t</span><span>e</span><span>n</span><span>e</span><span>r</span><span> </span><span>u</span><span>n</span><span> </span><span>m</span><span>i</span><span>l</span><span>a</span><span>g</span><span>r</span><span>o</span><span>,</span><span> </span><span>c</span><span>o</span><span>n</span><span>v</span><span>i</span><span>é</span><span>r</span><span>t</span><span>e</span><span>t</span><span>e</span><span> </span><span>e</span><span>n</span><span> </span><span>é</span><span>l</span>
              </div>
            </div>
              <Image
                className='jaso'
                src={'/img/foto_portafolio.png'}
                width={450}
                height={600}
                alt={'foto_portafolio'}
              />
            </div>
          </div>
        </div>
        
        <section>
          <div className='aboutMe container'>
            <div className='about_text'>
              <h2>Sobre mi <span>quien soy</span></h2>
            </div>
            <div className='description'>
              <p>Un profesional creativo, con capacidad de resiliencia y aprendizaje continuo.
                Me especializo en el desarrollo frontend y diseño UX/UI.
              </p>
              <p>Aquí algunas tecnologías con los que he estado trabajando últimamente</p>
              <ul>
                
                {
                  techSkill.map((a) =>(
                    <li key={a} > <Image className='check' src={'/svg/check.svg'} width={20} height={20} alt={a} /> {a}</li>
                  ))
                }
              </ul>
            </div>
            <Image
              className='img_about'
              src={'/img/laptop.jpg'} 
              width={400}
              height={200}   
              alt={'img_about'}        
            />
          </div>
        </section>
        <hr className='hr_div container'/>
        <section>
          <div className='services container'>
            <h2>Servicios</h2>
            <p>Puedes contar con algunos de los servicios que ofrezco
            </p>
            <div className='cardServices'>
              {
                services.map(({service, icon}) => (
                  <div className='card' key={service}>
                    <Image className='card_img'  src={icon} width={73} height={73} alt={service}/>
                    <p>{service}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <hr className='hr_div container'/>
        <section>
          <div className='works container'>
              <h2>Proyectos</h2>
              <p>Estos son algunos trabajos que he hecho, puedes revisar mas en la pagina de proyectos
              </p>
              <div className='projects_home'>
                  {
                    proyectos.map(({img, title}) => (
                      <div className='card' key={title}>
                        <Image
                          className='card_img'
                          src={img}
                          width={300}
                          height={220}
                          alt={title}
                        />
                        <div >
                          <button><Link href={'/projects'}>Ver más</Link></button>
                          
                        </div>
                      </div>
                    ))
                  }
              </div>
          </div>
        </section>
        <section className='contact' id='contact'>
          <FormContact/>
        </section>
      </Layout>
    </>
  )
}
