import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Projects.module.css'
import Image from 'next/image'

import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Blog = ({posts}) => {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const router = useRouter();

  useEffect(()=>{
    setUsuarios(posts)
    setTablaUsuarios(posts)
    },[]
  )
    
  // Handle search query
  useEffect(() => {
    if (router.query.q) {
      setBusqueda(router.query.q);
    }
    
  }, [router.query.q]);

  useEffect(() => {
    console.log(busqueda)
    if(busqueda){
      filtrar(busqueda) 
    }
  }, [busqueda]);

  const handleChange=e=>{
    setBusqueda(router.query.q);
    setBusqueda(e.target.value);
    filtrar(busqueda);
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
      <section className={styles.inicio}>
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
                    <div className={styles.post_img}>
                      <Image className={styles.card_img_post} src={post.img} fill alt={post.title}/>
                    </div>
                    
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
  const posts = await getAllFilesMetadata('blog');
  console.log(posts)
  return{
    props: {posts}
  }
}