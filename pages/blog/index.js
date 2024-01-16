import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Projects.module.css'
import Image from 'next/image'

// import { getAllFilesMetadata } from '@/src/lib/mdx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

const Blog = ({posts}) => {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const router = useRouter();
  // console.log(posts)
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
    // console.log(busqueda)
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
        <div className={styles.header_home}>
          <div className='bg_dark'></div>
          <div className='container'>
            <div className={styles.brand_blog}>
              <Image
                src={'/img/logo_blog.png'}
                width={200}
                height={200}
                alt='jaso'
              />
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <div className='container'>
            <div className={styles.aside}>
              <h2>Mi Blog</h2>
              {/* <p>Estos son algunos articulos que he escrito</p> */}
              <div className={styles.search}>
                <label>Buscar <input type={'search'} onChange={handleChange} value={busqueda} placeholder={'Busca un tema...'}/></label>
                <span>N#: {usuarios.length}</span>
              </div>
            </div>
            <div className={styles.content}>
                {
                  usuarios.map( post => (
                    <Link className={styles.card_post} key={post.slug.current} href=
                    {`blog/${post.slug.current}`}>
                      <div className={styles.post_img}>
                        <Image className={styles.card_img_post} src={urlForImage(post.mainImage)} fill alt={post.title}/>
                      </div>
                      <div>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
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
  // Consulta a Sanity para obtener los datos de los posts
  const posts = await client.fetch('*[_type == "post"]');

  return {
    props: {
      posts,
    },
  };
}