import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Projects.module.css'
import Image from 'next/image'
// import { getAllFilesMetadata } from '@/src/lib/mdx'

const Projects = ({projects}) => {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  
  useEffect(()=>{
    setUsuarios(projects)
    setTablaUsuarios(projects)
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
      <section className={styles.inicio}>
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
                usuarios.map(({img, title, description, site, code, index}) => (
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
                        <a className={styles.btn_link} href={site} target='_blank' rel="noopener noreferrer">Sitio</a>
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

// export async function getStaticProps() {
//   const projects = await getAllFilesMetadata('projects');
//   return{
//     props: {projects}
//   }
// }