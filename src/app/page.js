'use client'

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image} />
      </div>
      <div className={styles.bar}/>
      <div className={styles.buttonContainer}>
        <div className={`${styles.buttonGroup} ${styles.row}`}>
          <div>
            <button className={styles.round1}></button>
            <button className={styles.round2}></button>
            <button className={styles.round3}></button>
          </div>
          <div>
            <button className={styles.square1}></button>
            <button className={styles.square2}></button>
            <button className={styles.square3}></button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
  );
}



