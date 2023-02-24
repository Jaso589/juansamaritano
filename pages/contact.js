import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import React from 'react'
import styles from '@/styles/Contact.module.css'
import { FormContact } from '@/components/FormContact'

const contact = () => {
  return (
    <Layout title_nav={'Contacto'}>
      <div  className={styles.contact_container}>
        <FormContact/>
      </div>
    </Layout>
  )
}

export default contact