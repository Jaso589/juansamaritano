import {  getFileBySlug, getFiles } from '@/lib/mdx'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '@/components/Layout';
import styles from '@/styles/Post.module.css'

const Post = ({ source, frontmatter }) => {
  return (
    <Layout title_nav={frontmatter.slug}>
        <section className={styles.post_container}>
            <MDXRemote {...source}/>
        </section>
    </Layout>
    
  )
}

export default Post

export async function getStaticProps({ params }){ 
    const {source,  frontmatter} = await getFileBySlug(params.slug);
    
    return{
        props: { source,  frontmatter},
    };
}

export async function getStaticPaths(){
    const posts = await getFiles();
    const paths = posts.map((post) =>({
        params:{
            slug: post.replace(/\.mdx/, ""),
        },
    }));
    return{
        paths,
        fallback: false,
    }
}