import React from "react";
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Portafolio.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import environmentURL from "../data/environment";

export default function Home({ categories }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Portafolio de productos EP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.portafolio_container}>

        <div className={styles.portafolio_overlay}>

          <div className={styles.content_lay}>

            <header className={styles.header}>
              <Link href="/">
                <img src="/logo.png" alt="Logo Siemens" />
              </Link>
              <span onClick={handleBack}>Regresar</span>
              {/* <input placeholder="Búsqueda" /> */}
            </header>

            <main className={styles.main}>

              {
                categories.map((category, id) => {
                  return (
                    <section key={id} className={styles.categories_section}>
                      <h1>{category.name}</h1>
                      {category.subcategories.map((subcategory, id) => {
                        return (
                          <Link href='/subcategories/[id]' as={`/subcategories/${subcategory.subcategory_id}`} key={id} >
                            <a className='animate__animated animate__fadeIn'>{subcategory.name}</a>
                          </Link>
                        );
                      })}

                    </section>
                  );
                })
              }

            </main>

          </div>

          <div className={styles.aside}>
            <div className={styles.aside_free}>

            </div>
            <div className={styles.aside_image}>
              <img src="/safety.png" alt="Img de producto" className='animate__animated animate__fadeIn' />
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(`${environmentURL}/categories/`);

  const categories = data.map(category => {
    return {
      name: category.name,
      id: category.category_id,
      category_image: category.category_image,
      subcategories: category.subcategories,
    };
  });

  return {
    props: {
      categories
    }
  }
}

// This gets called on every request
// Solo durante el desarrollo y carga de base de datos por parte de los ingenieros de producto
// export async function getServerSideProps() {
//   const { data } = await axios.get(`${environmentURL}/categories/`);

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
