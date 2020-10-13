import React from "react";
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Portafolio.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio de productos EP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.portafolio_container}>

        <div className={styles.portafolio_overlay}>

          <div className={styles.content_lay}>

            <nav className={styles.nav}>
              <Link href="/">
                <img src="/logo.png" alt="Logo Siemens" />
              </Link>
              {/* <input placeholder="Búsqueda" /> */}
            </nav>

            <main className={styles.main}>
              <div className={styles.content}>

              </div>
            </main>

          </div>

          <div className={styles.aside}>
            <div className={styles.aside_free}></div>
            <div className={styles.aside_image}>
              <img src="/safety.png" alt="Img de producto" />
            </div>
          </div>

        </div>




      </div>

    </>
  );
}

// export async function getStaticProps() {
//   const { data } = await axios.get(`http://18.191.231.159:1337/categories/`);

//   const categories = data.map(category => {
//     return {
//       name: category.name,
//       id: category.category_id,
//       category_image: category.category_image,
//       subcategories: category.subcategories,
//     };
//   });

//   return {
//     props: {
//       categories
//     }
//   }
// }

// This gets called on every request
// export async function getServerSideProps() {
//   const { data } = await axios.get(`http://13.58.149.30:1337/categories/`);

//   const categories = data.map(category => {
//     return {
//       name: category.name,
//       id: category.category_id,
//       category_image: category.category_image,
//       subcategories: category.subcategories,
//     };
//   });

//   return {
//     props: {
//       categories
//     }
//   }
// }
