import Link from 'next/link'
import React from 'react'
import { MenuItems } from './Navbar'
import styles from '@/styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Juan Samaritano | Jaso Visual © Todos los derechos reservados</p>
        </div>
    </footer>
  )
}
