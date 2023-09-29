'use client'

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const handleClick1 = () => {
    window.location.href = 'https://open.spotify.com/intl-es/artist/5G92cL2m5BRKzz5GBYvaXP?si=AYIoxmgtShqAkNHaMEy71A'
    console.log('me fui')
  }
  const handleClick2 = () => {
    window.location.href = 'https://music.apple.com/us/artist/mistura/1586405987'
    console.log('me fui')
  }
  
  const handleClick3 = () => {
    window.location.href = 'https://music.youtube.com/channel/UCIfveHGDVQxyX14ScxBMLng'
    console.log('me fui')
  }
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image} />
      </div>
      <div className={styles.bar}/>
      <div className={styles.buttonContainer}>
        <div className={`${styles.buttonGroup} ${styles.row}`}>
          <div>
            <button className={styles.round1} onClick={handleClick1}></button>
            <button className={styles.round2} onClick={handleClick2}></button>
            <button className={styles.round3} onClick={handleClick3}></button>
          </div>
          <div>
            <button className={styles.square1} onClick={handleClick1}></button>
            <button className={styles.square2} onClick={handleClick2}></button>
            <button className={styles.square3} onClick={handleClick3}></button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
  );
}