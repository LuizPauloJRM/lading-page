import React from 'react';
import styles from '../styles/Home.module.css';
//header
import Header from "../components/Header";
export default function Home() {
  return(
    <div className={styles.container}>
      <Header />
    </div>
  );
}


