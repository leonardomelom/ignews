import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss'

import { SignInButton } from '../SignInButton';
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt="ig.news" />
        <nav>
          <a href="">Home</a>
          <a href="">Posts</a>
        </nav>

        <SignInButton/>
      </div>
    </header>
  );
}

 