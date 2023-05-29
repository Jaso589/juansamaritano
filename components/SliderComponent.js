import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from '@/styles/Slider.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import { urlFor } from '@/lib/sanity';
// import Tag from './Tag';

const SliderComponent = ({ posts }) => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  // const slidePosts = posts.slice(0, 10);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 900) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // console.log(posts)
  return (
    <Slider className={styles.sliderContainer} {...settings}>
      {
        posts.map((post) =>(
          <div className={styles.card_post} key={post.title}>
          <div>
            <div className={styles.slide}>
              <Link href={`/blog/${post.slug}`}>
              <div className={styles.img_post}>
                <Image
                  src={post.img}
                  fill
                  alt={post.title + 'img'}
                />
              </div>
              <div className={styles.text_post}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              </Link>
            </div>
          </div>
          </div>
        ))
      }
    </Slider>
  );
};

export default SliderComponent;