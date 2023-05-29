import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from '@/styles/Slider.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import { urlFor } from '@/lib/sanity';
// import Tag from './Tag';

const SliderProject = ({ projectHome }) => {
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
  console.log(projectHome)
  return (
    <Slider className={styles.sliderContainer} {...settings}>
      {
        projectHome.map((project) =>(
          <div className={styles.card_post} key={project.title}>
          <div>
            <div className={styles.slide}>
              <Link href={`/project/${project.slug}`}>
              <div className={styles.img_post}>
                <Image
                  src={project.img}
                  fill
                  alt={project.title + 'img'}
                />
              </div>
              <div className={styles.text_post}>
                <h3>{project.title}</h3>
                <p>{project.excerpt}</p>
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

export default SliderProject;