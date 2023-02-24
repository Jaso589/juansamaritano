import Link from 'next/link'
import React from 'react'
import { MenuItems } from './Navbar'
import styles from '@/styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Juan Samaritano © Todos los derechos reservados</p>
          <nav className={styles.nav_footer}>
              {MenuItems.map(({href, text}) => (
                <Link href={href} key={text}>{text}</Link>
              ))}
          </nav>
        </div>
    </footer>
  )
}
