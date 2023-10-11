'use client'

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const handleClick1 = () => {
    window.location.href = 'https://open.spotify.com/intl-es/artist/5G92cL2m5BRKzz5GBYvaXP?si=AYIoxmgtShqAkNHaMEy71A'
  }
  const handleClick2 = () => {
    window.location.href = 'https://music.apple.com/us/artist/mistura/1586405987'
  }

  const handleClick3 = () => {
    window.location.href = 'https://music.youtube.com/channel/UCIfveHGDVQxyX14ScxBMLng'
  }
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image} />
      </div>
      <div className={styles.bar} />
      <div className={styles.buttonContainer}>
        <div className={`${styles.buttonGroup} ${styles.row}`}>
          <div className={styles.squareButtons}>
            <button className={styles.square1} onClick={handleClick1}>
              <Image className={styles.spotiIMG} src='/spoti-logo.png' alt="" width={55} height={55} />
              Spotify
            </button>
            <button className={styles.square2} onClick={handleClick2}>
            <Image className={styles.appleIMG} src='/manzana-apple.png' alt="" width={55} height={55} />
              Apple Music
            </button>
            <button className={styles.square3} onClick={handleClick3}>
            <Image className={styles.ytIMG} src='/youtube-logo.png' alt="" width={55} height={55} />
              Youtube Music
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
  );
}