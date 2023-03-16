import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Projects.module.css'
import Image from 'next/image'

export const works = [
  {
    img:'/projects/project1.jpg',
    title:'Landing page',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/dropdown-navigation/',
    code:'https://github.com/Jaso589/dropdown-navigation'
  },
  {
    img:'/projects/project2.jpg',
    title:'Advice generator',
    description:'Pagina generadora de frases responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/advice-generator/',
    code:'https://github.com/Jaso589/advice-generator'
  },
  {
    img:'/projects/project3.jpg',
    title:'Dashboard time',
    description:'Pagina de agenda de tiempo hecho en javascritp y html',
    deploy:'https://jaso589.github.io/dashboard-time/',
    code:'https://github.com/Jaso589/dashboard-time'
  },
  {
    img:'/projects/project4.jpg',
    title:'Landing page sunsyde',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/landing-page-sunsyde/',
    code:'https://github.com/Jaso589/landing-page-sunsyde'
  },
  {
    img:'/projects/project5.jpg',
    title:'Space turism',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/space-turism/',
    code:'https://github.com/Jaso589/space-turism'
  },
  {
    img:'/projects/project6.jpg',
    title:'Launch countdown timer',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/launch-countdwon-timer/',
    code:'https://github.com/Jaso589/launch-countdwon-timer'
  },
  {
    img:'/projects/project7.jpg',
    title:'Play rock paper scissors',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/play-rock-paper-scissors/',
    code:'https://github.com/Jaso589/play-rock-paper-scissors'
  },
  {
    img:'/projects/project8.jpg',
    title:'Url shortening api',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/url-shortening-api/',
    code:'https://github.com/Jaso589/url-shortening-api'
  },
  {
    img:'/projects/project9.jpg',
    title:'Manage landing page',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/manage-landing-page/',
    code:'https://github.com/Jaso589/manage-landing-page'
  },
  {
    img:'/projects/project10.jpg',
    title:'Bookmark landing page',
    description:'Pagina responsiva hecho en javascritp y html',
    deploy:'https://jaso589.github.io/bookmark-landing-page/',
    code:'https://github.com/Jaso589/bookmark-landing-page'
  }
  
  
]

const Projects = () => {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  
  useEffect(()=>{
    setUsuarios(works)
    setTablaUsuarios(works)
    },[]
  )
    

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }

  return (
    <Layout title_nav={'Portafolio'}>
      <section className='inicio'>
        <div className={styles.projects}>
          <div className={styles.aside}>
            <h2>Proyectos</h2>
            <p>Estos son algunos proyectos y productos en los que he trabajado</p>
          </div>
          <div className={styles.content}>
            <div className={styles.search}>
              <label>Buscar <input type={'search'} onChange={handleChange} value={busqueda} placeholder={'ingresa la word'}/></label>
              <span>N#: {usuarios.length}</span>
            </div>
            <div className={styles.cards}>
              {
                usuarios.map(({img, title, description, deploy, code, index}) => (
                  <div className={styles.card} key={title}>
                    <div className={styles.proyect_img}>
                      <Image
                        className={styles.img_card}
                        src={img}
                        fill
                        alt={title}
                        key={index}
                      />
                    </div>
                    
                    <div className={styles.card_content}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className={styles.card_links}>
                        <a className={styles.btn_link} href={deploy} target='_blank' rel="noopener noreferrer">Sitio</a>
                        <a className={styles.btn_link} href={code} target='_blank' rel="noopener noreferrer">Codigo</a>
                      </div>
                    </div>
                    
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects