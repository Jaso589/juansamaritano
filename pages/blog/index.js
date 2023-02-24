import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Projects.module.css'
import Image from 'next/image'

import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'

const Blog = ({posts}) => {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  
  useEffect(()=>{
    setUsuarios(posts)
    setTablaUsuarios(posts)
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
    <Layout title_nav={'Blog'}>
      <section className='inicio'>
        <div className={styles.projects}>
          <div className={styles.aside}>
            <h2>Mi Blog</h2>
            <p>Estos son algunos articulos que he escrito</p>
          </div>
          <div className={styles.content}>
            <div className={styles.search}>
              <label>Buscar <input type={'search'} onChange={handleChange} value={busqueda} placeholder={'ingresa la word'}/></label>
              <span>N#: {usuarios.length}</span>
            </div>
            <div className={styles.cards}>
              {
                usuarios.map( post => (
                  <Link className={styles.card_post} key={post.slug} href={`blog/${post.slug}`}>
                    <Image className={styles.card_img_post} src={post.img} width={200} height={100} alt={post.title}/>
                    <div>
                      <h2>{post.title}</h2>
                      <p>{post.date}</p>
                    </div>
                    
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts)
  return{
    props: {posts}
  }
}