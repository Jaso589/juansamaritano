import React, { useEffect, useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink'
import Image from 'next/image'

export const MenuItems = [
    {
      text:'Inicio',
      href: '/'
    },
    {
      text:'Proyectos',
      href: '/projects'
    },
    {
      text:'Contacto',
      href: '/contact'
    },
    {
      text:'Blog',
      href: '/blog'
    }
  ]
  
export const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  
  const changedBg = () =>{
    console.log(window.scrollY)

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
            <div className={styles.brand}>
              <p>Juan Samaritano</p>
            </div>
            <nav className={styles.navbar} style={menu ? menuOpen : null}>
            {
              MenuItems.map(({text, href}) => (
                <ActiveLink href={href} key={href} text={text}></ActiveLink>
              ))
            }
            </nav>
            <button onClick={handleMenu} className={styles.btn_menu}>
              {
                menu 
                ? <Image className={styles.close_menu} src={'/svg/close.svg'} width={30} height={30} alt='close_menu'/> 
                : <Image src={'/svg/menu_hamburger.svg'} width={50} height={50} alt='menu_hamburguer'/>
              }      
            </button>

          </div>
        </header>
    </>
  )
}
