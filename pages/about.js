import Layout from '@/components/Layout'
import React, { useState } from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const rows = [
    { title: 'Desarrollo', content: 'Impulsa el crecimiento de tu presencia digital mediante nuestro servicio de desarrollo. Desde la creación de aplicaciones web innovadoras hasta la programación de soluciones a medida, nuestro equipo de desarrolladores altamente capacitados se dedica a convertir tus ideas en realidad. Ya sea que necesites una plataforma de comercio electrónico robusta, una aplicación móvil atractiva o un sitio web personalizado, estamos aquí para transformar tu visión en una experiencia digital excepcional.' },
    { title: 'UI/UX', content: 'Ofrecemos experiencias digitales que cautivan y retienen a tus usuarios. Nuestro equipo de diseñadores UI/UX trabaja para crear interfaces intuitivas y atractivas que maximizan la satisfacción del usuario. Desde wireframes hasta prototipos y diseño final, cada paso se realiza con precisión y atención al detalle. Ya sea para una aplicación móvil, un sitio web o cualquier plataforma digital, garantizamos una experiencia de usuario excepcional que refleje la calidad y el valor de tu marca.' },
    { title: 'Branding & SEO', content: 'Destaca en un mercado saturado con nuestro servicio integral de branding y SEO. Construimos marcas memorables que conectan emocionalmente con tu audiencia, desde la creación de logotipos distintivos hasta el desarrollo de una identidad visual coherente. Además, optimizamos tu presencia en línea mediante estrategias de SEO avanzadas. Aumenta tu visibilidad en los motores de búsqueda, atrae tráfico de calidad y posiciona tu marca como líder en tu industria. Potencia tu imagen y alcanza nuevos horizontes con nuestro enfoque centrado en resultados.' },
    { title: 'Automatización', content: 'Optimiza tus procesos empresariales y aumenta la eficiencia con nuestro servicio de automatización. Implementamos soluciones personalizadas que eliminan tareas manuales repetitivas, reducen los errores y aceleran la toma de decisiones. Desde la automatización de flujos de trabajo hasta la integración de sistemas, te ayudamos a liberar recursos para que puedas concentrarte en el crecimiento estratégico de tu negocio.' },
    { title: 'Consultorias', content: 'Nuestra consultoría se basa en la experiencia y el conocimiento profundo de la industria. Ofrecemos asesoramiento estratégico para impulsar tu empresa hacia el éxito. Ya sea que necesites orientación en estrategias de marketing digital, desarrollo empresarial o transformación digital, nuestro equipo de expertos está listo para proporcionar soluciones personalizadas que se alineen con tus objetivos y desafíos específicos.' },
  ];

  return (
    <Layout title_nav={'Sobre mi'}>
      <section className={styles.header}>
        <div className={styles.bg_dark}></div>
        <div className='container'>
          <div className={styles.header_about}>
            <div className={styles.div_about}>
              <h2>Sobre mi</h2>
              <h1>Jaso</h1>
              <div className={styles.container_img}>
                <Image
                  className={styles.img_jaso}
                  src={'/img/jaso_about.jpg'}
                  fill
                  alt='jaso'
                />
              </div>
            </div>
            <div className={styles.content_info}>
              <h2>Desarrollador web, Electrónico industrial</h2>
              <p>¡Bienvenido a mi mundo multifacético! Soy Juan Samaritano, un apasionado desarrollador y profesional en electrónica industrial con una fascinación por la creación visual. Mi portafolio es un testimonio de mi dedicación a la innovación y a la exploración constante de nuevas fronteras.</p>
              
              <div className={styles.skills}>
                <h3>Skills</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML/CSS3</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Ligthroom</li>
                  <li>Premier pro</li>
                  <li>Arduino</li>
                  <li>Python</li>
                </ul>
                <br/>
                <p>Como desarrollador, he acumulado experiencia en la creación de soluciones tecnológicas eficientes y escalables que marcan la diferencia en el mundo industrial. Mi habilidad para abordar desafíos complejos y mi enfoque proactivo hacia el desarrollo de sistemas me han permitido destacar en este campo en constante evolución.</p>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.div_about}>
              <div className={styles.container_img}>
                <Image
                className={styles.img_jaso}
                  src='/img/about_2.jpg'
                  fill
                  alt='jaso-blog'
                />
              </div>

            </div>
            <div className={styles.content_info}>
              <p>Paralelamente, mi corazón creativo encuentra expresión en la edición de fotos y videos. Me sumerjo en la estética visual, fusionando habilidades técnicas con una visión artística para contar historias de manera impactante. Esta dualidad entre lo técnico y lo creativo da como resultado un enfoque único y fresco en cada proyecto</p>
              <p>Mi curiosidad insaciable me lleva más allá de las líneas de código y circuitos. Disfruto dedicando tiempo a investigar y leer sobre el comportamiento humano, explorando las complejidades de la mente y las interacciones sociales. Esta pasión por entender lo que nos impulsa como seres humanos añade profundidad y perspectiva a mi trabajo, influyendo en la forma en que diseño soluciones y presento mis creaciones visuales.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.about_2}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.div_about}>
              <div className={styles.container_img}>
                <Image
                className={styles.img_jaso}
                  src='/img/about_2.jpg'
                  fill
                  alt='jaso-blog'
                />
              </div>

            </div>
            <div className={styles.content_info}>
              <p>Paralelamente, mi corazón creativo encuentra expresión en la edición de fotos y videos. Me sumerjo en la estética visual, fusionando habilidades técnicas con una visión artística para contar historias de manera impactante. Esta dualidad entre lo técnico y lo creativo da como resultado un enfoque único y fresco en cada proyecto</p>
              <p>Mi curiosidad insaciable me lleva más allá de las líneas de código y circuitos. Disfruto dedicando tiempo a investigar y leer sobre el comportamiento humano, explorando las complejidades de la mente y las interacciones sociales. Esta pasión por entender lo que nos impulsa como seres humanos añade profundidad y perspectiva a mi trabajo, influyendo en la forma en que diseño soluciones y presento mis creaciones visuales.</p>
            </div>
          </div>
        </div>
      </section> */}
      <div className='container'>  
        <hr className='hr_dark'/>
      </div>
      <section className={styles.services_about}>
        <div className='container'>
          <div className={styles.content}>
             
              <div className={styles.services_content}>
                <h2>Nuestros Servicios</h2>
                {rows.map((row, index) => (
                  <div key={index} className="accordion-row">
                    <div
                      className={`accordion-title ${index === expandedIndex ? 'expanded' : ''}`}
                      onClick={() => handleToggle(index)}
                    >
                      {row.title}
                    </div>
                    {index === expandedIndex && (
                      <div className="accordion-content">{row.content}</div>
                    )}
                  </div>
                ))}
              </div>
              <div>
              </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About