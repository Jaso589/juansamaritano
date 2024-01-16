import React, { useEffect, useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink'
import Image from 'next/image'
import SearchButton from './SearchButton'
import Link from 'next/link'

export const MenuItems1 = [
    {
      text:'Proyectos',
      href: '/#projects'
    },
    {
      text:'Blog',
      href: '/blog'
    },
  
  ]
export const MenuItems2 = [
  {
    text:'Sobre mi',
    href: '/about'
  },
  {
    text:'Contacto',
    href: '/contact'
  }
] 
export const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  
  const changedBg = () =>{
    // console.log(window.scrollY)

    if(window.scrollY >= 70){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changedBg)
  }, [])

  const [menu, setMenu] = useState(false);

  const menuOpen = {
    display: 'flex',
    opacity: '.95',
  }
  
  const handleMenu = () => (
    setMenu(() => !menu)
    
  )
  return (
    <>
        <header className={navbar? styles.header_scroll : styles.header}>
          <div className={styles.container}>
            <button onClick={handleMenu} className={styles.btn_menu}>
              {
                menu 
                ? <Image className={styles.close_menu} src={'/svg/close_d.svg'} width={20} height={20} alt='close_menu'/> 
                : <Image src={'/svg/menu_d.svg'} width={30} height={30} alt='menu_hamburguer'/>
              }      
            </button>
            <div className={styles.brand}>
              <Link href={'/'} className={styles.img_logo}>
                <Image
                  src={'/svg/JASO_W.svg'}
                  fill
                  alt='logo'
                />
              </Link>
            </div>
            <nav className={styles.navbar} >
            {
              MenuItems1.map(({text, href}) => (
                <ActiveLink href={href} key={href} text={text}></ActiveLink>
              ))
            }
            <span className={styles.logo_aux}></span>
            {
              MenuItems2.map(({text, href}) => (
                <ActiveLink href={href} key={href} text={text}></ActiveLink>
              ))
            }
            </nav>
            <SearchButton/>
          </div>
          <div className={menu ? styles.navbar_none : styles.navbar_left}>
              <div className={styles.content}>
                {
                  MenuItems1.map(({text, href}) => (
                    <ActiveLink href={href} key={href} text={text}></ActiveLink>
                  ))
                }
                {
                  MenuItems2.map(({text, href}) => (
                    <ActiveLink href={href} key={href} text={text}></ActiveLink>
                  ))
                } 
              </div>
              <div>
                <Link href={'/'}>
                  <Image
                    src={'/svg/jaso_v.svg'}
                    width={150}
                    height={150}
                    alt='jaso'
                  />
                </Link>
              </div>
              <div className={styles.links_social}>
                <Link href={'https://www.facebook.com/jaso.visual'} target='_blank' rel="noopener noreferrer">
                  <Image
                    src={'/svg/fb.svg'}
                    width={40}
                    height={40}
                    alt='fb'
                  />
                </Link>
                <Link href={'https://www.instagram.com/jaso.visual/'} target='_blank' rel="noopener noreferrer">
                  <Image
                    src={'/svg/instagram.svg'}
                    width={40}
                    height={40}
                    alt='fb'
                  />
                </Link>
                <Link href={'https://github.com/Jaso589'} target='_blank' rel="noopener noreferrer">
                  <Image
                    src={'/svg/github.svg'}
                    width={40}
                    height={40}
                    alt='fb'
                  />
                </Link>
                <Link href={'linkedin.com/in/juan-samaritano-olórtegui-5a739419b'} target='_blank' rel="noopener noreferrer">
                  <Image
                    src={'/svg/linkedin.svg'}
                    width={40}
                    height={40}
                    alt='fb'
                  />
                </Link>
              </div>
          </div>
        </header>
    </>
  )
}
