import groq from 'groq'
import { client, getClient, usePreviewSubscription} from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import Layout from '@/components/Layout';
import styles from '@/styles/Post.module.css'
import Link from 'next/link';
import Image from 'next/image';
// Función para obtener datos del post por su slug
const getPostData = async (slug) => {
  const data = await getClient().fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
  return data;
};

const PostComponents = {
  types: {
      image: ({value}) => {
          return (
              <img
                  className="post-image"
                  alt={value.alt || ' '}
                  src={urlForImage(value)}
              />
          )
      }
  }
}

export default function ProjectPost({ post, posts }) {
  // console.log(posts)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      // timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
  };

  // Utiliza el objeto postData para mostrar el contenido del post en tu página
  return (
    <Layout title_nav={post ? post.title : ''}>
      {/* <section className={styles.post_header}>
      <Image className={styles.card_img_post} src={`${urlForImage(post.mainImage)}`} fill alt={post.title}/>
      <div className={styles.header_title}>
        <div className='container'>
          <h1>{post.title}</h1>
        </div>
      </div>
      </section> */}
      <section className={styles.blog_home}>
        <div className='container'>
          <div className={styles.post_container}>
            <div className={styles.post}>
              {post && <article key={post.slug.current}>
                  <div>
                    <PortableText value={post.body} components={PostComponents}/>
                  </div>
                </article>}
            </div>
            <aside className={styles.aside}>
              <h3>Sigue explorando</h3>
              <ol>
                {
                  posts.map((post)=>(
                    <li key={'link_' + post.slug.current}>
                      <Link href=
                      {`./${post.slug.current}`}>
                        <div>
                          <span>{formatDate(post.publishedAt)}</span>
                          <h4>{post.title}</h4>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ol>
            </aside>
          </div>

        </div>
      </section>
    </Layout>
  );
}
export const getStaticPaths = async () =>
{
    const paths = await getClient().fetch(
        groq`*[_type == "project" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true,
    }
}

export const getStaticProps = async (
    {
        params, preview = false
    }
    ) =>
    {
        const post = await getClient().fetch(
            `*[_type == "project" && slug.current == $slug][0]`,
            { slug: params.slug })
        const posts = await client.fetch('*[_type == "project"]');
        return {
            props: {
                post,
                posts
            }
        }
    }