import React, { useState } from 'react';
import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, signOut, useSession } from "next-auth/react"

export function SignInButton() {
  const session = useSession()
  let name = session.data?.user?.name
    return session.status === 'authenticated' ? (
      <button
      type='button'
      className={styles.signInButton}
      onClick={()=> signOut()}
      >
      <FaGithub color='#04d361'/>
      {name} 
      <FiX color='#7474380' className={styles.closeIcon}/>
      </button>
    ):(
    <button
    type='button'
    className={styles.signInButton}
    onClick={()=> signIn('github')}
    >
      <FaGithub color='#eba417'/>
      SignIn with GitHub 
    </button>
  )
  }
