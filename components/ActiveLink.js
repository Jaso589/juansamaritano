import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const style = {
  color:'#0834FF',
  fontWeight: 600,
}

export const ActiveLink = ({text, href}) => {

  const { asPath } = useRouter();
  return (
    <Link key={href} href={href} style={asPath === href ? style : null}>
      {text}
    </Link>
  )
}
